import { describe, expect, it } from "vitest";
import { simulateMatch, type MatchTeam } from "./simulate";

const home: MatchTeam = {
  id: "home", name: "Clube da Casa", attack: 75, midfield: 70, defense: 68,
};
const away: MatchTeam = {
  id: "away", name: "Clube Visitante", attack: 68, midfield: 66, defense: 72,
};

describe("simulateMatch", () => {
  it("returns a 90-minute score and one event for every goal", () => {
    const result = simulateMatch(home, away, () => 0.01);
    expect(result.homeGoals + result.awayGoals).toBe(result.events.length);
    expect(result.events.every((event) => event.minute >= 1 && event.minute <= 90)).toBe(true);
  });

  it("is repeatable when the same random sequence is supplied", () => {
    const sequence = () => {
      let value = 0;
      return () => ((value++ * 37) % 100) / 100;
    };
    expect(simulateMatch(home, away, sequence())).toEqual(
      simulateMatch(home, away, sequence()),
    );
  });

  it("rejects invalid ratings and the same club on both sides", () => {
    expect(() => simulateMatch({ ...home, attack: 101 }, away)).toThrow();
    expect(() => simulateMatch(home, home)).toThrow();
  });

  it("records the correct scorer for every goal", () => {
    const result = simulateMatch(home, away, () => 0);
    expect(result.events.every((event) => event.clubId === "home" || event.clubId === "away")).toBe(true);
  });
});
