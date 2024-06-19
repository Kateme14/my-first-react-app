import { combineReducers, configureStore } from "@reduxjs/toolkit"
import postPopUpReducer from "./postPopUpReducer"

const combineReducer = combineReducers ({
    postPopUpReducer
})

export const store = configureStore (
    {
        reducer: combineReducer
    }

)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch