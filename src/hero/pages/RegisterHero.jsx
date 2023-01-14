import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../auth/context/AuthContext';
import { useForm } from '../../hooks/useForm';

export const RegisterHero = () => {
  
  const { user } = useContext(AuthContext);
  const firstRef = useRef();
  const { state } = useSelector(state => state.auth)
  const isCheckingAuthentication = useMemo(() => status === 'checking', [state])

  const { onResetForm, id, superhero, publisher, alter_ego, first_appearance, characters, onChange, img } = useForm({
    id:'',
    superhero:'',
    publisher:'',
    alter_ego:'',
    first_appearance:'',
    characters:'',
    img:'',
  }); 
  const [value, setValue] = useState({
    v1: false,
    v2: false,
    v3: false,
    v4: false,
    v5: false,
    v6: false,
    v7: false,
  });
  const onInputSubmit = async (val) => {
    val.preventDefault();
    setValue({
      ...value,
      v1:(id.trim().length === 0),
      v2:(superhero.trim().length === 0),
      v3:(publisher.trim().length === 0),
      v4:(alter_ego.trim().length === 0),
      v5:(first_appearance.trim().length === 0),
      v6:(characters.trim().length === 0),
      v7:(img.trim().length === 0),
    })
    
    if(id.trim().length === 0||
      superhero.trim().length === 0||
      publisher.trim().length === 0||
      alter_ego.trim().length === 0||
      first_appearance.trim().length === 0||
      characters.trim().length === 0||
      firstRef.current.files.length === 0
      ){
        return
      }

    const url = 'http://localhost:8080/hero';
    const method = 'POST';
    const formData = new FormData();
    formData.append('idd', id)
    formData.append('superhero', superhero)
    formData.append('publisher', publisher)
    formData.append('alter_ego', alter_ego)
    formData.append('first_appearance', first_appearance)
    formData.append('characterss', characters)
    formData.append('img', firstRef.current.files[0])
    const headers = {
      "x-token":user.token,
    }
    const resp = await fetch(url, {
      method:method,
      headers: headers,
      body: formData,
    });
    const data = await resp.json();
    console.log(data)
    if(data.msg === 'successfully registered'){
      onResetForm();
    } 
  }

  useEffect(() => {
    setValue({
      ...value,
      v1: false,
    })
  }, [id]);
  useEffect(() => {
    setValue({
      ...value,
      v2: false,
    })
  }, [superhero]);
  useEffect(() => {
    setValue({
      ...value,
      v3: false,
    })
  }, [ publisher]);
  useEffect(() => {
    setValue({
      ...value,
      v4: false,
    })
  }, [alter_ego]);
  useEffect(() => {
    setValue({
      ...value,
      v5: false,
    })
  }, [ first_appearance]);
  useEffect(() => {
    setValue({
      ...value,
      v6: false,
    })
  }, [characters]);
  useEffect(() => {
    setValue({
      ...value,
      v7: false,
    })
  }, [img]);

  return (
    <> 
      <div className='flex flex-wrap grid-cols-1 w-full h-screen text-center justify-center '>
        <div className='w-50 border-neutral-200 border-0 px-5'>
          <div className='w-full'>
            <h1 className='text-3xl font-semibold text-white py-4'>Register Hero</h1>
          </div>
          <div className='w-full'>
            <form onSubmit={onInputSubmit}>
              <input 
                type="text" 
                placeholder='id'
                className={`${value.v1 && 'border-x border-y border-red-500'} border-x border-y border-neutral-700 placeholder:text-neutral-600 text-neutral-200 bg-neutral-900 w-full h-12 placeholder: text-xl px-2 focus:outline-none rounded-md focus:border-y focus:border-x focus:border-sky-500 my-1`}
                name='id'
                value={id}
                onChange={onChange}
                />
              <input 
                type="text" 
                placeholder='superhero'
                className={`${value.v2 && 'border-x border-y border-red-500'} border-x border-y border-neutral-700 placeholder:text-neutral-600 text-neutral-200 bg-neutral-900  w-full h-12 placeholder: text-xl px-2 focus:outline-none rounded-md focus:border-y focus:border-x focus:border-sky-500 my-1`}
                name='superhero'
                value={superhero}
                onChange={onChange}
                />
              <input 
                type="text" 
                placeholder='publisher'
                className={`${value.v3 && 'border-x border-y border-red-500'} border-x border-y border-neutral-700 placeholder:text-neutral-600 text-neutral-200 bg-neutral-900  w-full h-12 placeholder: text-xl px-2 focus:outline-none rounded-md focus:border-y focus:border-x focus:border-sky-500 my-1`}
                name='publisher'
                value={publisher}
                onChange={onChange}
                />
              <input 
                type="text" 
                placeholder='alter_ego'
                className={`${value.v4 && 'border-x border-y border-red-500'} border-x border-y border-neutral-700 placeholder:text-neutral-600 text-neutral-200 bg-neutral-900  w-full h-12 placeholder: text-xl px-2 focus:outline-none rounded-md focus:border-y focus:border-x focus:border-sky-500 my-1`}
                name='alter_ego'
                value={alter_ego}
                onChange={onChange}
                />
              <input 
                type="text" 
                placeholder='first_appearance'
                className={`${value.v5 && 'border-x border-y border-red-500'} border-x border-y border-neutral-700 placeholder:text-neutral-600 text-neutral-200 bg-neutral-900  w-full h-12 placeholder: text-xl px-2 focus:outline-none rounded-md focus:border-y focus:border-x focus:border-sky-500 my-1`}
                name='first_appearance'
                value={first_appearance}
                onChange={onChange}
                />
      
              <input 
                type="text" 
                placeholder='characters'
                className={`${value.v6 && 'border-x border-y border-red-500'} border-x border-y border-neutral-700 placeholder:text-neutral-600 text-neutral-200 text-xl bg-neutral-900 w-full h-12 placeholder:text-md px-2 focus:outline-none rounded-md focus:border-y focus:border-x focus:border-sky-500 my-1`}
                name='characters'
                value={characters}
                onChange={onChange}
                />
                
                <input type="file" accept='image/*' className={`
                    block w-full h-12 text-sm text-slate-500 cursor-pointer
                    file:mr-4 file:pt-2 file:pb-3 file:px-4 
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-neutral-800 file:text-violet-700
                    file:h-12 file:cursor-pointer rounded-md
                    hover:file:bg-neutral-900 file:${value.v7 ? 'border-2 border-2 border-red-500' : 'border-2 border-2 border-violet-700'}
                    focus:outline-none focus:border-2 focus:border-2 focus:border-blue-900                  
                  `}
                  ref={firstRef}
                  name = 'img'
                  value={img}
                
                  onChange={onChange}
                  />
              <button disabled = {isCheckingAuthentication} className='focus:outline-none focus: border-x focus:border-y focus:border-neutral-700 w-full h-12 border-x border-y border-blue-200 bg-blue-500 rounded-md hover:bg-blue-600 my-3 text-white font-bold text-xl'>Register</button>
            </form>
          </div>
        </div>
      </div>
      
    </>
  )
}
/* 
        <label class="block">
    <span class="sr-only">Choose profile photo</span>
    <input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
  </label>
*/