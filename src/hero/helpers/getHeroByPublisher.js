import React from 'react';
import { heroes } from '../data/heroes';

export const getHeroByPublisher = (publisher = '') => {
  
    if(publisher.length === 0) return [];
    const p = ['DC Comics', 'Marvel Comics'];

    if(!p.includes(publisher))
        throw new Error(`pubisher only with ${p}`);
    return (heroes.filter(hero => hero.publisher === publisher))

}
