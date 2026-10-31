import { createFileRoute } from "@tanstack/react-router";
import { DataPending, PageHeader } from "@/components/layout/AppShell";

export const Route = createFileRoute("/nova-carreira")({
  head: () => ({
    meta: [
      { title: "Nova carreira — KE TV Football Manager" },
      { name: "description", content: "Crie seu técnico, escolha um clube e comece a temporada." },
      { property: "og:title", content: "Nova carreira — KE TV Football Manager" },
      { property: "og:description", content: "Crie seu técnico, escolha um clube e comece a temporada." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader kicker="Carreira" title="Nova carreira">Crie seu técnico, escolha um clube e comece a temporada.</PageHeader>
      <DataPending title="Nova carreira" module="src/modules/careers" />
    </>
  );
}
