export type DesignState = {
  isDark: boolean;
  fSize: number;
};

export type DesignAction =
  | { type: "TOGGLE_DARK" }
  | { type: "INCREASE_FONT" }
  | { type: "DECREASE_FONT" };

export const initialState: DesignState = {
  isDark: false,
  fSize: 16,
};

export function designReducer(
  state: DesignState,
  action: DesignAction,
): DesignState {
  switch (action.type) {
    case "TOGGLE_DARK":
      return { ...state, isDark: !state.isDark };
    case "INCREASE_FONT":
      return { ...state, fSize: state.fSize + 1 };
    case "DECREASE_FONT":
      return { ...state, fSize: state.fSize - 1 };
    default:
      return state;
  }
}
