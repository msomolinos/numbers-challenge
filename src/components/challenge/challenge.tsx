import Candidates from '../candidates/candidates.tsx'
import Board from '../board/board.tsx'
import Builder from '../builder/builder.tsx'
import {useState} from 'react'
import {OperationType} from "../operation/operation.type.ts";
import './challenge.css'

const Challenge = ({original, candidates, setCandidates, statements, setStatements, setBestOption}) => {

    const [operation, setOperation] = useState<OperationType>({ show: false} as OperationType)

    const resetChallenge = () => {
        setCandidates(original)
        setStatements([])
        setBestOption(0)
        setOperation({ show: false} as OperationType)
    }

    const startBuilder = () => {
        setOperation({ show: true} as OperationType)
    }

    return (
        <section className='challenge'>
            <Candidates
                candidates={candidates}
                operation={operation}
                setOperation={setOperation}
                setBestOption={setBestOption}
            />

            <div className="best-option">
                <button id="open-builder" onClick={startBuilder} hidden={operation?.show}>New Operation</button>
            </div>

            <Builder
                candidates={candidates}
                setCandidates={setCandidates}
                operation={operation}
                setOperation={setOperation}
                statements={statements}
                setStatements={setStatements}
            />

            <Board
                statements={statements}/>

            <hr/>

            <button onClick={resetChallenge}>Reset Game</button>
        </section>
    )
}

export default Challenge