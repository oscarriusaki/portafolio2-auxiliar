import React from 'react';
import { getHeroByPublisher } from '../helpers/getHeroByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {
  const heroes = getHeroByPublisher(publisher)

  return (
    <div className='w-full rounded-md 
                    sm:grid sm:grid-cols-2 sm:gap-2 sm:py-2   
                    md:grid md:grid-cols-3 md:gap-2 md:py-3 
                    lg:grid lg:grid-cols-4 lg:gap-2 lg:py-4 
                    transition-opacity duration-500 opacity-100
                    '>
        {            
          heroes.map(hero => (
              <HeroCard key={hero.id} {...hero} >{hero.superhero}</HeroCard>
          ))
        }
    </div>
  )
}
