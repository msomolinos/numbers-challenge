export const WINNER_NEW_ACTION = '@winner/new'
export type WinnerNewAction = {
    type: typeof WINNER_NEW_ACTION
    payload: {
        winner: boolean
    }
}
export const createWinnerNewAction = (winner: boolean): WinnerNewAction => ({
    type: WINNER_NEW_ACTION,
    payload: {
        winner
    }
})

export const BEST_OPTION_NEW_ACTION = '@bestOption/new'
export type BestOptionNewAction = {
    type: typeof BEST_OPTION_NEW_ACTION
    payload: {
        bestOption: number
    }
}
export const createBestOptionNewAction = (bestOption: number): BestOptionNewAction => ({
    type: BEST_OPTION_NEW_ACTION,
    payload: {
        bestOption
    }
})