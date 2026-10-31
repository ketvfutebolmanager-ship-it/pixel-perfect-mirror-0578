export type CardType = "yellow" | "second-yellow" | "red";
export type DisciplinaryEvent = {
  minute: number;
  type: CardType;
  clubId: string;
  clubName: string;
  playerId: string;
  playerName: string;
};

export type PlayerDisciplineState = {
  playerId: string;
  yellowCards: number;
  sentOff: boolean;
  suspended: boolean;
};

export function applyCard(state: PlayerDisciplineState, type: CardType): PlayerDisciplineState {
  if (state.sentOff || state.suspended) return state;
  if (type === "red" || type === "second-yellow") {
    return { ...state, yellowCards: state.yellowCards + (type === "second-yellow" ? 1 : 0), sentOff: true, suspended: true };
  }
  return { ...state, yellowCards: state.yellowCards + 1 };
}

export function fineAmount(contractValue: number, finePercent: 10 | 20 | 30): number {
  if (!Number.isFinite(contractValue) || contractValue < 0) throw new Error("Valor de contrato inválido.");
  return Math.round(contractValue * finePercent) / 100;
}
