import Digit from '../digit/digit.tsx'
import {DigitType} from "../digit/digit.type.ts";
import './candidates.css'
import {useEffect, useState} from "react";

const Candidates = ({candidates, operation, setOperation, setBestOption}) => {

    const [bestOptionCandidate, setBestOptionCandidate] = useState({} as DigitType)

    useEffect(() => {
        if (operation.show) {
            setBestOptionCandidate({} as DigitType)
        }
    }, [operation]);

    const chooseBestOption = () => {
        setBestOption(bestOptionCandidate.value)
    }

    const showBestOption = () => {
        return !bestOptionCandidate || !bestOptionCandidate.value || bestOptionCandidate.value === 0
    }

    return (
        <div className='candidates'>
            <h3>Candidates</h3>
            <div className='grid'>
                {
                    candidates.map((digit: DigitType) => <Digit
                        key={digit.id}
                        digit={digit}
                        operation={operation}
                        setOperation={setOperation}
                        bestOptionCandidate={bestOptionCandidate}
                        setBestOptionCandidate={setBestOptionCandidate}
                    />)
                }
            </div>
            <div className="best-option">
                <button hidden={showBestOption()} onClick={chooseBestOption}>Best Option</button>
            </div>
        </div>
    )
}

export default Candidates