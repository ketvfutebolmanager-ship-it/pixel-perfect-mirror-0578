import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { getClubsByDivision, type BrazilianDivision } from "@/modules/clubs/brazilian-clubs-2026";
import { simulateMatch, type MatchResult, type MatchTeam } from "@/modules/matches/simulate";
import type { CareerSave } from "./nova-carreira";

export const Route = createFileRoute("/partida")({
  head: () => ({ meta: [{ title: "Central da partida — KE TV Football Manager" }] }),
  component: Page,
});

type MatchSpeed = "slow" | "medium" | "fast";
type Formation = "4-4-2" | "4-3-3" | "3-5-2" | "4-2-3-1";
type Pressure = "Baixa" | "Média" | "Alta";
const SPEEDS: Record<MatchSpeed, { label: string; interval: number }> = {
  slow: { label: "Lento", interval: 1200 },
  medium: { label: "Médio", interval: 650 },
  fast: { label: "Rápido", interval: 250 },
};

// Escudos públicos do pacote de imagens do Brasileirão 2026 (Série A).
const CRESTS: Record<string, string> = {
  "Athletico Paranaense": "Athletico Paranaense.png",
  "Atlético Mineiro": "Atlético Mineiro.png",
  Bahia: "Bahia.png",
  Botafogo: "Botafogo.png",
  Chapecoense: "Chapecoense.png",
  Corinthians: "Corinthians.png",
  Coritiba: "Coritiba.png",
  Cruzeiro: "Cruzeiro.png",
  Flamengo: "Flamengo.png",
  Fluminense: "Fluminense.png",
  Grêmio: "Grêmio.png",
  Internacional: "Internacional.png",
  Mirassol: "Mirassol.png",
  Palmeiras: "Palmeiras.png",
  "Red Bull Bragantino": "Red Bull Bragantino.png",
  Remo: "Remo.png",
  Santos: "Santos.png",
  "São Paulo": "São Paulo.png",
  "Vasco da Gama": "Vasco da Gama.png",
  Vitória: "Vitória.png",
};
const STADIUMS: Record<string, string> = {
  "Athletico Paranaense": "Ligga Arena",
  "Atlético Mineiro": "Arena MRV",
  Bahia: "Arena Fonte Nova",
  Botafogo: "Estádio Nilton Santos",
  Chapecoense: "Arena Condá",
  Corinthians: "Neo Química Arena",
  Coritiba: "Estádio Couto Pereira",
  Cruzeiro: "Mineirão",
  Flamengo: "Maracanã",
  Fluminense: "Maracanã",
  Grêmio: "Arena do Grêmio",
  Internacional: "Estádio Beira-Rio",
  Mirassol: "Estádio José Maria de Campos Maia",
  Palmeiras: "Nubank Parque",
  "Red Bull Bragantino": "Estádio Cícero de Souza Marques",
  Remo: "Estádio Mangueirão",
  Santos: "Vila Belmiro",
  "São Paulo": "MorumBIS",
  "Vasco da Gama": "São Januário",
  Vitória: "Barradão",
};

function Crest({ club }: { club: string }) {
  const file = CRESTS[club];
  if (!file) return <span aria-label={`Escudo de ${club} não cadastrado`} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-black text-primary">{club.split(/\\s+/).map((part) => part[0]).slice(0, 3).join("")}</span>;
  return <img src={`https://raw.githubusercontent.com/Lobobinho/Escudos-dos-Clubes-do-Brasileirao-2026/master/${encodeURIComponent(file).replace(/%20/g, "%20")}`} alt={`Escudo do ${club}`} className="h-12 w-12 shrink-0 object-contain" />;
}

