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
type Fixture = { round: number; home: { id: string; name: string; state: string }; away: { id: string; name: string; state: string }; weekday: string; kickoff: string };
const KICKOFF_SLOTS = [
  { weekday: "Quarta-feira", kickoff: "19:00" },
  { weekday: "Quarta-feira", kickoff: "21:30" },
  { weekday: "Quinta-feira", kickoff: "19:00" },
  { weekday: "Quinta-feira", kickoff: "21:30" },
  { weekday: "Sábado", kickoff: "16:00" },
  { weekday: "Sábado", kickoff: "18:30" },
  { weekday: "Sábado", kickoff: "21:00" },
  { weekday: "Domingo", kickoff: "11:00" },
  { weekday: "Domingo", kickoff: "16:00" },
  { weekday: "Domingo", kickoff: "18:30" },
  { weekday: "Domingo", kickoff: "20:30" },
  { weekday: "Segunda-feira", kickoff: "20:00" },
];
function buildFixtures(clubs: Array<{id:string;name:string;state:string}>, maxRounds: number): Fixture[] {
  if (clubs.length < 2) return [];
  const teams = [...clubs];
  if (teams.length % 2) teams.push({ id: "bye", name: "Folga", state: "" });
  const fixed = teams[0];
  let rotating = teams.slice(1);
  const fixtures: Fixture[] = [];
  const half = teams.length - 1;
  for (let round = 0; round < half; round += 1) {
    const lineup = [fixed, ...rotating].filter((t): t is NonNullable<typeof t> => !!t);
    for (let i = 0; i < lineup.length / 2; i += 1) {
      const left = lineup[i], right = lineup[lineup.length - 1 - i];
      if (left && right && left.id !== "bye" && right.id !== "bye") {
        const home = round % 2 === 0 ? left : right;
        const away = round % 2 === 0 ? right : left;
        const firstSlot = KICKOFF_SLOTS[(round * 3) % KICKOFF_SLOTS.length]!;
        const returnSlot = KICKOFF_SLOTS[((round + half) * 3) % KICKOFF_SLOTS.length]!;
        fixtures.push({ round: round + 1, home, away, ...firstSlot }, { round: round + half + 1, home: away, away: home, ...returnSlot });
      }
    }
    rotating = [...rotating.slice(-1), ...rotating.slice(0, -1)];
  }
  return fixtures.filter((f) => f.round <= maxRounds);
}
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

function MoraleMeter({ title, value, description }: { title: string; value: number; description: string }) {
  const status = value >= 80 ? "Muito boa" : value >= 65 ? "Boa" : value >= 45 ? "Em observação" : value >= 25 ? "Sob pressão" : "Crítica";
  const color = value >= 65 ? "bg-emerald-500" : value >= 45 ? "bg-amber-500" : "bg-red-500";
  return (
    <div>
      <div className="flex items-center justify-between gap-3"><h2 className="text-sm font-bold uppercase">{title}</h2><strong className="font-display text-2xl tabular-nums">{value}/100</strong></div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted"><div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} /></div>
      <p className="mt-1 text-xs font-semibold text-muted-foreground">{status}</p><p className="mt-1 text-xs text-muted-foreground">{description}</p>
    </div>
  );
}

type SavedMatchSession = { result: MatchResult | null; roundResults: Record<string, MatchResult>; minute: number; playing: boolean; halftime: boolean; formation: Formation; pressure: Pressure; tacticalApproach: "defensive" | "balanced" | "attacking"; substitutions: number; substitutionNote: string };
const MATCH_SESSION_KEY = "ketvfm-match-session";
function readMatchSession(): Partial<SavedMatchSession> {
  try { return JSON.parse(window.localStorage.getItem(MATCH_SESSION_KEY) ?? "{}") as Partial<SavedMatchSession>; } catch { return {}; }
}

