import {useEffect} from 'react'
import Results from "../results/results.tsx";
import Challenge from "../challenge/challenge.tsx";
import Header from "../header/header.tsx";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../../redux/state.ts";
import {createBestOptionNewAction, createWinnerNewAction} from "./action.ts";

const Game = () => {

    const challenge = useSelector((state: State) => state.challenge)
    const candidates = useSelector((state: State) => state.candidates)
    const winner = useSelector((state: State) => state.winner)
    const bestOption = useSelector((state: State) => state.bestOption)

    const dispatch = useDispatch()

    const hasWinner = (candidates, challenge) => {
        return candidates.some((number) => number.value === challenge)
    }

    useEffect(() => {
        if (hasWinner(candidates, challenge)) {
            dispatch(createWinnerNewAction(true))
        } else if (candidates.length === 1) {
            dispatch(createBestOptionNewAction(candidates[0].value))
        }
    }, [candidates, challenge])

    return (
        <>
            <Header challenge={challenge}/>
            <hr/>
            {
                (winner || bestOption > 0) ? <Results /> : <Challenge />
            }
        </>
    )
}

export default Game