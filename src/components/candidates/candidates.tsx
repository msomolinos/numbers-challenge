import Digit from '../digit/digit.tsx'
import {DigitType} from "../digit/digit.type.ts";
import './candidates.css'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createBestOptionNewAction} from "../game/action.ts";
import {State} from "../../redux/state.ts";
import {createBestOptionCandidateRemoveAction} from "./action.ts";

const Candidates = () => {

    const operation = useSelector((state: State) => state.operation)
    const candidates = useSelector((state: State) => state.candidates)
    const bestOptionCandidate = useSelector((state: State) => state.bestOptionCandidate)

    const dispatch = useDispatch()

    useEffect(() => {
        if (operation.show) {
            dispatch(createBestOptionCandidateRemoveAction())
        }
    }, [operation]);

    const chooseBestOption = () => {
        bestOptionCandidate && dispatch(createBestOptionNewAction(bestOptionCandidate.value))
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