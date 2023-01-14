import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import queryString from 'query-string'
import { getHeroByName } from '../helpers/getHeroByName';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {
  const { searchHero, onChange} = useForm({
    searchHero: '', 
  });
  const navigate = useNavigate();
  const { search='' } = useLocation();
  const { q='' } = queryString.parse(search)
  const heroes = getHeroByName(q);
  const onInputSubmit = (value) => {
    value.preventDefault();
    // if(searchHero.trim().length <= 0) return
    navigate(`?q=${searchHero}`)
  }
  return (
    <>
      <div className='flex w-full h-screen lg:grid-cols-2 lg:gap-5 gap-3 grid-cols-1 text-white'>
        <div className='w-full'>
        <h1 className='text-white text-3xl font-bold pb-2'>Search hero</h1>
        <form onSubmit={onInputSubmit}>
          <input 
            type='text' 
            placeholder='Search'
            className='text-white py-2 px-2 w-100 border-gray-500 rounded-lg bg-neutral-800 text-1xl border-x border-y shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
            name='searchHero'
            value={searchHero}
            onChange={onChange}
            />
        <br />
        <br />
        <button className='w-full bg-gray-800 text-white py-2 px-4 rounded-lg font-bold'>Search</button>
        </form>
        </div>
        <div className='w-full'>
          <h1 className='text-white text-3xl font-bold pb-2'>Searching Hero</h1>
          {
            (q.length === 0) ?
            <div className='bg-blue-100 px-2 py-3 rounded-md font-bold border-2 border-blue-500 text-blue-500'>
              Search a Hero
            </div>
            :(heroes.length === 0) &&
            <div className='bg-red-300 px-2 py-3 rounded-md font-bold border-2 border-red-500 text-red-500 mb-1'>
              Hero not found with {q}
            </div>  
          }
          {
            heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>

    </>
  )
}
