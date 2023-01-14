import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById'

export const HeroPage = () => {

  const { id } = useParams()
  const hero = getHeroById(id);
  const navigate = useNavigate();
  const onBack = () => {
    navigate(-1)
  }

  return (
    <>
      <div className='flex flex-wrap h-screen'>
        <img src={`/assets/heroes/${id}.jpg`} alt={hero.superhero} className='rounded-md px-2 py-2'/>
        <div className='px-2'>
          <p className='text-white text-xl'> <span className='font-bold'>Superhero: </span> {hero.superhero}</p>
          <p className='text-white text-xl'> <span className='font-bold'>Publisher: </span> {hero.publisher}</p>
          <p className='text-white text-xl'> <span className='font-bold'>Alter_ego: </span> {hero.alter_ego}</p>
          {
            (hero.alter_ego != hero.characters)&&(<p className='text-white text-xl'><span className='font-bold'>Characters: </span> {hero.characters}</p>)
          }
          <p className='text-gray-500 pb-4 text-xl'> <span className='font-bold text-white'> First Appearance:</span> {hero.first_appearance}</p>
          <button className='bg-gray-800 px-3 py-2 rounded-md' onClick={onBack}>Back</button>
        </div>
      </div>
    </>
  )
}
