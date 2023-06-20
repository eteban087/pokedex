import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Pokedex } from '../pages/Pokedex'
import { PokedexInfo } from '../pages/PokedexInfo'
import { ProtectectRoutes } from '../components/auth/ProtectectRoutes'
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route element={<ProtectectRoutes />} >
          <Route path='/pokedex' element={<Pokedex />} ></Route>
          <Route path='/pokedex/:id' element={<PokedexInfo />} ></Route>
        </Route>
      </Routes>
    </>
  )
}
