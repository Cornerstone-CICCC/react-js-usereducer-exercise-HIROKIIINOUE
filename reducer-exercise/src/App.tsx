import { useReducer } from 'react'
import './App.css'
import Main from './components/Main'
import { designReducer, initialState } from './reducers/designReducer'

function App() {
  const [state, dispatch] = useReducer(designReducer, initialState)

  return <Main state={state} dispatch={dispatch} />
}

export default App
