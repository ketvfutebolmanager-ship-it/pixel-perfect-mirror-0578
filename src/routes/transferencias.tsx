import { createFileRoute } from "@tanstack/react-router";
import { DataPending, PageHeader } from "@/components/layout/AppShell";

export const Route = createFileRoute("/transferencias")({
  head: () => ({
    meta: [
      { title: "Transferências — KE TV Football Manager" },
      { name: "description", content: "Compra, venda, empréstimos e contratos." },
      { property: "og:title", content: "Transferências — KE TV Football Manager" },
      { property: "og:description", content: "Compra, venda, empréstimos e contratos." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader kicker="Mercado" title="Transferências">Compra, venda, empréstimos e contratos.</PageHeader>
      <DataPending title="Transferências" module="src/modules/transfers" />
    </>
  );
}
