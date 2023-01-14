import React from 'react'
import { heroes } from '../data/heroes';

export const getHeroByName = (nombre = '') => {

    nombre = nombre.toUpperCase();
    if(nombre.length === 0) return [];

    return (heroes.filter(hero => hero.superhero.toUpperCase().includes( nombre) ))
}
