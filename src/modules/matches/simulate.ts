export type TacticalApproach = "defensive" | "balanced" | "attacking";

export type MatchTeam = {
  id: string;
  name: string;
  attack: number;
  midfield: number;
  defense: number;
  approach?: TacticalApproach;
  players?: Array<{ id: string; name: string }>;
};

export type MatchEvent = {
  minute: number;
  type: "goal";
  clubId: string;
  clubName: string;
  playerId?: string;
  playerName?: string;
};

export type MatchResult = {
  home: MatchTeam;
  away: MatchTeam;
  homeGoals: number;
  awayGoals: number;
  events: MatchEvent[];
};

/**
 * Simulates a 90-minute match. Ratings are game attributes (1–100), not
 * real-world player or club statistics. Inject rng for repeatable tests.
 */
export function simulateMatch(
  home: MatchTeam,
  away: MatchTeam,
  rng: () => number = Math.random,
  startMinute = 1,
  endMinute = 90,
): MatchResult {
  validateTeam(home);
  validateTeam(away);
  if (home.id === away.id) throw new Error("Um clube não pode jogar contra si mesmo.");

  let homeGoals = 0;
  let awayGoals = 0;
  const events: MatchEvent[] = [];

  const homeStyle = styleModifiers(home.approach ?? "balanced");
  const awayStyle = styleModifiers(away.approach ?? "balanced");

  for (let minute = startMinute; minute <= endMinute; minute += 1) {
    const homeControl = home.midfield * homeStyle.control;
    const awayControl = away.midfield * awayStyle.control;
    const homePossession = clamp(homeControl / (homeControl + awayControl), 0.2, 0.8);
    const attackingHome = rng() < homePossession;
    const attacker = attackingHome ? home : away;
    const defender = attackingHome ? away : home;
    const attackStyle = attackingHome ? homeStyle : awayStyle;
    const defenseStyle = attackingHome ? awayStyle : homeStyle;

    const attackingPower = attacker.attack * attackStyle.attack;
    const defensivePower = defender.defense * defenseStyle.defense;
    const chance = clamp(0.012 + (attackingPower - defensivePower) / 5000, 0.004, 0.035);

    if (rng() < chance) {
      if (attackingHome) homeGoals += 1;
      else awayGoals += 1;
      events.push({
        minute,
        type: "goal",
        clubId: attacker.id,
        clubName: attacker.name,
        ...(attacker.players?.length ? (() => { const scorer = attacker.players[Math.floor(rng() * attacker.players.length)]!; return { playerId: scorer.id, playerName: scorer.name }; })() : {}),
      });
    }
  }

  return { home, away, homeGoals, awayGoals, events };
}

function validateTeam(team: MatchTeam): void {
  if (!team.id.trim() || !team.name.trim()) throw new Error("Clube precisa ter identificação e nome.");
  for (const [attribute, value] of Object.entries({
    attack: team.attack,
    midfield: team.midfield,
    defense: team.defense,
  })) {
    if (!Number.isFinite(value) || value < 1 || value > 100) {
      throw new Error(`Atributo ${attribute} deve estar entre 1 e 100.`);
    }
  }
}

function styleModifiers(approach: TacticalApproach) {
  if (approach === "attacking") return { attack: 1.16, control: 1.04, defense: 0.88 };
  if (approach === "defensive") return { attack: 0.88, control: 0.96, defense: 1.16 };
  return { attack: 1, control: 1, defense: 1 };
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
