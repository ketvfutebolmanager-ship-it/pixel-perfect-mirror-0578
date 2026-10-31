import { createFileRoute } from "@tanstack/react-router";
import { DataPending, PageHeader } from "@/components/layout/AppShell";

export const Route = createFileRoute("/jogadores")({
  head: () => ({
    meta: [
      { title: "Jogadores — KE TV Football Manager" },
      { name: "description", content: "Elencos atualizados e atributos dos jogadores reais." },
      { property: "og:title", content: "Jogadores — KE TV Football Manager" },
      { property: "og:description", content: "Elencos atualizados e atributos dos jogadores reais." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader kicker="Mercado" title="Jogadores">Elencos atualizados e atributos dos jogadores reais.</PageHeader>
      <DataPending title="Jogadores" module="src/modules/players" />
    </>
  );
}
