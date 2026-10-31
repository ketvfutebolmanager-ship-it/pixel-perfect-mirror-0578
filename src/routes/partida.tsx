import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { simulateMatch, type MatchResult, type MatchTeam } from "@/modules/matches/simulate";
import type { CareerSave } from "./nova-carreira";

export const Route = createFileRoute("/partida")({
  head: () => ({ meta: [{ title: "Central da partida — KE TV Football Manager" }] }),
  component: Page,
});

const demoOpponents = [
  { name: "União Esportiva", attack: 68, midfield: 72, defense: 71 },
  { name: "Atlético do Vale", attack: 75, midfield: 66, defense: 65 },
  { name: "Esporte Clube Central", attack: 65, midfield: 68, defense: 74 },
];

function Page() {
  const navigate = useNavigate();
  const [career, setCareer] = useState<CareerSave | null>(() => {
    try {
      const raw = window.localStorage.getItem("ketvfm-career");
      return raw ? JSON.parse(raw) as CareerSave : null;
    } catch { return null; }
  });
  const [opponent, setOpponent] = useState(demoOpponents[0].name);
  const [result, setResult] = useState<MatchResult | null>(null);

  if (!career) {
    return <section className="rounded-md border border-border bg-card p-8"><h1 className="text-3xl font-bold uppercase">Nenhuma carreira encontrada</h1><p className="mt-2 text-muted-foreground">Crie sua carreira antes de entrar em campo.</p><Link to="/nova-carreira" className="mt-5 inline-block rounded-md bg-primary px-5 py-3 font-bold text-primary-foreground">Criar carreira</Link></section>;
  }

  function play() {
    const opponentData = demoOpponents.find((item) => item.name === opponent) ?? demoOpponents[0];
    const own: MatchTeam = {
      id: "career-club", name: career!.club,
      attack: 70, midfield: 70, defense: 70, approach: career!.approach,
    };
    const rival: MatchTeam = { id: "opponent", ...opponentData };
    const next = simulateMatch(own, rival);
    setResult(next);
    const updated = { ...career!, played: career!.played + 1 };
    window.localStorage.setItem("ketvfm-career", JSON.stringify(updated));
    setCareer(updated);
  }

  return (
    <>
      <PageHeader kicker={`${career.division} · Temporada ${career.season}`} title="Central da partida">
        Treinador: {career.coach} · Clube: {career.club}
      </PageHeader>
      <div className="rounded-md border border-border bg-card p-6">
        <p className="text-xs font-bold uppercase tracking-widest text-primary">Preparação</p>
        <h2 className="mt-2 text-2xl font-bold uppercase">Próximo confronto</h2>
        <label htmlFor="opponent" className="mb-2 mt-5 block text-sm font-semibold">Adversário de demonstração</label>
        <select id="opponent" value={opponent} onChange={(e) => { setOpponent(e.target.value); setResult(null); }} className="w-full max-w-md rounded-md border border-input bg-background px-3 py-3 text-foreground">
          {demoOpponents.filter((item) => item.name !== career.club).map((item) => <option key={item.name}>{item.name}</option>)}
        </select>
        <button onClick={play} className="mt-5 block rounded-md bg-primary px-6 py-3 font-display text-xl font-bold uppercase text-primary-foreground hover:opacity-90">Apitar início da partida</button>
      </div>
      {result && <section className="mt-6 rounded-md border border-primary bg-hero p-6">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-primary">Apito final</p>
        <div className="mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
          <p className="font-display text-lg font-bold uppercase">{result.home.name}</p>
          <p className="text-4xl font-black tabular-nums">{result.homeGoals} × {result.awayGoals}</p>
          <p className="font-display text-lg font-bold uppercase">{result.away.name}</p>
        </div>
        <h3 className="mt-7 border-b border-border pb-2 text-lg font-bold uppercase">Lances da partida</h3>
        {result.events.length ? <ol className="mt-3 space-y-2">{result.events.map((event, index) => <li key={`${event.minute}-${index}`} className="flex justify-between rounded bg-card px-3 py-2 text-sm"><span>⚽ {event.clubName}</span><strong>{event.minute}'</strong></li>)}</ol> : <p className="mt-3 text-sm text-muted-foreground">Partida sem gols. As defesas levaram a melhor.</p>}
        <p className="mt-5 text-sm text-muted-foreground">Partidas disputadas nesta carreira: {career.played}. Resultado de simulação do protótipo; ainda não altera classificação oficial.</p>
        <button onClick={() => navigate({ to: "/partida" })} className="mt-4 rounded-md border border-border px-4 py-2 text-sm font-semibold hover:border-primary">Nova partida</button>
      </section>}
    </>
  );
}