function Page() {
  const [career, setCareer] = useState<CareerSave | null>(() => {
    try {
      const raw = window.localStorage.getItem("ketvfm-career");
      return raw ? JSON.parse(raw) as CareerSave : null;
    } catch { return null; }
  });
  const availableOpponents = career
    ? getClubsByDivision(career.division as BrazilianDivision).filter((club) => club.name !== career.club)
    : [];
  const [opponentId, setOpponentId] = useState(() => availableOpponents[0]?.id ?? "");
  const [speed, setSpeed] = useState<MatchSpeed>("medium");
  const [result, setResult] = useState<MatchResult | null>(null);
  const [minute, setMinute] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [halftime, setHalftime] = useState(false);
  const [formation, setFormation] = useState<Formation>("4-3-3");
  const [pressure, setPressure] = useState<Pressure>("Média");
  const [tacticalApproach, setTacticalApproach] = useState<"defensive" | "balanced" | "attacking">(career?.approach ?? "balanced");
  const [substitutions, setSubstitutions] = useState(0);
  const [substitutionNote, setSubstitutionNote] = useState("");

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      setMinute((current) => {
        if (current === 44) {
          setPlaying(false);
          setHalftime(true);
          return 45;
        }
        if (current >= 89) {
          setPlaying(false);
          return 90;
        }
        return current + 1;
      });
    }, SPEEDS[speed].interval);
    return () => window.clearInterval(timer);
  }, [playing, speed]);

  if (!career) {
    return <section className="rounded-md border border-border bg-card p-8"><h1 className="text-3xl font-bold uppercase">Nenhuma carreira encontrada</h1><p className="mt-2 text-muted-foreground">Crie sua carreira antes de entrar em campo.</p><Link to="/nova-carreira" className="mt-5 inline-block rounded-md bg-primary px-5 py-3 font-bold text-primary-foreground">Criar carreira</Link></section>;
  }

  const selectedOpponent = availableOpponents.find((club) => club.id === opponentId);
  const visibleEvents = result?.events.filter((event) => event.minute <= minute) ?? [];
  const stadium = STADIUMS[career.club] ?? "Estádio não cadastrado";
  const progress = (minute / 90) * 100;

  function play() {
    if (!selectedOpponent || playing) return;
    const own: MatchTeam = {
      id: career!.club.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").replace(/[^a-z0-9]+/g, "-"),
      name: career!.club,
      attack: 70, midfield: 70, defense: 70, approach: tacticalApproach,
    };
    const rival: MatchTeam = {
      id: selectedOpponent.id,
      name: selectedOpponent.name,
      attack: 70, midfield: 70, defense: 70,
    };
    const next = simulateMatch(own, rival);
    setResult(next);
    setMinute(0);
    setHalftime(false);
    setSubstitutions(0);
    setSubstitutionNote("");
    setPlaying(true);
    const updated = { ...career!, played: career!.played + 1 };
    window.localStorage.setItem("ketvfm-career", JSON.stringify(updated));
    setCareer(updated);
  }

  function resetMatch() {
    setPlaying(false);
    setHalftime(false);
    setMinute(0);
    setResult(null);
  }

  return (
    <>
      <PageHeader kicker={`${career.division} · Temporada ${career.season}`} title="Central da partida">
        Treinador: {career.coach} · Clube: {career.club}
      </PageHeader>
      <div className="rounded-md border border-border bg-card p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Preparação</p>
        <h2 className="mt-2 text-2xl font-bold uppercase">Próximo confronto</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <label className="text-sm font-semibold">Esquema tático<select value={formation} disabled={playing || halftime} onChange={(e) => setFormation(e.target.value as Formation)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3 text-foreground"><option>4-4-2</option><option>4-3-3</option><option>3-5-2</option><option>4-2-3-1</option></select></label>
          <label className="text-sm font-semibold">Postura<select value={tacticalApproach} disabled={playing || halftime} onChange={(e) => setTacticalApproach(e.target.value as typeof tacticalApproach)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3 text-foreground"><option value="defensive">Defensiva</option><option value="balanced">Equilibrada</option><option value="attacking">Ofensiva</option></select></label>
          <label className="text-sm font-semibold">Pressão<select value={pressure} disabled={playing || halftime} onChange={(e) => setPressure(e.target.value as Pressure)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3 text-foreground"><option>Baixa</option><option>Média</option><option>Alta</option></select></label>
        </div>
        <label htmlFor="opponent" className="mb-2 mt-5 block text-sm font-semibold">Adversário da mesma divisão</label>
        {availableOpponents.length > 0 ? (
          <>
            <select id="opponent" disabled={playing} value={opponentId} onChange={(e) => { setOpponentId(e.target.value); resetMatch(); }} className="w-full max-w-md rounded-md border border-input bg-background px-3 py-3 text-foreground disabled:opacity-60">
              {availableOpponents.map((club) => <option key={club.id} value={club.id}>{club.name} · {club.state}</option>)}
            </select>
            <div className="mt-5">
              <p className="mb-2 text-sm font-semibold">Velocidade da partida</p>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Velocidade da partida">
                {(Object.keys(SPEEDS) as MatchSpeed[]).map((key) => <button key={key} type="button" disabled={playing} onClick={() => setSpeed(key)} aria-pressed={speed === key} className={`rounded-md border px-5 py-2.5 text-sm font-bold ${speed === key ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary"} disabled:opacity-50`}>{SPEEDS[key].label}</button>)}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">Lento: cerca de 108 segundos · Médio: 59 segundos · Rápido: 23 segundos por partida.</p>
            </div>
            <p className="mt-4 max-w-xl text-xs text-muted-foreground">Simulação livre entre clubes reais da mesma divisão. A tabela oficial de confrontos ainda não está conectada a esta tela.</p>
            <button onClick={play} disabled={playing} className="mt-5 block rounded-md bg-primary px-6 py-3 font-display text-xl font-bold uppercase text-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50">{playing ? "Partida em andamento..." : "Apitar início da partida"}</button>
          </>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">Não há adversários cadastrados para esta divisão. Confira a divisão da carreira.</p>
        )}
      </div>

      {halftime && result && <section className="mt-6 rounded-md border-2 border-primary bg-card p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Intervalo · 45 minutos</p>
        <h2 className="mt-2 font-display text-3xl font-black uppercase">Ajustes para o segundo tempo</h2>
        <p className="mt-2 text-sm text-muted-foreground">Mude o esquema, a postura e a pressão. Você também pode registrar uma substituição.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <label className="text-sm font-semibold">Esquema<select value={formation} onChange={(e) => setFormation(e.target.value as Formation)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3 text-foreground"><option>4-4-2</option><option>4-3-3</option><option>3-5-2</option><option>4-2-3-1</option></select></label>
          <label className="text-sm font-semibold">Postura<select value={tacticalApproach} onChange={(e) => setTacticalApproach(e.target.value as typeof tacticalApproach)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3 text-foreground"><option value="defensive">Defensiva</option><option value="balanced">Equilibrada</option><option value="attacking">Ofensiva</option></select></label>
          <label className="text-sm font-semibold">Pressão<select value={pressure} onChange={(e) => setPressure(e.target.value as Pressure)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3 text-foreground"><option>Baixa</option><option>Média</option><option>Alta</option></select></label>
        </div>
        <div className="mt-5 rounded-md border border-border p-4">
          <p className="font-bold">Substituições: {substitutions}/5</p>
          <p className="mt-1 text-xs text-muted-foreground">Elencos reais ainda não foram cadastrados. Nesta etapa, as trocas ficam registradas como ajustes táticos, sem atribuir nomes fictícios a jogadores reais.</p>
          <button type="button" disabled={substitutions >= 5} onClick={() => { setSubstitutions((n) => n + 1); setSubstitutionNote("Substituição tática registrada no intervalo."); }} className="mt-3 rounded-md border border-primary px-4 py-2 text-sm font-semibold text-primary disabled:opacity-40">Registrar substituição</button>
          {substitutionNote && <p className="mt-2 text-sm text-primary">{substitutionNote}</p>}
        </div>
        <button onClick={() => { setHalftime(false); setPlaying(true); }} className="mt-5 rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground">Começar segundo tempo</button>
      </section>}

      {result && <section className="mt-6 rounded-md border border-primary bg-hero p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">{minute === 90 ? "Apito final" : "Partida ao vivo"}</p>
          <p className="font-display text-2xl font-black tabular-nums">{minute}' <span className="text-sm font-semibold text-muted-foreground">/ 90'</span></p>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-background"><div className="h-full rounded-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} /></div>
        <div className="mt-7 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
          <div className="flex flex-col items-center gap-2"><Crest club={result.home.name} /><p className="font-display text-sm font-bold uppercase sm:text-lg">{result.home.name}</p></div>
          <p className="text-4xl font-black tabular-nums sm:text-5xl">{minute === 90 || !playing ? result.homeGoals : visibleEvents.filter((event) => event.clubId === result.home.id).length} × {minute === 90 || !playing ? result.awayGoals : visibleEvents.filter((event) => event.clubId === result.away.id).length}</p>
          <div className="flex flex-col items-center gap-2"><Crest club={result.away.name} /><p className="font-display text-sm font-bold uppercase sm:text-lg">{result.away.name}</p></div>
        </div>
        <div className="mt-6 grid gap-2 rounded-md border border-border bg-card p-4 text-sm sm:grid-cols-2">
          <p><span className="text-muted-foreground">Estádio:</span> {stadium}</p>
          <p><span className="text-muted-foreground">Tempo:</span> {minute < 90 ? "Em andamento" : "Encerrado"}</p>
          <p><span className="text-muted-foreground">Competição:</span> Simulação livre · {career.division}</p>
          <p><span className="text-muted-foreground">Horário oficial:</span> Não aplicável a esta simulação</p>
          <p><span className="text-muted-foreground">Esquema:</span> {formation}</p>
          <p><span className="text-muted-foreground">Postura:</span> {tacticalApproach === "defensive" ? "Defensiva" : tacticalApproach === "attacking" ? "Ofensiva" : "Equilibrada"}</p>
          <p><span className="text-muted-foreground">Pressão:</span> {pressure}</p>
        </div>
        <h3 className="mt-7 border-b border-border pb-2 text-lg font-bold uppercase">Lances da partida</h3>
        {visibleEvents.length ? <ol className="mt-3 space-y-2">{visibleEvents.map((event, index) => <li key={`${event.minute}-${index}`} className="flex justify-between rounded bg-card px-3 py-2 text-sm"><span>⚽ {event.clubName}</span><strong>{event.minute}'</strong></li>)}</ol> : <p className="mt-3 text-sm text-muted-foreground">{minute === 90 ? "Nenhum gol nesta partida." : "A partida está rolando. Os lances aparecerão aqui conforme o relógio avançar."}</p>}
        <p className="mt-5 text-sm text-muted-foreground">Partidas disputadas nesta carreira: {career.played}. A simulação ainda não altera a classificação oficial.</p>
        {minute === 90 && <button onClick={resetMatch} className="mt-4 rounded-md border border-border px-4 py-2 text-sm font-semibold hover:border-primary">Preparar nova partida</button>}
      </section>}
    </>
  );
}
