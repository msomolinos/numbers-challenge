import {State} from "./state.ts";
import {DigitType} from "../components/digit/digit.type.ts";

export const selectChallenge = (state: State): number => state.challenge
export const selectCandidates = (state: State): DigitType[] => state.candidates