import { createFileRoute } from "@tanstack/react-router";
import { DataPending, PageHeader } from "@/components/layout/AppShell";

export const Route = createFileRoute("/configuracoes")({
  head: () => ({
    meta: [
      { title: "Configurações — KE TV Football Manager" },
      { name: "description", content: "Conta, preferências de jogo e idioma." },
      { property: "og:title", content: "Configurações — KE TV Football Manager" },
      { property: "og:description", content: "Conta, preferências de jogo e idioma." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader kicker="Sistema" title="Configurações">Conta, preferências de jogo e idioma.</PageHeader>
      <DataPending title="Configurações" module="src/modules/auth" />
    </>
  );
}
