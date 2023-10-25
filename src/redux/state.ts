import {DigitType} from "../components/digit/digit.type.ts";
import {Statement} from "../utils/statement.ts";
import {OperationType} from "../components/operation/operation.type.ts";

export type State = {
    challenge: number
    candidates: DigitType[]
    sourceCandidates: DigitType[]
    winner: boolean
    bestOption: number
    bestOptionCandidate?: DigitType
    statements: Statement[]
    operation: OperationType

}
export const initialState: State = {
    challenge: 0,
    candidates: [],
    sourceCandidates: [],
    winner: false,
    bestOption: 0,
    statements: [],
    operation: {
        show: false
    } as OperationType

}