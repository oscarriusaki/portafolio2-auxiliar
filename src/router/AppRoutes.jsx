import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from '../auth/context/UserProvider';
import { LoginPage, RegisterPage } from '../auth/pages';
import { HeroRoute } from '../hero/routes/HeroRoute';
import { logoutUser, tokenVerificado } from '../store/auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRoutes = () => {

  useEffect(() => {
    verifica()
  }, []);

  const { status } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  if(status === 'checking'){
    return (<p>Loading...</p>)
  }

  const verifica = async() =>{
    const token = localStorage.getItem('token') || '';
    if(token.trim().length != 0){
      const url = 'http://localhost:8080/login/validar';
      const method = 'GET';
      const headers = {
        "Context-type":"application/json",
        "x-token":token
      }
      const resp = await fetch(url,{
        method: method,
        headers: headers,
      })
      const data = await resp.json()
      if(data.msg === 'token invalid o expired'){ 
        dispatch(logoutUser())
      }else{
        dispatch(tokenVerificado(data));
      }
    }
  }

  return (
    <UserProvider>
      {
        (status !== 'checking') ?
        <Routes >
            <Route path='/login' element={
              <PublicRoute >
                  <LoginPage/>
                </PublicRoute>
              }/>
            <Route path='/registerPage' element={
              <PublicRoute>
                  <RegisterPage/>
                </PublicRoute>
              }/>

            <Route 
              path='/*' element={
                <PrivateRoute >
                  <HeroRoute />
                </PrivateRoute>
               }
               />
            {/* <Route path='/*' element={<HeroRoute /> } /> */}
        </Routes>
        :
        <>
        sdfsdf
        </>
  }
    </UserProvider> 
  )
}

 
/*   (status === 'not-authenticated') ? (
    <>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/*' element={<Navigate to='/login' />} />
    </>
  )
  :(
    <>
      <Route path='/' element={<HeroRoute />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </>
  )
 
 */