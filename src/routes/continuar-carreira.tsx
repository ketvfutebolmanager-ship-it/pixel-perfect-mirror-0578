import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import type { CareerSave } from "./nova-carreira";

export const Route = createFileRoute("/continuar-carreira")({
  head: () => ({
    meta: [
      { title: "Continuar carreira — KE TV Football Manager" },
      { name: "description", content: "Retome sua carreira salva neste navegador." },
    ],
  }),
  component: Page,
});

function Page() {
  const [career, setCareer] = useState<CareerSave | null>(() => {
    try {
      const raw = window.localStorage.getItem("ketvfm-career");
      return raw ? JSON.parse(raw) as CareerSave : null;
    } catch { return null; }
  });

  function deleteCareer() {
    if (!window.confirm("Tem certeza que deseja excluir esta carreira deste navegador?")) return;
    window.localStorage.removeItem("ketvfm-career");
    setCareer(null);
  }

  return (
    <>
      <PageHeader kicker="Carreira" title="Continuar carreira">Retome de onde parou e siga em busca dos seus objetivos.</PageHeader>
      {career ? (
        <section className="max-w-2xl rounded-md border border-border bg-card p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Temporada {career.season}</p>
          <h2 className="mt-2 text-3xl font-bold uppercase">{career.club}</h2>
          <p className="mt-2 text-sm text-muted-foreground">Treinador: {career.coach} · {career.division}</p>
          <p className="mt-4 text-sm">Partidas disputadas: <strong>{career.played}</strong></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/partida" className="rounded-md bg-primary px-5 py-3 font-bold text-primary-foreground">Continuar jogando</Link>
            <button onClick={deleteCareer} className="rounded-md border border-destructive px-5 py-3 text-sm font-semibold text-destructive">Excluir carreira</button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">Salva somente neste navegador nesta versão de protótipo. Ainda não sincroniza entre dispositivos.</p>
        </section>
      ) : (
        <section className="rounded-md border border-dashed border-border bg-card p-8">
          <h2 className="text-2xl font-bold uppercase">Nenhuma carreira salva</h2>
          <p className="mt-2 text-sm text-muted-foreground">Crie uma carreira para começar sua trajetória no futebol brasileiro.</p>
          <Link to="/nova-carreira" className="mt-5 inline-block rounded-md bg-primary px-5 py-3 font-bold text-primary-foreground">Criar nova carreira</Link>
        </section>
      )}
    </>
  );
}
