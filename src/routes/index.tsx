import { createFileRoute, Link } from "@tanstack/react-router";
import { DIVISIONS } from "@/modules/competitions/divisions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KE TV Football Manager — Simulador de técnico de futebol" },
      { name: "description", content: "Comande clubes brasileiros nas Séries A, B, C e D direto do navegador." },
      { property: "og:title", content: "KE TV Football Manager" },
      { property: "og:description", content: "Comande clubes brasileiros nas Séries A, B, C e D direto do navegador." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="space-y-8">
      <section className="rounded-md border border-border bg-hero p-8 md:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Temporada 2026</p>
        <h1 className="mt-3 text-5xl font-bold uppercase leading-none text-foreground md:text-7xl">
          KE TV <span className="text-primary">Football</span> Manager
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Assuma um clube brasileiro, monte o elenco, defina a tática e brigue pelo acesso — da Série D à Série A.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/nova-carreira" className="rounded-sm bg-primary px-5 py-2.5 font-display text-lg font-semibold uppercase text-primary-foreground hover:opacity-90">
            Nova carreira
          </Link>
          <Link to="/continuar-carreira" className="rounded-sm border border-border px-5 py-2.5 font-display text-lg font-semibold uppercase text-foreground hover:border-primary">
            Continuar carreira
          </Link>
        </div>
      </section>
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {DIVISIONS.map((d) => (
          <Link key={d.slug} to="/campeonatos/$divisao" params={{ divisao: d.slug }} className="rounded-md border border-border bg-card p-5 hover:border-primary">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Nível {d.level}</p>
            <p className="font-display text-2xl font-bold uppercase text-foreground">{d.name}</p>
            <p className="mt-1 text-sm text-success">Estrutura pronta</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
