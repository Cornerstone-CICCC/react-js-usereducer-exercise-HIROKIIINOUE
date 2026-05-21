import type { DesignAction, DesignState } from '../reducers/designReducer'

type MainProps = {
  state: DesignState
  dispatch: React.Dispatch<DesignAction>
}

function Main({ state, dispatch }: MainProps) {
  return (
    <div
      className="app"
      style={{
        backgroundColor: state.isDark ? '#000000' : '#ffffff',
        color: state.isDark ? '#ffffff' : '#000000',
        fontSize: `${state.fSize}px`,
      }}
    >
      <h1>useReducer Exercise</h1>
      <p>Font size: {state.fSize}px</p>
      <div className="buttons">
        <button type="button" onClick={() => dispatch({ type: 'TOGGLE_DARK' })}>
          Toggle Mode
        </button>
        <button type="button" onClick={() => dispatch({ type: 'INCREASE_FONT' })}>
          Increase Font Size
        </button>
        <button type="button" onClick={() => dispatch({ type: 'DECREASE_FONT' })}>
          Decrease Font Size
        </button>
      </div>
    </div>
  )
}

export default Main
