import {DigitType} from "../digit/digit.type.ts";

export const CHALLENGE_NEW_ACTION = '@challenge/new'
export type ChallengeNewAction = {
    type: typeof CHALLENGE_NEW_ACTION
    payload: {
        challenge: number
    }
}
export const createChallengeNewAction = (challenge: number): ChallengeNewAction => ({
    type: CHALLENGE_NEW_ACTION,
    payload: {
        challenge
    }
})

export const CANDIDATES_INIT_ACTION = '@candidates/init'
export type CandidatesInitAction = {
    type: typeof CANDIDATES_INIT_ACTION,
    payload: {
        candidates: DigitType[]
    }
}
export const createCandidatesInitAction = (candidates: DigitType[]): CandidatesInitAction => ({
    type: CANDIDATES_INIT_ACTION,
    payload: {
        candidates: candidates
    }
})