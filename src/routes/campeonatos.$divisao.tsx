import { createFileRoute, notFound } from "@tanstack/react-router";
import { DataPending, PageHeader } from "@/components/layout/AppShell";
import { getDivision } from "@/modules/competitions/divisions";

export const Route = createFileRoute("/campeonatos/$divisao")({
  loader: ({ params }) => {
    const division = getDivision(params.divisao);
    if (!division) throw notFound();
    return { division };
  },
  head: ({ loaderData }) => {
    const name = loaderData?.division.name ?? "Campeonato";
    const desc = `${name} 2026: clubes, calendário, classificação e regulamento.`;
    return {
      meta: [
        { title: `${name} 2026 — KE TV Football Manager` },
        { name: "description", content: desc },
        { property: "og:title", content: `${name} 2026 — KE TV Football Manager` },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: Page,
});

function Page() {
  const { division } = Route.useLoaderData();
  return (
    <>
      <PageHeader kicker={`Brasileirão ${division.season} · Nível ${division.level}`} title={division.name}>
        {division.format}
        {division.formatStatus === "pending" && (
          <span className="mt-2 block text-xs text-primary">
            Formato aguardando confirmação no regulamento oficial da CBF.
          </span>
        )}
      </PageHeader>
      <div className="grid gap-4 lg:grid-cols-2">
        <DataPending title="Clubes participantes" module="src/modules/clubs" />
        <DataPending title="Calendário e resultados" module="src/modules/matches" />
        <DataPending title="Classificação" module="src/modules/standings" />
        <DataPending title="Acesso e rebaixamento" module="src/modules/promotion" />
      </div>
    </>
  );
}
