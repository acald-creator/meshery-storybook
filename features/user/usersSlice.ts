import { createSlice } from "@reduxjs/toolkit";

const initialState = [] as any

const UsersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUserState: function(state, action) {
            return action.payload.user;
        }
    }
})

export const { updateUserState } = UsersSlice.actions;

export default UsersSlice