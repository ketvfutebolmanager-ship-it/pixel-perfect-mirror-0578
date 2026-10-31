import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/AppShell";
import { DIVISIONS } from "@/modules/competitions/divisions";

export const Route = createFileRoute("/campeonatos/")({
  head: () => ({
    meta: [
      { title: "Campeonatos — KE TV Football Manager" },
      { name: "description", content: "As quatro divisões do Campeonato Brasileiro 2026." },
      { property: "og:title", content: "Campeonatos — KE TV Football Manager" },
      { property: "og:description", content: "As quatro divisões do Campeonato Brasileiro 2026." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader kicker="Temporada 2026" title="Campeonatos">
        Campeonato Brasileiro em quatro divisões, com acesso e rebaixamento entre elas.
      </PageHeader>
      <div className="grid gap-4 sm:grid-cols-2">
        {DIVISIONS.map((d) => (
          <Link
            key={d.slug}
            to="/campeonatos/$divisao"
            params={{ divisao: d.slug }}
            className="group rounded-md border border-border bg-card p-6 transition-colors hover:border-primary"
          >
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Nível {d.level}</p>
            <p className="font-display text-3xl font-bold uppercase text-foreground group-hover:text-primary">{d.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">{d.format}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
