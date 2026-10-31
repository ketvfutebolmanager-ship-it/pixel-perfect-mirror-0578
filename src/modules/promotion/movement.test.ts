import { describe, expect, it } from "vitest";
import { computeMovements } from "./movement";

describe("computeMovements", () => {
  const rules = [
    { level: 1, promoted: 0, relegated: 2 },
    { level: 2, promoted: 2, relegated: 0 },
  ];

  it("relegates the last clubs and promotes the top clubs", () => {
    const moves = computeMovements({ 1: ["a", "b", "c", "d"], 2: ["e", "f", "g"] }, rules);
    expect(moves).toEqual([
      { clubId: "c", from: 1, to: 2 },
      { clubId: "d", from: 1, to: 2 },
      { clubId: "e", from: 2, to: 1 },
      { clubId: "f", from: 2, to: 1 },
    ]);
  });

  it("rejects rulesets where relegated and promoted counts differ", () => {
    expect(() => computeMovements({}, [{ level: 1, promoted: 0, relegated: 4 }, { level: 2, promoted: 2, relegated: 0 }])).toThrow();
  });
});
