import { createFileRoute } from "@tanstack/react-router";
import { DataPending, PageHeader } from "@/components/layout/AppShell";

export const Route = createFileRoute("/classificacao")({
  head: () => ({
    meta: [
      { title: "Classificação — KE TV Football Manager" },
      { name: "description", content: "Tabelas das Séries A, B, C e D." },
      { property: "og:title", content: "Classificação — KE TV Football Manager" },
      { property: "og:description", content: "Tabelas das Séries A, B, C e D." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader kicker="Competições" title="Classificação">Tabelas das Séries A, B, C e D.</PageHeader>
      <DataPending title="Classificação" module="src/modules/standings" />
    </>
  );
}
