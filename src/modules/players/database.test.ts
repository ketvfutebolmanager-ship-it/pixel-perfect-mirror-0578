import { describe, expect, it } from "vitest";
import { VERIFIED_PLAYERS_2026 } from "./database";

describe("verified player database", () => {
  it("preserves adjacent club records", () => {
    const index = VERIFIED_PLAYERS_2026.findIndex(
      (player) => player.id === "ze-eduardo-inter-de-limeira",
    );
    expect(index).toBeGreaterThanOrEqual(0);
    expect(VERIFIED_PLAYERS_2026[index + 1]?.id).toBe("maxwalef-botafogo-da-paraiba");
  });

  it("contains no empty player entries", () => {
    expect(VERIFIED_PLAYERS_2026.length).toBeGreaterThan(0);
    for (let index = 0; index < VERIFIED_PLAYERS_2026.length; index++) {
      expect(VERIFIED_PLAYERS_2026[index]?.id).toEqual(expect.any(String));
    }
  });
});