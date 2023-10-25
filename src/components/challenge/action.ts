export const STATEMENTS_RESET_ACTION = '@statements/reset'
export type StatementsResetAction = {
    type: typeof STATEMENTS_RESET_ACTION
}
export const createStatementsResetAction = (): StatementsResetAction => ({
    type: STATEMENTS_RESET_ACTION,
})

export const CANDIDATES_RESET_ACTION = '@candidates/reset'
export type CandidatesResetAction = {
    type: typeof CANDIDATES_RESET_ACTION
}
export const createCandidatesResetAction = (): CandidatesResetAction => ({
    type: CANDIDATES_RESET_ACTION,
})

export const OPERATION_INIT_ACTION = '@operation/init'
export type OperationInitAction = {
    type: typeof OPERATION_INIT_ACTION
}
export const createOperationInitAction = (): OperationInitAction => ({
    type: OPERATION_INIT_ACTION,
})

export const OPERATION_START_ACTION = '@operation/start'
export type OperationStartAction = {
    type: typeof OPERATION_START_ACTION
}
export const createOperationStartAction = (): OperationStartAction => ({
    type: OPERATION_START_ACTION,
})