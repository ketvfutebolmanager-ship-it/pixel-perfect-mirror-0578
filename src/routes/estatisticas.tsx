import { createFileRoute } from "@tanstack/react-router";
import { DataPending, PageHeader } from "@/components/layout/AppShell";

export const Route = createFileRoute("/estatisticas")({
  head: () => ({
    meta: [
      { title: "Estatísticas — KE TV Football Manager" },
      { name: "description", content: "Artilharia, assistências e números da temporada." },
      { property: "og:title", content: "Estatísticas — KE TV Football Manager" },
      { property: "og:description", content: "Artilharia, assistências e números da temporada." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader kicker="Competições" title="Estatísticas">Artilharia, assistências e números da temporada.</PageHeader>
      <DataPending title="Estatísticas" module="src/modules/matches" />
    </>
  );
}
