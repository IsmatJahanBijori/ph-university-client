// auth slice e locally user and token set

import { createSlice } from "@reduxjs/toolkit";

type TAuthState = {
    user: null | object,
    token: null | object,
}

const initialState: TAuthState = {
    user: null,
    token: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { user, token } = action.payload;

            state.user = user;
            state.token = token;
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
        }
    }

})

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;