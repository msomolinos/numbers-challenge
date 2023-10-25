import {Action} from './action.ts'
import {initialState, State} from "./state.ts";
import {CANDIDATES_INIT_ACTION, CHALLENGE_NEW_ACTION} from "../components/generator/action.ts";
import {BEST_OPTION_NEW_ACTION, WINNER_NEW_ACTION} from "../components/game/action.ts";
import {
    CANDIDATES_RESET_ACTION,
    OPERATION_INIT_ACTION,
    OPERATION_START_ACTION,
    STATEMENTS_RESET_ACTION
} from "../components/challenge/action.ts";
import {
    CANDIDATES_CREATE_ACTION,
    CANDIDATES_DELETE_ACTION,
    STATEMENTS_CREATE_ACTION
} from "../components/builder/action.ts";
import {OperationType} from "../components/operation/operation.type.ts";
import {BEST_OPTION_CANDIDATE_NEW_ACTION, OPERATION_UPDATE_ACTION} from "../components/digit/action.ts";
import {BEST_OPTION_CANDIDATE_REMOVE_ACTION} from "../components/candidates/action.ts";

export const reducer = (state: State = initialState, action: Action): State => {
    const newState: State = {...state}
    switch (action.type) {
        case CHALLENGE_NEW_ACTION:
            return {
                ...state,
                challenge: action.payload.challenge
            }
        case CANDIDATES_INIT_ACTION:
            return {
                ...state,
                candidates: action.payload.candidates,
                sourceCandidates: action.payload.candidates
            }
        case WINNER_NEW_ACTION:
            return {
                ...state,
                winner: action.payload.winner
            }
        case BEST_OPTION_NEW_ACTION:
            return {
                ...state,
                bestOption: action.payload.bestOption,
            }
        case STATEMENTS_RESET_ACTION:
            return {
                ...state,
                statements: [],
            }
        case CANDIDATES_RESET_ACTION:
            return {
                ...state,
                candidates: newState.sourceCandidates,
            }
        case STATEMENTS_CREATE_ACTION:
            return {
                ...state,
                statements: [...newState.statements, action.payload.statement]
            }
        case CANDIDATES_CREATE_ACTION:
            return {
                ...state,
                candidates: [...newState.candidates, action.payload.candidate]
            }
        case CANDIDATES_DELETE_ACTION:
            return {
                ...state,
                candidates: newState.candidates.filter(candidate => candidate != action.payload.candidate)
            }
        case OPERATION_INIT_ACTION:
            return {
                ...state,
                operation: {
                    show: false
                } as OperationType
            }
        case OPERATION_START_ACTION:
            return {
                ...state,
                operation: {
                    show: true
                } as OperationType
            }
        case OPERATION_UPDATE_ACTION:
            return {
                ...state,
                operation: action.payload.operation
            }
        case BEST_OPTION_CANDIDATE_NEW_ACTION:
            return {
                ...state,
                bestOptionCandidate: action.payload.digit
            }
        case BEST_OPTION_CANDIDATE_REMOVE_ACTION:
            return {
                ...state,
                bestOptionCandidate: undefined
            }
        default: return newState
    }
}