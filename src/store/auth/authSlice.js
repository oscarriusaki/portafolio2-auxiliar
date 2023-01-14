import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', //not-authenticated , autehnticated
        uid : null,
        email : null,
        first_name : null,
        fecha : null,
        token : null,
        photoURL : null,
        errorMessage: null,
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated';
            state.uid = payload.id_user;
            state.email = payload.email;
            state.first_name = payload.first_name;
            state.fecha = payload.fecha;
            state.token = payload.tokens;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout:(state, {payload}) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.first_name = null;
            state.fecha = null;
            state.token = null;
            state.photoURL = null;
            state.errorMessage = payload.msg;
        },
        checkingCredential: (state) => {
            state.status = 'checking'
        }
    }
});
// Action creators are generated for each case reducer function
export const { login, logout, checkingCredential } = authSlice.actions;