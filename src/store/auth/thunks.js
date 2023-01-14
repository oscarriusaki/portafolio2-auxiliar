import { checkingCredential, login, logout } from "./authSlice"

export const checkingAuthentication = () => {
    return async( dispatch ) => {
        dispatch(checkingCredential())
    }
}

export const startGoogleSignIn = () => {
    return async ( dispatch ) => {
        dispatch(checkingCredential())
    }
}

export const startCreatingUserWithEmailPassword = ({name, email, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredential());

        const url = 'http://localhost:8080/user';
        const headers = {'Content-Type': 'application/json'}
        const formData = new FormData();
        const method = 'POST';
        formData.append('first_name', name);
        formData.append('email', email);
        formData.append('pas', password);
        const resp = await fetch(url, {
        method: method,
        headers: headers,
            body: JSON.stringify({
                first_name: name,
                email: email,
                pas: password,
            })
        });

        const data = await resp.json();
        console.log(data);
        const u = {
            id_user: data.user.id_user,
            email: data.user.email,
            first_name: data.user.first_name,
            fecha: data.user.fecha,
            tokens: data.token
        }
        if(data.msg === 'successfully registered' && data.token){
            localStorage.setItem("token", data.token)
            dispatch(login(u))
        }else{
            setMsg({
                ...msg,
                message: data.msg
            });
        }

        
    }
}

export const startLoginWitEmailPassword = ({email, password}) => {
    return async (dispatch) => {
        dispatch(checkingCredential());
        
        const url = 'http://localhost:8080/login'
        const headers = {"Context-Type":"application/json"}
        const formData = new FormData();
        formData.append('email', email);
        formData.append('pas', password);
        const method = 'POST';
        const resp = await fetch(url, {
        method:method,
        headers:headers,
        body: formData,
        });
        const data = await resp.json()
        console.log(email)
        console.log(password)
        console.log(data)
        if(data.msg === 'logged successfully' && data.token ){
            localStorage.setItem('token', data.token)
            dispatch(login(data.user))
        }else{
            dispatch(logout(data))
        }
    }
}

export const tokenVerificado = ({first_name, email, token, fecha, id_user}) => {
    return async (dispatch) => {
        const user = {
            id_user: id_user,
            email: email,
            first_name: first_name,
            fecha: fecha,
            tokens: token,
        }
        dispatch(login(user));
    }
}
export const logoutUser = () => {
    return (dispatch) => {
        localStorage.removeItem('token')
        dispatch(logout())
    }
}