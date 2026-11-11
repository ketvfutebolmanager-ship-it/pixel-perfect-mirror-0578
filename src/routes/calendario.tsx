import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/AppShell";

export const Route = createFileRoute("/calendario")({
  head: () => ({ meta: [{ title: "Calendário CBF 2026 — KE TV Football Manager" }] }),
  component: Page,
});
const competitions = [
  { name: "Série A", url: "https://www.cbf.com.br/futebol-brasileiro/tabelas/campeonato-brasileiro/serie-a/2026" },
  { name: "Série B", url: "https://www.cbf.com.br/futebol-brasileiro/tabelas/campeonato-brasileiro/serie-b/2026" },
  { name: "Série C", url: "https://www.cbf.com.br/futebol-brasileiro/tabelas/campeonato-brasileiro/serie-c/2026" },
  { name: "Série D", url: "https://www.cbf.com.br/futebol-brasileiro/tabelas/campeonato-brasileiro/serie-d/2026" },
];
const cupDates = [
  ["1ª fase","17 a 19 de fevereiro","28 clubes · jogo único"],
  ["2ª fase","24 de fevereiro a 5 de março","88 clubes · jogo único"],
  ["3ª fase","10 a 12 de março","48 clubes · jogo único"],
  ["4ª fase","17 a 19 de março","24 clubes · jogo único"],
  ["5ª fase","abril e maio","32 clubes · ida e volta"],
  ["Oitavas de final","1 a 6 de agosto","16 clubes · ida e volta"],
  ["Quartas de final","26 de agosto a 3 de setembro","8 clubes · ida e volta"],
  ["Semifinal","1 e 8 de novembro","4 clubes · ida e volta"],
  ["Final","6 de dezembro","2 clubes · jogo único"],
];
function Page() {
 return <>
  <PageHeader kicker="Temporada 2026" title="Calendário do futebol brasileiro">Acompanhe as competições nacionais em paralelo. A Copa do Brasil tem suas próprias datas e não substitui as rodadas do Brasileirão.</PageHeader>
  <section className="mb-6 rounded-xl border border-primary/30 bg-card p-5">
   <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-widest text-primary">Competição eliminatória</p><h2 className="mt-1 font-display text-2xl font-black uppercase">Copa do Brasil 2026</h2><p className="mt-1 text-sm text-muted-foreground">126 clubes · 9 fases · 155 partidas no formato completo</p></div><Link to="/copa-do-brasil" className="rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground">Abrir competição jogável</Link></div>
   <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{cupDates.map(([phase,date,format])=><div key={phase} className="rounded-md border border-border p-3"><p className="font-bold">{phase}</p><p className="mt-1 text-sm text-primary">{date}</p><p className="mt-1 text-xs text-muted-foreground">{format}</p></div>)}</div>
  </section>
  <h2 className="mb-3 font-display text-xl font-bold uppercase">Campeonatos Brasileiros</h2>
  <div className="grid gap-4 sm:grid-cols-2">{competitions.map(item=><section key={item.name} className="rounded-md border border-border bg-card p-5"><h3 className="font-display text-2xl font-bold uppercase">{item.name}</h3><a href={item.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground">Abrir tabela oficial da CBF</a></section>)}</div>
  <p className="mt-5 text-xs text-muted-foreground">As datas-base podem sofrer alterações oficiais. A agenda da Copa do Brasil fica separada das tabelas das Séries A, B, C e D.</p>
 </>;
}
