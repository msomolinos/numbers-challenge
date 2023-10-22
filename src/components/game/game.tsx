import {useEffect, useState} from 'react'
import Results from "../results/results.tsx";
import Challenge from "../challenge/challenge.tsx";
import Header from "../header/header.tsx";

const Game = ({original, challenge}) => {

    const [candidates, setCandidates] = useState(original)
    const [statements, setStatements] = useState([])
    const [bestOption, setBestOption] = useState(0)

    const [winner, setWinner] = useState(false)

    const hasWinner = (candidates, challenge) => {
        return candidates.some((number) => number.value === challenge)
    }

    useEffect(() => {
        if (hasWinner(candidates, challenge)) {
            setWinner(true)
            setBestOption(challenge)
        } else if (candidates.length === 1) {
            setBestOption(candidates[0])
        }
    }, [candidates, challenge])

    return (
        <>
            <Header challenge={challenge}/>

            <hr/>

            {
                (winner || bestOption > 0) ?
                    (
                        <Results
                            winner={winner}
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