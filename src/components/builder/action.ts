import {DigitType} from "../digit/digit.type.ts";
import {Statement} from "../../utils/statement.ts";

export const STATEMENTS_CREATE_ACTION = '@statements/new'
export type StatementsNewAction = {
    type: typeof STATEMENTS_CREATE_ACTION,
    payload: {
        statement: Statement
    }
}
export const createStatementsNewAction = (statement: string): StatementsNewAction => ({
    type: STATEMENTS_CREATE_ACTION,
    payload: {
        statement: new Statement(statement)
    }
})

export const CANDIDATES_CREATE_ACTION = '@candidates/new'
export type CandidatesNewAction = {
    type: typeof CANDIDATES_CREATE_ACTION,
    payload: {
        candidate: DigitType
    }
}
export const createCandidatesNewAction = (candidate: number): CandidatesNewAction => ({
    type: CANDIDATES_CREATE_ACTION,
    payload: {
        candidate: new DigitType(candidate)
    }
})

export const CANDIDATES_DELETE_ACTION = '@candidates/delete'
export type CandidatesDeleteAction = {
    type: typeof CANDIDATES_DELETE_ACTION,
    payload: {
        candidate: DigitType
    }
}
export const createCandidatesDeleteAction = (candidate: DigitType): CandidatesDeleteAction => ({
    type: CANDIDATES_DELETE_ACTION,
    payload: {
        candidate
    }
})