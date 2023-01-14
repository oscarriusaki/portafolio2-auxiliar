import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';
import { AuthContext } from '../context/AuthContext';

export const RegisterPage = () => {

  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [msg, setMsg] = useState({
    message: '',
    valor: false,
  })
  const [v, setV] = useState({
    v1: false,
    v2: false,
    v3: false,
    verificado:false
  })  
  const { name, email, password, onChange } = useForm({
    name:'',
    email: '',
    password: '',
  });
  const onRegister =() => {
    dispatch(startCreatingUserWithEmailPassword({name, email, password}))
    navigate('/',{
      replace:true
    });
  }
  const onInputSubmit = async (value) =>{
    value.preventDefault();
    if(name.trim().length === 0 && email.trim().length === 0 && password.trim().length === 0){
      setV({
        ...v,
        v1:true,
        v2:true,
        v3:true,
        verificado: true
      })
      return ;
    }else{
      if (name.trim().length === 0){
        if(email.trim().length === 0){
          setV({
            ...v,
            v1 : true,
            v2 : true,
            verificado: true
          })
        }else{
          if(password.trim().length === 0){
            setV({
              ...v,
              v1 : true,
              v3 : true,
              verificado: true
            })
          }else{
            setV({
              ...v,
              v1 : true,
              verificado: true
            })
          }
        }
      }else{
        if(email.trim().length === 0){
          if(password.trim().length === 0){
            setV({
              ...v,
              v2: true,
              v3: true,
              verificado: true
            }) 
          }else{
            setV({
              ...v,
              v2: true,
              verificado: true
            });
          }
        }
      }
    }
    if(v.verificado){
      return
    }
    onRegister()
    
    // const url = 'http://localhost:8080/user';
    // const headers = {'Content-Type': 'application/json'}
    // const formData = new FormData();
    // const method = 'POST';
    // formData.append('first_name', name);
    // formData.append('email', email);
    // formData.append('pas', password);
    // const resp = await fetch(url, {
    //   method: method,
    //   headers: headers,
    //   body: JSON.stringify({
    //     first_name: name,
    //     email: email,
    //     pas: password,
    //   })
    // });

    // const data = await resp.json();
    // if(data.msg === 'successfully registered' && data.token){
    //   onRegister();
    // }else{
    //   setMsg({
    //     ...msg,
    //     message: data.msg
    //   });
    // }
  }

  useEffect(() => {
    setMsg({
      ...msg,
      message:''
    })
    setV({
      ...v,
      v1: false,
      verificado: false,
    })
     
  }, [name]);
  useEffect(() => {
    setMsg({
      ...msg,
      message:''
    })
       setV({
      ...v,
      v2: false,
      verificado: false,
    })
     
  }, [email]);
  useEffect(() => {
    setMsg({
      ...msg,
      message:''
    })
       setV({
      ...v,
      v3: false,
      verificado: false,
    })
     
  }, [password]);
  
  return (
    <>
      <div className='flex flex-wrap justify-center w-full align-items-center h-screen'>
        <dir className='align-items-center justify-center w-50 border-x border-y px-5 py-3 border-neutral-700 rounded-md'>
          <h1 className='text-5xl font-bold mb-3 text-white align-middle justify-center py-2 text-center'>Register User</h1>
          <div className='w-full'>
            <form onSubmit={onInputSubmit}>
            <input 
              type="text" 
              placeholder='Name'
              className={`bg-neutral-800 rounded-md mb-2 border-x border-y border-neutral-700 w-full h-12 px-2 text-xl pb-1 focus:outline-none focus:border-sky-500 text-neutral-200 placeholder:text-neutral-500 ${v.v1 && 'border-red-500'}`}
              name='name'
              value={name}
              onChange={onChange}
              />
            <input 
              type="email" 
              placeholder='Email'
              className={`mb-2 w-full bg-neutral-800 h-12 px-2 text-xl pb-1 border-x border-y border-neutral-700 rounded-md focus:outline-none focus:border-sky-500 text-neutral-200 placeholder:text-neutral-500 ${v.v2 && 'border-red-500'}`}
              name='email'
              value={email}
              onChange={onChange}
              />
            <input 
              type="password" 
              placeholder='password'
              className={`mb-2 w-full h-12 text-xl bg-neutral-800 px-2 pb-1 border-x border-y border-neutral-700 rounded-md focus:outline-none focus:border-sky-500 text-neutral-200 placeholder:text-neutral-500 ${v.v3 && 'border-red-500'}`}
              name='password'
              value={password}
              onChange={onChange}
              autoComplete='off'
              />
              <button type='submit' className='bg-gray-900 text-white font-bold text-xl hover:bg-gray-800 px-3 py-2 rounded-md w-full' >Register</button>
            </form>
            <div className='flex align-middle text-center jusitfy-center w-full'>
              <span className='text-white w-full'>You have an account/<Link to='/login' className='text-blue-500'>login</Link></span>
            </div>
            <br />
            <div className='flex align-middle text-center justify-center h-1 text-red-500 w-full items-center justify-center'>
              {
                (msg.message.length !== 0) && 
                <span>{msg.message}</span>
              }
            </div>
          </div>
        </dir>
      </div>
    </>
  )
}
