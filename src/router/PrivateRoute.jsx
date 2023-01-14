import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext';

export const PrivateRoute = ({children}) => {

  const { logged } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  localStorage.setItem('path', pathname + search);
  const { status } = useSelector(state => state.auth);

return (status !== 'not-authenticated')
// return (logged)
  ? children
  : <Navigate to='/login' />
}
