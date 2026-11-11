import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { BRAZILIAN_CLUBS_2026 } from "@/modules/clubs/brazilian-clubs-2026";
import { simulateMatch } from "@/modules/matches/simulate";

type Club = { id: string; name: string; state: string; division: string };
type Match = { id: string; home: Club; away: Club; homeGoals?: number; awayGoals?: number; penalties?: string; winner?: Club };
type CupState = { round: number; rounds: Match[][]; champion?: Club };

const STORAGE_KEY = "ketv-copa-do-brasil-2027-v1";
const ROUND_NAMES = ["Primeira rodada", "Segunda rodada", "Terceira rodada", "Oitavas de final", "Quartas de final", "Semifinal", "Final"];
const clubs = BRAZILIAN_CLUBS_2026 as Club[];
const defaultEntrants = clubs.filter((club) => club.division === "Série A").concat(
  clubs.filter((club) => club.division !== "Série A").slice(0, 108),
).slice(0, 128);

function shuffled<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function makeRound(teams: Club[], round: number): Match[] {
  const draw = shuffled(teams);
  return Array.from({ length: draw.length / 2 }, (_, index) => ({
    id: `r${round}-m${index + 1}`,
    home: draw[index * 2]!,
    away: draw[index * 2 + 1]!,
  }));
}

function initialCup(): CupState {
  return { round: 0, rounds: [makeRound(defaultEntrants, 0)] };
}

