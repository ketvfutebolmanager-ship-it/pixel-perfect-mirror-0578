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

/** Applies active contracts to verified players; unknown profiles are never fabricated. */
export function getDivisionRoster(
  division: PlayerRecord["division"],
  verifiedPlayers: PlayerRecord[],
  contracts: PlayerContract[],
): PlayerRecord[] {
  const activeContracts = contracts.filter((contract) => contract.status === "active");
  const playersById = new Map(verifiedPlayers.map((player) => [player.id, player]));
  const contractByPlayer = new Map(activeContracts.map((contract) => [contract.playerId, contract]));

  const originalPlayers = verifiedPlayers.filter((player) => {
    if (player.division !== division) return false;
    const contract = contractByPlayer.get(player.id);
    return !contract || contract.clubId === player.clubId;
  });

  const signedPlayers = activeContracts.flatMap((contract) => {
    const original = playersById.get(contract.playerId);
    if (!original || contract.clubId === original.clubId || (contract.division ?? original.division) !== division) return [];
    return [{
      ...original,
      clubId: contract.clubId,
      clubName: contract.clubName,
      division: contract.division ?? original.division,
    }];
  });

  return [...originalPlayers, ...signedPlayers];
}
