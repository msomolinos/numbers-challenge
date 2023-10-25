import Candidates from '../candidates/candidates.tsx'
import Board from '../board/board.tsx'
import Builder from '../builder/builder.tsx'
import './challenge.css'
import {useDispatch, useSelector} from "react-redux";
import {
    createCandidatesResetAction,
    createOperationInitAction,
    createOperationStartAction,
    createStatementsResetAction
} from "./action.ts";
import {State} from "../../redux/state.ts";

const Challenge = () => {

    const operation =  useSelector((state: State) => state.operation)

    const dispatch = useDispatch()

    const resetChallenge = () => {
        dispatch(createCandidatesResetAction())
        dispatch(createStatementsResetAction())
        dispatch(createOperationInitAction())
    }

    const startBuilder = () => {
        dispatch(createOperationStartAction())
    }

    return (
        <section className='challenge'>
            <Candidates />

            <div className="best-option">
                <button id="open-builder" onClick={startBuilder} hidden={operation?.show}>New Operation</button>
            </div>

            <Builder />

            <Board />

            <hr/>

            <button onClick={resetChallenge}>Reset Game</button>
        </section>
    )
}

export default Challenge