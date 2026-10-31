import { createFileRoute } from "@tanstack/react-router";
import { DataPending, PageHeader } from "@/components/layout/AppShell";

export const Route = createFileRoute("/clubes")({
  head: () => ({
    meta: [
      { title: "Clubes — KE TV Football Manager" },
      { name: "description", content: "Clubes brasileiros reais, escudos oficiais e estádios." },
      { property: "og:title", content: "Clubes — KE TV Football Manager" },
      { property: "og:description", content: "Clubes brasileiros reais, escudos oficiais e estádios." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader kicker="Mercado" title="Clubes">Clubes brasileiros reais, escudos oficiais e estádios.</PageHeader>
      <DataPending title="Clubes" module="src/modules/clubs" />
    </>
  );
}
