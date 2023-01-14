import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startLoginWitEmailPassword } from '../../store/auth';
import { AuthContext } from '../context/AuthContext';
import { useMemo } from 'react'

export const LoginPage = () => {
  
  const navigate = useNavigate();
  const [error, setError] = useState('')
  const [sw, setSw] = useState({
    valor: false
  })
  const { valor } = sw;
  const { login } = useContext(AuthContext);
  const dispatch = useDispatch()
  const { status, token, errorMessage } = useSelector(state => state.auth)
  const isAuthenticating = useMemo(() => status === 'checking', [status])
  useEffect(() => {
    if(token){
      onLogin()
    }else{
      setError(errorMessage)
    }
  }, [status])
  
  const { email, password, onChange } = useForm({
    email: '',
    password: ''  
  })
  const onLogin = () => {
    login('234234','23423','23423','2343')
    const path = localStorage.getItem('path') || '/' ;
    navigate( path ,{
      replace:true
    })
  }
  const onInputChange = async (value) => { 
    value.preventDefault();
    if(email.trim().length <= 1 && password.trim().length <= 1){
      setError('neet write the date')
    }
    if(email.trim().length <= 1 || password.trim().length <= 1) {
      setSw({
        ...sw,
        valor: true
      })
      return
    }
    dispatch(startLoginWitEmailPassword({email, password}))
    
  }
  useEffect(() => {
     setError('')
     setSw({
      ...sw,
      valor: false,
     })
  }, [email])
  useEffect(() => {
    setError('')
    setSw({
      ...sw,
      valor: false,
    })
  }, [password])
  
  return (
    <>
      <div className='flex flex-wrap justify-center w-full align-items-center h-screen '>
        <div className=' align-items-center justify-center w-50 border-x border-y px-5 py-4 border-neutral-700'>
            <h1 className='mx-auto w-full text-5xl font-bold decoration-solid text-shadow-2xl py-2 text-white mb-3 text-center align-middle jusitfy-center'>Login User</h1>
            <form onSubmit={ onInputChange }>
              <input 
                type="email" 
                placeholder='Email'
                className={`w-full bg-neutral-800 rounded-md h-12 pl-2 pb-1 mb-2 text-xl border-x border-y shadow-lg focus:outline-none focus:border-sky-500 text-neutral-200 placeholder:text-neutral-500 ${valor ? 'border-red-700': 'border-neutral-700 '}`}
                name='email'
                value={email}
                onChange={onChange} 
                />
              <input 
                type="password"
                placeholder='password'
                className={`w-full bg-neutral-800 rounded-md h-12 pl-2 pb-1 mb-2 text-xl border-x border-y focus:outline-none   focus:border-sky-500 text-neutral-200 placeholder:text-neutral-500 ${valor ? 'border-red-700': 'border-neutral-700 '}`}
                name='password'
                value={password}
                autoComplete='off'
                onChange={onChange}
                />
            <button type='submit' disabled ={ isAuthenticating } className='text-white bg-gray-900 rounded-md py-2 px-3 font-bold w-full text-xl hover:bg-gray-800 mb-2'>Login</button>
            <div className=' text-white align-middle justify-center text-center'>
              <span className='py-2 w-full align-items-center jusitfy-center' >You don't have account?/<Link className='text-blue-500' to='/register' >register</Link> </span>
            </div>
            <div className='h-1 text-red-500 w-full flex align-middle justify-center text-center'>
              {
                (error) && (<span>{error}</span>)
              }
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