function Page() {
  const [cup, setCup] = useState<CupState>(() => {
    if (typeof window === "undefined") return initialCup();
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) as CupState : initialCup();
    } catch {
      return initialCup();
    }
  });
  const [notice, setNotice] = useState("Sorteie os confrontos e simule cada partida para avançar.");
  useEffect(() => { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cup)); }, [cup]);

  const currentMatches = cup.rounds[cup.round] ?? [];
  const finished = currentMatches.length > 0 && currentMatches.every((match) => match.winner);
  const totalMatches = cup.rounds.reduce((sum, round) => sum + round.length, 0);
  const completedMatches = cup.rounds.reduce((sum, round) => sum + round.filter((match) => match.winner).length, 0);

  function simulateOne(matchId: string) {
    setCup((previous) => {
      const rounds = previous.rounds.map((round) => [...round]);
      const match = rounds[previous.round]?.find((item) => item.id === matchId);
      if (!match || match.winner) return previous;
      const result = simulateMatch(
        { id: match.home.id, name: match.home.name, attack: rating(match.home, 1), midfield: rating(match.home, 2), defense: rating(match.home, 3) },
        { id: match.away.id, name: match.away.name, attack: rating(match.away, 1), midfield: rating(match.away, 2), defense: rating(match.away, 3) },
      );
      const tied = result.homeGoals === result.awayGoals;
      const homeWins = tied ? Math.random() >= 0.5 : result.homeGoals > result.awayGoals;
      rounds[previous.round]![rounds[previous.round]!.findIndex((item) => item.id === matchId)] = {
        ...match, homeGoals: result.homeGoals, awayGoals: result.awayGoals,
        ...(tied ? { penalties: homeWins ? "5 x 4" : "4 x 5" } : {}),
        winner: homeWins ? match.home : match.away,
      };
      return { ...previous, rounds };
    });
  }

  function simulateAll() {
    setCup((previous) => {
      const rounds = previous.rounds.map((round) => [...round]);
      rounds[previous.round] = (rounds[previous.round] ?? []).map((match) => {
        if (match.winner) return match;
        const result = simulateMatch(
          { id: match.home.id, name: match.home.name, attack: rating(match.home, 1), midfield: rating(match.home, 2), defense: rating(match.home, 3) },
          { id: match.away.id, name: match.away.name, attack: rating(match.away, 1), midfield: rating(match.away, 2), defense: rating(match.away, 3) },
        );
        const tied = result.homeGoals === result.awayGoals;
        const homeWins = tied ? Math.random() >= 0.5 : result.homeGoals > result.awayGoals;
        return { ...match, homeGoals: result.homeGoals, awayGoals: result.awayGoals, ...(tied ? { penalties: homeWins ? "5 x 4" : "4 x 5" } : {}), winner: homeWins ? match.home : match.away };
      });
      return { ...previous, rounds };
    });
    setNotice("Partidas da fase simuladas. Confira os classificados.");
  }

  function advance() {
    if (!finished) return;
    const winners = currentMatches.map((match) => match.winner!);
    if (winners.length === 1) {
      setCup((previous) => ({ ...previous, champion: winners[0] }));
      setNotice(`Campeão: ${winners[0]!.name}!`);
      return;
    }
    const nextRound = cup.round + 1;
    setCup((previous) => ({ ...previous, round: nextRound, rounds: [...previous.rounds, makeRound(winners, nextRound)] }));
    setNotice(`${ROUND_NAMES[nextRound] ?? "Próxima fase"} sorteada.`);
  }

  function reset() {
    if (!window.confirm("Apagar todos os resultados e sortear novamente a Copa do Brasil?")) return;
    const fresh = initialCup();
    setCup(fresh);
    setNotice("Nova edição criada. Os resultados anteriores foram apagados.");
  }

  const currentName = ROUND_NAMES[cup.round] ?? "Competição encerrada";
  const progress = Math.round((completedMatches / 127) * 100);
  const entrantsWarning = useMemo(() => defaultEntrants.length !== 128, []);
  return (
    <>
      <PageHeader kicker="Temporada 2027 · Mata-mata" title="Copa do Brasil">
        Simulador de competição com 128 participantes, sorteio de confrontos, partidas, pênaltis e avanço automático até a decisão.
      </PageHeader>
      <section className="mb-6 rounded-lg border border-primary/30 bg-card p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div><p className="text-xs font-semibold uppercase tracking-widest text-primary">Edição 2027</p><h2 className="font-display text-2xl font-bold uppercase">Caminho até a taça</h2></div>
          <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{completedMatches}/127 jogos</span>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} /></div>
        <p className="mt-3 text-sm text-muted-foreground">{notice}</p>
        {entrantsWarning && <p className="mt-2 text-sm text-destructive">A base atual de clubes não contém 128 equipes; revise o cadastro de participantes.</p>}
        <div className="mt-4 flex flex-wrap gap-2">
          <button onClick={simulateAll} disabled={finished || Boolean(cup.champion)} className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground disabled:opacity-40">Simular fase inteira</button>
          <button onClick={advance} disabled={!finished || Boolean(cup.champion)} className="rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary disabled:opacity-40">Avançar classificados</button>
          <button onClick={reset} className="rounded-md border border-border px-4 py-2 text-sm font-semibold">Reiniciar edição</button>
        </div>
      </section>

      {cup.champion && <section className="mb-6 rounded-lg border border-primary bg-primary/10 p-6 text-center"><p className="text-xs font-bold uppercase tracking-widest text-primary">Campeão da Copa do Brasil 2027</p><h2 className="mt-2 font-display text-4xl font-black uppercase">{cup.champion.name}</h2><p className="mt-1 text-sm text-muted-foreground">{cup.champion.state}</p></section>}

      <div className="mb-4 flex flex-wrap items-center justify-between gap-3"><h2 className="font-display text-2xl font-bold uppercase">{currentName}</h2><span className="text-sm text-muted-foreground">{currentMatches.filter((match) => match.winner).length} de {currentMatches.length} confrontos concluídos</span></div>
      <div className="grid gap-3 sm:grid-cols-2">
        {currentMatches.map((match, index) => (
          <article key={match.id} className="rounded-md border border-border bg-card p-4">
            <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Confronto {index + 1}</p>
            <div className="flex items-center justify-between gap-3"><span className="font-semibold">{match.home.name}</span><strong className="font-display text-2xl tabular-nums">{match.homeGoals ?? "–"}</strong></div>
            <div className="my-2 border-t border-border" />
            <div className="flex items-center justify-between gap-3"><span className="font-semibold">{match.away.name}</span><strong className="font-display text-2xl tabular-nums">{match.awayGoals ?? "–"}</strong></div>
            {match.penalties && <p className="mt-2 text-xs text-muted-foreground">Pênaltis: {match.penalties}</p>}
            {match.winner && <p className="mt-2 text-xs font-bold text-primary">Classificado: {match.winner.name}</p>}
            <button onClick={() => simulateOne(match.id)} disabled={Boolean(match.winner) || Boolean(cup.champion)} className="mt-3 w-full rounded-md border border-primary/50 px-3 py-2 text-sm font-semibold text-primary disabled:opacity-40">{match.winner ? "Partida concluída" : "Simular partida"}</button>
          </article>
        ))}
      </div>
      <section className="mt-8 rounded-lg border border-border bg-card p-5">
        <h3 className="font-display text-xl font-bold uppercase">Regulamento e transparência</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
          <li>A CBF confirmou 128 participantes em 2027, com 20 vagas da Série A de 2026 e seis vagas para campeões regionais e nacionais de 2026.</li>
          <li>Os campeões estaduais de 2026 entram na segunda fase, exceto os clubes da Série A, que entram na quinta fase.</li>
          <li>Este módulo já permite jogar um mata-mata completo de 128 clubes. O desenho exato das fases, a lista oficial dos classificados e os cruzamentos serão ajustados quando o REC e a tabela detalhada de 2027 forem publicados pela CBF.</li>
          <li>Resultados e andamento ficam salvos neste navegador. As partidas são simulações do jogo, não resultados oficiais da CBF.</li>
        </ul>
        <a className="mt-4 inline-flex text-sm font-semibold text-primary underline" href="https://www.cbf.com.br/futebol-brasileiro/noticias/campeonato-brasileiro/a/cbf-oficializa-calendario-do-futebol-profissional-masculino-de-2027" target="_blank" rel="noreferrer">Consultar calendário oficial da CBF</a>
      </section>
    </>
  );
}

function rating(club: Club, attribute: number): number {
  const base = club.division === "Série A" ? 76 : club.division === "Série B" ? 68 : club.division === "Série C" ? 62 : 56;
  return Math.max(35, Math.min(92, base + ((club.id.length * (attribute + 3)) % 13) - 6));
}

export const Route = createFileRoute("/copa-do-brasil")({ component: Page });
