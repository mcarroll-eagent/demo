import {createSlice} from "@reduxjs/toolkit";

interface logState{
    value: boolean;
    username: string;
    jwt: string;
}

const initialState: logState = {
    value: false,
    username: '',
    jwt: '',
};

const logSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        LogInSuccess: (state, action) =>{
            state.value = true;
            state.username = action.payload;
        },

        setUserInfo: (state, action) => {
          state.jwt = action.payload.jwt;
        },

        LogOutSuccess: (state) =>{
            state.value = false;
            state.username = '';
            return state;
        }
    },
});

export const { LogInSuccess, LogOutSuccess, setUserInfo } = logSlice.actions;
export default logSlice.reducer;

