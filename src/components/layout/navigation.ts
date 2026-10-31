/** Main menu definition. Every entry maps to an existing route file. */
export type NavItem = { label: string; to: string; params?: Record<string, string> };
export type NavGroup = { title: string; items: NavItem[] };

export const NAV_GROUPS: NavGroup[] = [
  {
    title: "Carreira",
    items: [
      { label: "Página inicial", to: "/" },
      { label: "Nova carreira", to: "/nova-carreira" },
      { label: "Continuar carreira", to: "/continuar-carreira" },
      { label: "Central da partida", to: "/partida" },
    ],
  },
  {
    title: "Competições",
    items: [
      { label: "Campeonatos", to: "/campeonatos" },
      { label: "Série A", to: "/campeonatos/$divisao", params: { divisao: "serie-a" } },
      { label: "Série B", to: "/campeonatos/$divisao", params: { divisao: "serie-b" } },
      { label: "Série C", to: "/campeonatos/$divisao", params: { divisao: "serie-c" } },
      { label: "Série D", to: "/campeonatos/$divisao", params: { divisao: "serie-d" } },
      { label: "Classificação", to: "/classificacao" },
      { label: "Estatísticas", to: "/estatisticas" },
    ],
  },
  {
    title: "Mercado",
    items: [
      { label: "Clubes", to: "/clubes" },
      { label: "Jogadores", to: "/jogadores" },
      { label: "Transferências", to: "/transferencias" },
    ],
  },
  { title: "Sistema", items: [{ label: "Configurações", to: "/configuracoes" }] },
];
