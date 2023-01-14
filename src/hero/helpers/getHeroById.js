import React from 'react'
import { heroes } from '../data/heroes';

export const getHeroById = (id = '') => {

    if(id.length === 0){
        return;
    }

    return (heroes.find(hero => hero.id === id))
}
