import {OperationType} from "../operation/operation.type.ts";
import {DigitType} from "./digit.type.ts";

export const OPERATION_UPDATE_ACTION = "@operation/update"
export type OperationUpdateAction = {
    type: typeof OPERATION_UPDATE_ACTION
    payload: {
        operation: OperationType
    }
}

export const createOperationUpdateAction = (operation: OperationType): OperationUpdateAction => ({
  type: OPERATION_UPDATE_ACTION,
  payload: {
      operation
  }
})

export const BEST_OPTION_CANDIDATE_NEW_ACTION = "@bestOptionCandidate/new"
export type BestOptionCandidateNewAction = {
    type: typeof BEST_OPTION_CANDIDATE_NEW_ACTION
    payload: {
        digit: DigitType
    }
}

export const createBestOptionCandidateNewAction = (digit: DigitType): BestOptionCandidateNewAction => ({
    type: BEST_OPTION_CANDIDATE_NEW_ACTION,
    payload: {
        digit
    }
})