function Page() {
  const [career, setCareer] = useState<CareerSave | null>(() => {
    try {
      const raw = window.localStorage.getItem("ketvfm-career");
      return raw ? JSON.parse(raw) as CareerSave : null;
    } catch { return null; }
  });
  const [result, setResult] = useState<MatchResult | null>(() => readMatchSession().result ?? null);
  const [roundResults, setRoundResults] = useState<Record<string, MatchResult>>(() => readMatchSession().roundResults ?? {});
  const divisionClubs = career ? getClubsByDivision(career.division as BrazilianDivision) : [];
  const group = career?.division === "Série D" ? divisionClubs.find((club) => club.name === career.club)?.group : undefined;
  const participatingClubs = group ? divisionClubs.filter((club) => club.group === group) : divisionClubs;
  const totalRounds = (participatingClubs.length - 1) * 2;
  const fixtures = buildFixtures(participatingClubs, totalRounds);
  const matchesPlayedBeforeCurrent = Math.max(0, (career?.played ?? 0) - (result ? 1 : 0));
  const currentRound = Math.min(matchesPlayedBeforeCurrent + 1, totalRounds);
  const roundFixtures = fixtures.filter((fixture) => fixture.round === currentRound);
  const careerFixture = roundFixtures.find((fixture) => fixture.home.name === career?.club || fixture.away.name === career?.club);
  const fixtureOpponent = careerFixture ? (careerFixture.home.name === career?.club ? careerFixture.away : careerFixture.home) : null;
  const [speed, setSpeed] = useState<MatchSpeed>("medium");
  const [minute, setMinute] = useState(() => readMatchSession().minute ?? 0);
  const [playing, setPlaying] = useState(() => readMatchSession().playing ?? false);
  const [halftime, setHalftime] = useState(() => readMatchSession().halftime ?? false);
  const [formation, setFormation] = useState<Formation>(() => readMatchSession().formation ?? "4-3-3");
  const [pressure, setPressure] = useState<Pressure>(() => readMatchSession().pressure ?? "Média");
  const [tacticalApproach, setTacticalApproach] = useState<"defensive" | "balanced" | "attacking">(() => readMatchSession().tacticalApproach ?? career?.approach ?? "balanced");
  const [substitutions, setSubstitutions] = useState(() => readMatchSession().substitutions ?? 0);
  const [substitutionNote, setSubstitutionNote] = useState(() => readMatchSession().substitutionNote ?? "");

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

  useEffect(() => {
    if (!result) {
      window.localStorage.removeItem(MATCH_SESSION_KEY);
      return;
    }
    const session: SavedMatchSession = { result, roundResults, minute, playing, halftime, formation, pressure, tacticalApproach, substitutions, substitutionNote };
    window.localStorage.setItem(MATCH_SESSION_KEY, JSON.stringify(session));
  }, [result, roundResults, minute, playing, halftime, formation, pressure, tacticalApproach, substitutions, substitutionNote]);

  if (!career) {
    return <section className="rounded-md border border-border bg-card p-8"><h1 className="text-3xl font-bold uppercase">Nenhuma carreira encontrada</h1><p className="mt-2 text-muted-foreground">Crie sua carreira antes de entrar em campo.</p><Link to="/nova-carreira" className="mt-5 inline-block rounded-md bg-primary px-5 py-3 font-bold text-primary-foreground">Criar carreira</Link></section>;
  }

  const visibleEvents = result?.events.filter((event) => event.minute <= minute) ?? [];
  const stadium = STADIUMS[career.club] ?? "Estádio não cadastrado";
  const progress = (minute / 90) * 100;

  function play() {
    if (!fixtureOpponent || !careerFixture || playing) return;
    const own: MatchTeam = {
      id: career!.club.toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g, "").replace(/[^a-z0-9]+/g, "-"),
      name: career!.club,
      attack: 70, midfield: 70, defense: 70, approach: tacticalApproach,
    };
    const rival: MatchTeam = {
      id: fixtureOpponent.id,
      name: fixtureOpponent.name,
      attack: 70, midfield: 70, defense: 70,
    };
    const next = simulateMatch(own, rival);
    const otherResults: Record<string, MatchResult> = {};
    roundFixtures.filter(fixture => fixture.home.name !== career!.club && fixture.away.name !== career!.club).forEach(fixture => {
      const homeTeam: MatchTeam = { id: fixture.home.id, name: fixture.home.name, attack: 70, midfield: 70, defense: 70 };
      const awayTeam: MatchTeam = { id: fixture.away.id, name: fixture.away.name, attack: 70, midfield: 70, defense: 70 };
      otherResults[fixture.round + "-" + fixture.home.id + "-" + fixture.away.id] = simulateMatch(homeTeam, awayTeam);
    });
    setRoundResults(otherResults);
    setResult(next);
    setMinute(0);
    setHalftime(false);
    setSubstitutions(0);
    setSubstitutionNote("");
    setPlaying(true);
    const previousFanMorale = career!.fanMorale ?? 70;
    const previousBoardConfidence = career!.boardConfidence ?? 70;
    const won = next.homeGoals > next.awayGoals;
    const drew = next.homeGoals === next.awayGoals;
    const updated = {
      ...career!,
      played: career!.played + 1,
      fanMorale: Math.max(0, Math.min(100, previousFanMorale + (won ? 7 : drew ? 1 : -7))),
      boardConfidence: Math.max(0, Math.min(100, previousBoardConfidence + (won ? 9 : drew ? -1 : -9))),
    };
    window.localStorage.setItem("ketvfm-career", JSON.stringify(updated));
    setCareer(updated);
  }

  function resetMatch() {
    setPlaying(false);
    setHalftime(false);
    setMinute(0);
    setResult(null);
    setRoundResults({});
    window.localStorage.removeItem(MATCH_SESSION_KEY);
  }

  return (
    <>
      <PageHeader kicker={`${career.division} · Temporada ${career.season}`} title="Central da partida">
        Treinador: {career.coach} · Clube: {career.club}
      </PageHeader>
      <section className="mb-6 grid gap-4 rounded-md border border-border bg-card p-5 sm:grid-cols-2">
        <MoraleMeter title="Moral com a torcida" value={career.fanMorale ?? 70} description="Reage aos resultados da equipe." />
        <MoraleMeter title="Confiança da diretoria" value={career.boardConfidence ?? 70} description="Reage aos resultados e às metas do clube." />
        <p className="sm:col-span-2 text-xs text-muted-foreground">Indicadores iniciais em 70/100. Nesta etapa, variam conforme o resultado da partida; metas, finanças e protestos serão conectados depois.</p>
      </section>
      <div className="rounded-md border border-border bg-card p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Calendário da carreira</p>
        <h2 className="mt-2 text-2xl font-bold uppercase">Todos os jogos da rodada {currentRound}</h2>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{career.division} · {roundFixtures.length} confrontos nesta rodada</p>
        <p className="mt-1 text-sm text-muted-foreground">Dias e horários simulados para a sua temporada, no horário de Brasília. Não são datas ou horários oficiais da CBF.</p>
        <div className="mt-5 space-y-3">
          {roundFixtures.map((fixture, fixtureIndex) => {
            const isCareerMatch = fixture.home.name === career.club || fixture.away.name === career.club;
            return <div key={fixture.round + "-" + fixture.home.id} className={`rounded-md border p-3 ${isCareerMatch ? "border-primary bg-primary/5 ring-1 ring-primary/20" : "border-border bg-background"}`}>
              <div className="mb-2 flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Jogo {fixtureIndex + 1}</span><span className="text-[10px] font-semibold text-muted-foreground">{fixture.weekday} · {fixture.kickoff} (Brasília)</span>{isCareerMatch && <span className="text-[10px] font-black uppercase tracking-widest text-primary">Seu confronto</span>}</div>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                <div className="flex min-w-0 items-center gap-2"><Crest club={fixture.home.name}/><span className="truncate text-sm font-semibold">{fixture.home.name}</span></div>
                <span className="rounded bg-muted px-2 py-1 text-xs font-black text-muted-foreground">VS</span>
                <div className="flex min-w-0 items-center justify-end gap-2"><span className="truncate text-right text-sm font-semibold">{fixture.away.name}</span><Crest club={fixture.away.name}/></div>
              </div>
              {!isCareerMatch && roundResults[fixture.round + "-" + fixture.home.id + "-" + fixture.away.id] && <div className="mt-3 flex items-center justify-between border-t border-border pt-2 text-sm"><span className="font-bold tabular-nums">{roundResults[fixture.round + "-" + fixture.home.id + "-" + fixture.away.id].homeGoals} × {roundResults[fixture.round + "-" + fixture.home.id + "-" + fixture.away.id].awayGoals}</span><span className="rounded bg-emerald-500/10 px-2 py-1 text-[10px] font-bold uppercase text-emerald-600">Resultado simulado</span></div>}
              {isCareerMatch && <div className="col-span-3 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-2"><span className="text-xs font-bold uppercase text-primary">Seu jogo · {STADIUMS[fixture.home.name] ?? "Estádio a cadastrar"}</span><button type="button" onClick={play} disabled={playing || !!result} className="rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground disabled:opacity-50">{playing ? "Partida em andamento..." : result ? "Partida realizada" : "Jogar partida"}</button></div>}
            </div>;
          })}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <label className="text-sm font-semibold">Esquema tático<select value={formation} disabled={playing || halftime} onChange={(e) => setFormation(e.target.value as Formation)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3 text-foreground"><option>4-4-2</option><option>4-3-3</option><option>3-5-2</option><option>4-2-3-1</option></select></label>
          <label className="text-sm font-semibold">Postura<select value={tacticalApproach} disabled={playing || halftime} onChange={(e) => setTacticalApproach(e.target.value as typeof tacticalApproach)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3 text-foreground"><option value="defensive">Defensiva</option><option value="balanced">Equilibrada</option><option value="attacking">Ofensiva</option></select></label>
          <label className="text-sm font-semibold">Pressão<select value={pressure} disabled={playing || halftime} onChange={(e) => setPressure(e.target.value as Pressure)} className="mt-2 w-full rounded-md border border-input bg-background px-3 py-3 text-foreground"><option>Baixa</option><option>Média</option><option>Alta</option></select></label>
        </div>
        <div className="mt-5"><p className="mb-2 text-sm font-semibold">Velocidade da partida</p><div className="flex flex-wrap gap-2" role="group" aria-label="Velocidade da partida">{(Object.keys(SPEEDS) as MatchSpeed[]).map((key) => <button key={key} type="button" disabled={playing} onClick={() => setSpeed(key)} aria-pressed={speed === key} className={`rounded-md border px-5 py-2.5 text-sm font-bold ${speed === key ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary"} disabled:opacity-50`}>{SPEEDS[key].label}</button>)}</div></div>
        {!careerFixture && <p className="mt-4 text-sm text-muted-foreground">Seu clube não tem jogo nesta rodada.</p>}
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
        {visibleEvents.length ? <ol className="mt-3 space-y-2">{visibleEvents.map((event, index) => <li key={`${event.minute}-${index}`} className="flex flex-wrap justify-between gap-2 rounded bg-card px-3 py-2 text-sm"><span>⚽ {event.clubName} · <strong>Autor do gol não cadastrado</strong></span><strong>{event.minute}'</strong></li>)}</ol> : <p className="mt-3 text-sm text-muted-foreground">{minute === 90 ? "Nenhum gol nesta partida." : "A partida está rolando. Os lances aparecerão aqui conforme o relógio avançar."}</p>}
        <p className="mt-3 text-xs text-amber-600">Os autores dos gols dependem do cadastro de elencos reais. O jogo não atribui gols a nomes inventados.</p>
        <p className="mt-5 text-sm text-muted-foreground">Partidas disputadas nesta carreira: {career.played}. A simulação ainda não altera a classificação oficial.</p>
        {minute === 90 && <button onClick={resetMatch} className="mt-4 rounded-md border border-border px-4 py-2 text-sm font-semibold hover:border-primary">Preparar nova partida</button>}
      </section>}
    </>
  );
}
