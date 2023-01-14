import { useReducer } from 'react';
import { types } from '../types/types';
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';

const init = () =>{
    const user = JSON.parse(localStorage.getItem('user'));
    return {
        logged:!!user,
        user: user,
    }
}
export const UserProvider = ({children}) => {

    const [state, dispatch] = useReducer(authReducer, {}, init);

    const login = (name = '', email = '', pas = '', token = '') => {
        const user = {
            id:1234,
            name:name,
            email:email,
            pas:pas,
            token: token,
        }
        localStorage.setItem('user',JSON.stringify(user))
        const action = {
            types: types.login,
            user:user,
        }
        dispatch(action)
    }
    const logout = () => {
        localStorage.removeItem('user')
        const action = {
            types: types.logout,
        }
        dispatch(action);
    }
    const register = (name = '', email = '', pas = '', token = '') => {
        const user = {
            name:name,
            email:email,
            pas:pas,
            token:token,
        }
        localStorage.setItem("user",JSON.stringify(user));
        const action = {
            types: types.register,
            user: user,
        }
        dispatch(action);
    }

  return (
    <AuthContext.Provider value = {{ 
        ...state,
        login,
        logout,
        register,
    }}>
        {children}
    </AuthContext.Provider>
  )
}
