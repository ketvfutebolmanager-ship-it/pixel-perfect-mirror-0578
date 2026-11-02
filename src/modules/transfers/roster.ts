import type { PlayerRecord } from "@/modules/players/database";
import type { PlayerContract } from "./contracts";

export const PLAYER_CONTRACTS_KEY = "ketvfm-contracts";

export function readPlayerContracts(): PlayerContract[] {
  if (typeof window === "undefined") return [];
  try {
    const value: unknown = JSON.parse(window.localStorage.getItem(PLAYER_CONTRACTS_KEY) ?? "[]");
    return Array.isArray(value) ? value as PlayerContract[] : [];
  } catch {
    return [];
  }
}

/** Applies active contracts to the verified player list without inventing profiles. */
export function getDivisionRoster(
  division: PlayerRecord["division"],
  verifiedPlayers: PlayerRecord[],
  contracts: PlayerContract[],
): PlayerRecord[] {
  const activeContracts = contracts.filter((contract) => contract.status === "active");
  const playersById = new Map(verifiedPlayers.map((player) => [player.id, player]));
  const activeByPlayer = new Map(activeContracts.map((contract) => [contract.playerId, contract]));

  return verifiedPlayers
    .filter((player) => player.division === division)
    .flatMap((player) => {
      const contract = activeByPlayer.get(player.id);
      if (!contract) return [player];
      if (contract.clubId === player.clubId) return [player];
      return [{
        ...player,
        clubId: contract.clubId,
        clubName: contract.clubName,
      }];
    })
    .filter((player) => player.division === division)
    .filter((player) => {
      const original = playersById.get(player.id);
      const contract = activeByPlayer.get(player.id);
      return !contract || !original || contract.clubId === player.clubId;
    });
}
