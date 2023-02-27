import userReducer from "@/features/user/usersSlice";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () => configureStore({
    reducer: {
        userReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
})

type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>
export const wrapper = createWrapper<AppStore>(makeStore, {debug: true})