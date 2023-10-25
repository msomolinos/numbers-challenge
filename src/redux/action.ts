import {CandidatesInitAction, ChallengeNewAction} from "../components/generator/action.ts";
import {BestOptionNewAction, WinnerNewAction} from "../components/game/action.ts";
import {
    CandidatesResetAction,
    OperationInitAction,
    OperationStartAction,
    StatementsResetAction
} from "../components/challenge/action.ts";
import {CandidatesDeleteAction, CandidatesNewAction, StatementsNewAction} from "../components/builder/action.ts";
import {BestOptionCandidateNewAction, OperationUpdateAction} from "../components/digit/action.ts";
import {BestOptionCandidateRemoveAction} from "../components/candidates/action.ts";

export type Action =
    | ChallengeNewAction
    | CandidatesInitAction
    | WinnerNewAction
    | BestOptionNewAction
    | CandidatesResetAction
    | StatementsResetAction
    | StatementsNewAction
    | CandidatesNewAction
    | CandidatesDeleteAction
    | OperationInitAction
    | OperationStartAction
    | OperationUpdateAction
    | BestOptionCandidateNewAction
    | BestOptionCandidateRemoveAction