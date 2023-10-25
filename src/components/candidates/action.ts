export const BEST_OPTION_CANDIDATE_REMOVE_ACTION = "@bestOptionCandidate/remove"
export type BestOptionCandidateRemoveAction = {
    type: typeof BEST_OPTION_CANDIDATE_REMOVE_ACTION
}

export const createBestOptionCandidateRemoveAction = (): BestOptionCandidateRemoveAction => ({
    type: BEST_OPTION_CANDIDATE_REMOVE_ACTION,
})