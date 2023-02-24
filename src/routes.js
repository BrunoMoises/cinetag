import Inicio from './pages/Inicio'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favoritos from 'pages/Favoritos'
import Player from 'pages/Player'
import NaoEncontrada from 'pages/NaoEncontrada'
import PaginaBase from 'pages/PaginaBase'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaBase />}>
                    <Route index element={<Inicio />} />
                    <Route path='favoritos' element={<Favoritos />} />
                    <Route path='player/:id' element={<Player />} />
                    <Route path='*' element={<NaoEncontrada />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
