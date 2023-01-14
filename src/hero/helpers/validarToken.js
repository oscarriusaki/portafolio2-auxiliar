import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { tokenVerificado } from '../../store/auth';

export const validarToken = () => {

    const [tokenValidado, setTokenValidado] = useState(false)
    const dispatch = useDispatch();
    
    const verifica = async() =>{
        const token = localStorage.getItem('token') || '';
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
            setTokenValidado(false);
          }else{
            dispatch(tokenVerificado(data));
            setTokenValidado(true);
          }
      }
      useEffect( () => {
        verifica();
        
        console.log(tokenValidado)
      }, [])

  return {
    tokenValidado
  }
}
