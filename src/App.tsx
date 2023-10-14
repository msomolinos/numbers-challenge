import './App.css'
import Game from "./components/game.tsx";
import {newCandidates, newChallenge} from "./components/generator.ts";

const candidates = newCandidates()
const challenge = newChallenge(candidates)

function App() {
  return (
    <Game original={candidates} challenge={challenge}/>
  )
}

export default App
