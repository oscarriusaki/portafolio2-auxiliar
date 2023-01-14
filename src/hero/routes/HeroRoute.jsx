import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { DcPage, HeroPage, MarvelPage, RegisterHero, SearchPage } from '../pages'

export const HeroRoute = () => {
  return (
    <>  
      <Navbar />
      <Routes>
          <Route path='/' element={<MarvelPage /> } />
          <Route path='/dc' element={<DcPage /> } />
          <Route path='/hero/:id' element={<HeroPage /> } />
          <Route path='/search' element={<SearchPage /> } />
          <Route path='/registerHero' element={<RegisterHero /> } />
      </Routes>
    </>
  )
}
