import { createFileRoute } from "@tanstack/react-router";
import { DataPending, PageHeader } from "@/components/layout/AppShell";

export const Route = createFileRoute("/continuar-carreira")({
  head: () => ({
    meta: [
      { title: "Continuar carreira — KE TV Football Manager" },
      { name: "description", content: "Suas carreiras salvas na nuvem aparecerão aqui após o login." },
      { property: "og:title", content: "Continuar carreira — KE TV Football Manager" },
      { property: "og:description", content: "Suas carreiras salvas na nuvem aparecerão aqui após o login." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader kicker="Carreira" title="Continuar carreira">Suas carreiras salvas na nuvem aparecerão aqui após o login.</PageHeader>
      <DataPending title="Continuar carreira" module="src/modules/careers" />
    </>
  );
}
