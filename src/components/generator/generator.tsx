import {newCandidates, newChallenge} from "./generator.ts";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {createCandidatesInitAction, createChallengeNewAction} from "./action.ts";

const Generator = ({children}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const candidates = newCandidates();
        dispatch(createCandidatesInitAction(candidates))
        dispatch(createChallengeNewAction(newChallenge(candidates)))
    }, []);

    return (
        <>
            {children}
        </>
    )
}

export default Generator
