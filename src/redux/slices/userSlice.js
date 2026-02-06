// this file will contain actions + reducers for user state management

import { createSlice } from '@reduxjs/toolkit';
// create initial slice 

const initialState = {
    currentUser: null,
};

// user slice

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    //    action
    LoginSuccessful : (state, action) => {
        // modify state
        state.currentUser = action.payload;
        // payload is the data that you pass when you call the action
    }
}})

// export the action

export const { LoginSuccessful } = userSlice.actions;

// export the reducer

export default userSlice.reducer;