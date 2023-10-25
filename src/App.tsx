import './App.css'
import Game from "./components/game/game.tsx";
import {Provider} from "react-redux";
import {getStore} from "./redux/store.ts";
import Generator from "./components/generator/generator.tsx";

function App() {
    return (
        <Provider store={getStore()}>
            <Generator>
                <Game/>
            </Generator>
        </Provider>
    )
}

export default App
