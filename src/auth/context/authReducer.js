import { types } from "../types/types";

export const authReducer = (state = {} , action) => {
    switch (action.types) {
        case types.login:
            return {
                ...state,
                logged: true,
                user: action.user,
            }
        case types.logout: 
            return {
                logged: false,
            }
        case types.register:
            return {
                ...state,
                logged: true,
                user: action.user
            }
    
        default:
            return state; 
    }
}