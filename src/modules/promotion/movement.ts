/**
 * Promotion/relegation module. Pure functions: given final standings per level
 * and a season ruleset, return which clubs move up/down. Rulesets must come from
 * the official regulation of the season — none are hardcoded here.
 */
export type LevelRule = { level: number; promoted: number; relegated: number };

export type Movement = { clubId: string; from: number; to: number };

/** standings: level -> clubIds ordered by final position (1st first). */
export function computeMovements(standings: Record<number, string[]>, rules: LevelRule[]): Movement[] {
  const byLevel = new Map(rules.map((r) => [r.level, r]));
  const moves: Movement[] = [];
  for (const rule of rules) {
    const below = byLevel.get(rule.level + 1);
    if (!below) continue;
    if (rule.relegated !== below.promoted) {
      throw new Error(`Regra inconsistente entre nível ${rule.level} e ${rule.level + 1}`);
    }
    const upper = standings[rule.level] ?? [];
    const lower = standings[rule.level + 1] ?? [];
    upper.slice(upper.length - rule.relegated).forEach((clubId) => moves.push({ clubId, from: rule.level, to: rule.level + 1 }));
    lower.slice(0, below.promoted).forEach((clubId) => moves.push({ clubId, from: rule.level + 1, to: rule.level }));
  }
  return moves;
}
