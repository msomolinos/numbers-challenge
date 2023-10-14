import {useEffect, useRef, useState} from 'react'
import Results from "./results.tsx";
import Challenge from "./challenge.tsx";

const Game = ({original, challenge}) => {

    const [candidates, setCandidates] = useState(original)
    const [statements, setStatements] = useState([])
    const [bestOption, setBestOption] = useState(0)

    const winner = useRef(false)
    const noMoreMovements = useRef(false)

    const hasWinner = (candidates, challenge) => {
        return candidates.some((number) => number === challenge)
    }

    useEffect(() => {
        if (hasWinner(candidates, challenge)) {
            winner.current = true
            setBestOption(challenge)
        } else if (candidates.length === 1) {
            noMoreMovements.current = true
            setBestOption(candidates[0])
        }
    }, [candidates, challenge])

    return (
        <>
            <h1>Numbers Challenge</h1>
            <p>Build the path to get the number {challenge}</p>

            {
                (winner.current || bestOption > 0) ?
                    (
                        <Results
                            winner={winner.current}
                            bestOption={bestOption}
                            statements={statements}
                        />
                    )
                    :
                    (
                        <Challenge
                            original={original}
                            statements={statements}
                            setStatements={setStatements}
                            candidates={candidates}
                            setCandidates={setCandidates}
                            setBestOption={setBestOption}
                        />
                    )
            }
        </>
    )
}

export default Game