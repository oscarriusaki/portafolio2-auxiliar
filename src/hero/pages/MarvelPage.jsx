import React from 'react'
import { HeroList } from '../components/HeroList'

export const MarvelPage = () => {
  
  return (
    <>
        <h1 className='text-3xl text-white  '>Marvel Page</h1>
        {/* <hr /> */}
        <HeroList publisher={'Marvel Comics'} />
        
    </>
  )
}
