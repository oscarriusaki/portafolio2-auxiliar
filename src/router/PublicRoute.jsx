import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/context/AuthContext'
import { validarToken } from '../hero/helpers/validarToken';

export const PublicRoute = ({children}) => {

  const { logged } = useContext(AuthContext);
  const { status } = useSelector(status => status.auth);

return (status === 'not-authenticated')
// return (!logged)
  ? children
  : <Navigate to='/' />

}
