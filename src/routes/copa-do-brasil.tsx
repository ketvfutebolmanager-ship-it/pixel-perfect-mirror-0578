import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { simulateMatch } from "@/modules/matches/simulate";

type FinalState = { played: boolean; homeGoals?: number; awayGoals?: number; champion?: string; penalties?: string };
const KEY = "ketv-copa-do-brasil-2026-final";
const teams = {
  gremio: { id: "gremio", name: "Grêmio", attack: 82, midfield: 81, defense: 80 },
  palmeiras: { id: "palmeiras", name: "Palmeiras", attack: 88, midfield: 87, defense: 87 },
};
function Page() {
  const [result, setResult] = useState<FinalState>(() => {
    if (typeof window === "undefined") return { played: false };
    try { return JSON.parse(window.localStorage.getItem(KEY) || "null") || { played: false }; }
    catch { return { played: false }; }
  });
  useEffect(() => { window.localStorage.setItem(KEY, JSON.stringify(result)); }, [result]);
  function playFinal() {
    if (result.played) return;
    const match = simulateMatch(teams.gremio, teams.palmeiras);
    const winner = match.homeGoals === match.awayGoals
      ? (Math.random() < 0.5 ? "Grêmio" : "Palmeiras")
      : match.homeGoals > match.awayGoals ? "Grêmio" : "Palmeiras";
    setResult({
      played: true,
      homeGoals: match.homeGoals,
      awayGoals: match.awayGoals,
      champion: winner,
      penalties: match.homeGoals === match.awayGoals ? "Decisão por pênaltis simulada" : undefined,
    });
  }
  function reset() { if (window.confirm("Reiniciar a simulação da final?")) setResult({ played: false }); }
  return <>
    <PageHeader kicker="Temporada 2026 · Final · 6 de dezembro" title="Copa do Brasil">
      Edição 2026 — estado atual da competição. A final será disputada em jogo único, na Arena BRB Mané Garrincha, em Brasília.
    </PageHeader>
    <section className="rounded-xl border border-primary/30 bg-card p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div><p className="text-xs font-bold uppercase tracking-widest text-primary">Finalistas oficiais</p><h2 className="mt-1 font-display text-2xl font-black uppercase">Decisão do título</h2></div>
        <span className="rounded-full border border-primary/40 px-3 py-1 text-xs font-bold">06/12/2026</span>
      </div>
      <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-center">
        <div className="rounded-lg border border-border bg-background p-4"><div className="text-4xl">🇪🇪</div><h3 className="mt-2 text-lg font-black">GRÊMIO</h3><p className="text-xs text-muted-foreground">Rio Grande do Sul</p></div>
        <div className="font-display text-2xl font-black text-primary">VS</div>
        <div className="rounded-lg border border-border bg-background p-4"><div className="text-4xl">🇳🇬</div><h3 className="mt-2 text-lg font-black">PALMEIRAS</h3><p className="text-xs text-muted-foreground">São Paulo</p></div>
      </div>
      <div className="mt-5 rounded-lg bg-background p-4 text-center">
        <p className="text-sm text-muted-foreground">Arena BRB Mané Garrincha · Brasília (DF) · Jogo único</p>
        {result.played ? <>
          <p className="mt-4 text-xs font-bold uppercase tracking-widest text-primary">Resultado da simulação</p>
          <p className="mt-1 font-display text-4xl font-black tabular-nums">{result.homeGoals} × {result.awayGoals}</p>
          {result.penalties && <p className="mt-2 text-sm text-muted-foreground">{result.penalties}</p>}
          <p className="mt-3 text-lg font-black uppercase">Campeão: {result.champion}</p>
        </> : <p className="mt-4 text-sm font-semibold">Aguardando a partida decisiva no calendário do jogo.</p>}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <button onClick={playFinal} disabled={result.played} className="rounded-md bg-primary px-5 py-3 text-sm font-black text-primary-foreground disabled:opacity-40">{result.played ? "Final simulada" : "Jogar final da Copa do Brasil"}</button>
        {result.played && <button onClick={reset} className="rounded-md border border-border px-4 py-3 text-sm font-semibold">Refazer simulação</button>}
      </div>
    </section>
    <section className="mt-6 rounded-xl border border-border bg-card p-5">
      <h3 className="font-display text-xl font-black uppercase">Caminho até a final</h3>
      <p className="mt-2 text-sm text-muted-foreground">A decisão reúne os vencedores das semifinais: Grêmio eliminou o Atlético-MG por 3 a 1 no placar agregado; Palmeiras eliminou o Vasco nos pênaltis, após empate agregado em 2 a 2.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-border p-3"><p className="text-xs font-bold uppercase text-muted-foreground">Semifinal · Grêmio x Atlético-MG</p><p className="mt-1 font-bold">Ida: Grêmio 2 × 0 Atlético-MG</p><p className="font-bold">Volta: Atlético-MG 1 × 1 Grêmio</p><p className="mt-1 text-sm text-primary">Grêmio classificado · agregado 3 × 1</p></div>
        <div className="rounded-lg border border-border p-3"><p className="text-xs font-bold uppercase text-muted-foreground">Semifinal · Palmeiras x Vasco</p><p className="mt-1 font-bold">Ida: Palmeiras 1 × 0 Vasco</p><p className="font-bold">Volta: Vasco 2 × 1 Palmeiras</p><p className="mt-1 text-sm text-primary">Palmeiras classificado nos pênaltis · agregado 2 × 2</p></div>
      </div>
      <p className="mt-4 text-xs text-muted-foreground">A simulação do KE TV Futebol Manager não altera os resultados oficiais registrados acima. Ela permite jogar uma versão própria da final e salvar o resultado localmente.</p>
    </section>
    <section className="mt-6 rounded-xl border border-border bg-card p-5">
      <h3 className="font-display text-lg font-black uppercase">Formato oficial de 2026</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
        <li>126 clubes participantes e nove fases.</li>
        <li>1ª à 4ª fase: jogo único; empate decidido nos pênaltis.</li>
        <li>5ª à semifinal: ida e volta; empate em pontos no confronto decidido por saldo de gols e, persistindo, pênaltis.</li>
        <li>Final: jogo único em 6 de dezembro de 2026.</li>
      </ul>
      <a className="mt-4 inline-flex text-sm font-semibold text-primary underline" href="https://www.cbf.com.br/futebol-brasileiro/tabelas/copa-do-brasil/masculino/2026/2002?doc=Tabela+Detalhada" target="_blank" rel="noreferrer">Consultar tabela oficial da CBF</a>
    </section>
  </>;
}
export const Route = createFileRoute("/copa-do-brasil")({ component: Page });
