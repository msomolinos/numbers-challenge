import { Action, Store } from "@reduxjs/toolkit";
import {State} from "../redux/state.ts";

export const saveState = (store: Store<State, Action>) => {
    // TODO save to local storage
    console.log(store)
}