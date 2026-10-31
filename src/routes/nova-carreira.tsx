import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { getClubsByDivision, type BrazilianDivision } from "@/modules/clubs/brazilian-clubs-2026";

export const Route = createFileRoute("/nova-carreira")({
  head: () => ({
    meta: [
      { title: "Nova carreira — KE TV Football Manager" },
      { name: "description", content: "Crie seu técnico, escolha um clube e comece a temporada." },
    ],
  }),
  component: Page,
});

const divisions: BrazilianDivision[] = ["Série A", "Série B", "Série C", "Série D"];

export type CareerSave = {
  coach: string;
  club: string;
  division: string;
  approach: "defensive" | "balanced" | "attacking";
  season: number;
  played: number;
};

function Page() {
  const navigate = useNavigate();
  const [coach, setCoach] = useState("");
  const [club, setClub] = useState(demoClubs[0].name);
  const [division, setDivision] = useState("Série D");
  const [approach, setApproach] = useState<CareerSave["approach"]>("balanced");
  const [error, setError] = useState("");

  function startCareer() {
    if (coach.trim().length < 2) {
      setError("Digite o nome do treinador para continuar.");
      return;
    }
    if (!selectedClub) { setError("Não há clubes cadastrados nesta divisão."); return; }\n    const save: CareerSave = { coach: coach.trim(), club: selectedClub.name, division, approach, season: 2026, played: 0 };
    try {
      window.localStorage.setItem("ketvfm-career", JSON.stringify(save));
      navigate({ to: "/partida" });
    } catch {
      setError("Não foi possível salvar neste navegador. Verifique as configurações de armazenamento.");
    }
  }

  return (
    <>
      <PageHeader kicker="Sua jornada começa aqui" title="Nova carreira">
        Assuma o comando, escolha seu desafio e leve seu clube ao topo.
      </PageHeader>
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="space-y-5 rounded-md border border-border bg-card p-6">
          <div>
            <label htmlFor="coach" className="mb-2 block text-sm font-semibold">Nome do treinador</label>
            <input id="coach" value={coach} onChange={(e) => setCoach(e.target.value)} placeholder="Ex.: Carlos Silva" className="w-full rounded-md border border-input bg-background px-3 py-3 text-foreground outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="club" className="mb-2 block text-sm font-semibold">Clube para comandar</label>
            <select id="club" value={club} onChange={(e) => setClub(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-3 text-foreground">
              {demoClubs.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
            </select>
            <p className="mt-2 text-xs text-muted-foreground">Clubes de demonstração do protótipo. A base oficial de clubes e elencos será integrada após validação dos dados e licenças.</p>
          </div>
          <div>
            <label htmlFor="division" className="mb-2 block text-sm font-semibold">Divisão inicial</label>
            <select id="division" value={division} onChange={(e) => { const nextDivision = e.target.value as BrazilianDivision; setDivision(nextDivision); const firstClub = getClubsByDivision(nextDivision)[0]; if (firstClub) setClubId(firstClub.id); }} className="w-full rounded-md border border-input bg-background px-3 py-3 text-foreground">
              {divisions.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
          <div>
            <p className="mb-2 text-sm font-semibold">Filosofia tática</p>
            <div className="grid gap-2 sm:grid-cols-3">
              {(["defensive", "balanced", "attacking"] as const).map((item) => {
                const labels = { defensive: "Defensiva", balanced: "Equilibrada", attacking: "Ofensiva" };
                return <button key={item} type="button" onClick={() => setApproach(item)} className={`rounded-md border px-3 py-3 text-sm font-semibold ${approach === item ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary"}`}>{labels[item]}</button>;
              })}
            </div>
          </div>
          {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
          <button onClick={startCareer} className="w-full rounded-md bg-primary px-5 py-3 font-display text-xl font-bold uppercase text-primary-foreground hover:opacity-90">Começar minha carreira</button>
        </section>
        <aside className="rounded-md border border-border bg-hero p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Temporada 2026</p>
          <h2 className="mt-3 text-3xl font-bold uppercase">Seu legado começa no primeiro jogo.</h2>
          <p className="mt-3 text-sm text-muted-foreground">Escolha sua filosofia, prepare o time e entre em campo. Cada resultado será registrado na carreira deste navegador.</p>
          <div className="mt-6 rounded-md border border-border bg-card p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Importante</p>
            <p className="mt-2 text-sm">Nesta versão inicial, a carreira fica salva localmente neste navegador. O salvamento em nuvem exige autenticação e banco de dados ativos.</p>
          </div>
          <Link to="/" className="mt-5 inline-block text-sm font-semibold text-primary">← Voltar ao início</Link>
        </aside>
      </div>
    </>
  );
}
