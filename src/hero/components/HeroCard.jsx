import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
}) => {

    const url = `/assets/heroes/${id}.jpg`;

    return (
        <>
            <div className='flex flex-wrap rounded-md bg-neutral-800 m-1 '>
                <div className='rounded-md pl-2 py-2 w-1/2 shadow-md' >
                    <img src={url} alt={superhero} className='rounded-lg' />
                </div>
                <div className='rounded-md py-2 px-3 w-1/2'>
                    <p className='font-bold text-white'>{superhero}</p>
                    <p className='text-white'>{publisher}</p>
                    <p className='text-white'>{alter_ego}</p>
                    {
                        (alter_ego != characters) && (<p className='text-white'>{characters}</p>)
                    }
                    <p className='text-gray-500'>{first_appearance}</p>
                    <Link className='text-blue-800' to={`/hero/${id}`}>Mas...</Link>
                </div>
            </div>
        </>
    )
}
