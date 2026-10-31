import { createFileRoute } from "@tanstack/react-router";
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

function Page() {
  return <><PageHeader kicker="Temporada 2026" title="Calendário CBF">Tabelas oficiais com datas, dias da semana e horários de Brasília. A CBF pode atualizar a programação; consulte a versão mais recente.</PageHeader><div className="grid gap-4 sm:grid-cols-2">{competitions.map((item) => <section key={item.name} className="rounded-md border border-border bg-card p-5"><h2 className="font-display text-2xl font-bold uppercase">{item.name}</h2><a href={item.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex rounded-md bg-primary px-4 py-3 text-sm font-bold text-primary-foreground">Abrir tabela oficial da CBF</a></section>)}</div><p className="mt-5 text-xs text-muted-foreground">Os horários não confirmados pela CBF não serão estimados.</p></>;
}
