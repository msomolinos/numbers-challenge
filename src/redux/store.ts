import {initialState, State} from "./state.ts";
import {saveState} from "../utils/web-storage.ts";
import {configureStore} from "@reduxjs/toolkit";
import {reducer} from "./reducer.ts";

export const getConfiguredStore = (preloadedState: State) =>
    configureStore({
        reducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({serializableCheck: false, immutableCheck: false}),
        preloadedState,
    })
export const getStore = () => {
    const loadedState = {...initialState}

    const store = getConfiguredStore(loadedState)

    store.subscribe(() => {
        saveState(store)
    })

    return store
}