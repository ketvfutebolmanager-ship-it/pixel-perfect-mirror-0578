/**
 * Competitions module — Campeonato Brasileiro divisions.
 * Only structural metadata lives here. Formats must be confirmed against the
 * official CBF regulation of each season before being marked `confirmed`.
 */
export type DivisionSlug = "serie-a" | "serie-b" | "serie-c" | "serie-d";

export type Division = {
  slug: DivisionSlug;
  name: string;
  level: 1 | 2 | 3 | 4;
  season: number;
  /** Plain-language format; "pending" until checked against the regulation. */
  format: string;
  formatStatus: "confirmed" | "pending";
};

export const DIVISIONS: Division[] = [
  { slug: "serie-a", name: "Série A", level: 1, season: 2026, format: "Pontos corridos, turno e returno.", formatStatus: "pending" },
  { slug: "serie-b", name: "Série B", level: 2, season: 2026, format: "Pontos corridos, turno e returno.", formatStatus: "pending" },
  { slug: "serie-c", name: "Série C", level: 3, season: 2026, format: "Fase inicial seguida de fases eliminatórias / grupos.", formatStatus: "pending" },
  { slug: "serie-d", name: "Série D", level: 4, season: 2026, format: "Fase de grupos regionalizados seguida de mata-mata.", formatStatus: "pending" },
];

export function getDivision(slug: string): Division | undefined {
  return DIVISIONS.find((d) => d.slug === slug);
}
