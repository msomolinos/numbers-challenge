import Candidates from './candidates.tsx'
import Board from './board.tsx'
import Builder from './builder.tsx'
import {useState} from 'react'
import {Operation} from "./operation.ts";

const Challenge = ({original, candidates, setCandidates, statements, setStatements, setBestOption}) => {

    const [operation, setOperation] = useState<Operation|null>(null)

    const openBuilder = () => {
        const modal =  document.getElementsByClassName('modal')[0]
        modal.classList.remove('hidden')
        modal.classList.add('show')
        setOperation({} as Operation)
    }

    const resetChallenge = () => {
        setCandidates(original)
        setOperation(null)
        setStatements([])
        setBestOption(0)
    }

    return (
        <>
            <Candidates
                candidates={candidates}
                operation={operation}
                setOperation={setOperation}/>
            <Board
                statements={statements}/>

            <button onClick={openBuilder}>New Operation</button>
            <Builder
                candidates={candidates}
                setCandidates={setCandidates}
                operation={operation}
                setOperation={setOperation}
                statements={statements}
                setStatements={setStatements}
                setBestOption={setBestOption}
            />
            <button onClick={resetChallenge}>Reset Game</button>
        </>
    )
}

export default Challenge