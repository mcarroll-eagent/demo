import {createSlice} from "@reduxjs/toolkit";

interface logState{
    value: boolean;
    username: string;
}

const initialState: logState = {
    value: false,
    username: '',
};

const logSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        LogInSuccess: (state, action) =>{
            state.value = true;
            state.username = action.payload;
        },

        LogOutSuccess: (state) =>{
            state.value = false;
            state.username = '';
            return state;
        }
    },
});

export const { LogInSuccess, LogOutSuccess } = logSlice.actions;
export default logSlice.reducer;

