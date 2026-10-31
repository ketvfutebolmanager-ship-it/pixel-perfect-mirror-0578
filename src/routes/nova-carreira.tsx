import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/layout/AppShell";
import { getClubsByDivision, type BrazilianDivision } from "@/modules/clubs/brazilian-clubs-2026";

export const Route = createFileRoute("/nova-carreira")({
  head: () => ({ meta: [
    { title: "Nova carreira — KE TV Football Manager" },
    { name: "description", content: "Crie seu técnico, escolha um clube brasileiro e comece a temporada 2026." },
  ] }),
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
  fanMorale?: number;
  boardConfidence?: number;
};

function Page() {
  const navigate = useNavigate();
  const [coach, setCoach] = useState("");
  const [division, setDivision] = useState<BrazilianDivision>("Série D");
  const clubs = getClubsByDivision(division);
  const [clubId, setClubId] = useState(() => getClubsByDivision("Série D")[0]?.id ?? "");
  const selectedClub = clubs.find((item) => item.id === clubId) ?? clubs[0];
  const [approach, setApproach] = useState<CareerSave["approach"]>("balanced");
  const [error, setError] = useState("");

  function changeDivision(value: BrazilianDivision) {
    setDivision(value);
    setClubId(getClubsByDivision(value)[0]?.id ?? "");
  }

  function startCareer() {
    if (coach.trim().length < 2) { setError("Digite o nome do treinador para continuar."); return; }
    if (!selectedClub) { setError("Não há clubes cadastrados nesta divisão."); return; }
    const save: CareerSave = {
      coach: coach.trim(), club: selectedClub.name, division, approach, season: 2026, played: 0, fanMorale: 70, boardConfidence: 70,
    };
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
        Escolha entre os clubes participantes reais do Brasileirão 2026 e assuma o comando.
      </PageHeader>
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <section className="space-y-5 rounded-md border border-border bg-card p-6">
          <div>
            <label htmlFor="coach" className="mb-2 block text-sm font-semibold">Nome do treinador</label>
            <input id="coach" value={coach} onChange={(e) => setCoach(e.target.value)} placeholder="Ex.: Carlos Silva" className="w-full rounded-md border border-input bg-background px-3 py-3 text-foreground outline-none focus:border-primary" />
          </div>
          <div>
            <label htmlFor="division" className="mb-2 block text-sm font-semibold">Divisão inicial</label>
            <select id="division" value={division} onChange={(e) => changeDivision(e.target.value as BrazilianDivision)} className="w-full rounded-md border border-input bg-background px-3 py-3 text-foreground">
              {divisions.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="club" className="mb-2 block text-sm font-semibold">Clube para comandar ({clubs.length} clubes)</label>
            <select id="club" value={selectedClub?.id ?? ""} onChange={(e) => setClubId(e.target.value)} className="w-full rounded-md border border-input bg-background px-3 py-3 text-foreground">
              {clubs.map((item) => <option key={item.id} value={item.id}>{item.name} - {item.state}{item.group ? ` · Grupo ${item.group}` : ""}</option>)}
            </select>
            <p className="mt-2 text-xs text-muted-foreground">Participantes do Campeonato Brasileiro de 2026. Os grupos da Série D seguem a divisão divulgada pela CBF.</p>
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
          <p className="mt-3 text-sm text-muted-foreground">Escolha seu clube e filosofia, prepare o time e entre em campo.</p>
          <div className="mt-6 rounded-md border border-border bg-card p-4">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Salvamento</p>
            <p className="mt-2 text-sm">Nesta versão, a carreira fica salva neste navegador. A sincronização em nuvem será ativada quando autenticação e banco estiverem configurados.</p>
          </div>
          <Link to="/" className="mt-5 inline-block text-sm font-semibold text-primary">← Voltar ao início</Link>
        </aside>
      </div>
    </>
  );
}
