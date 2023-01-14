import React from 'react'
import { HeroList } from '../components/HeroList'

export const DcPage = () => {

  return (
    <>
      <div className='text-3xl text-white'>Dc Page</div>
      <hr />
      <HeroList publisher={'DC Comics'} />
    </>
  )
}