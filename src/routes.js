import Inicio from './pages/Inicio'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favoritos from 'pages/Favoritos'
import Cabecalho from 'components/Cabecalho'
import Rodape from 'components/Rodape'
import Container from 'components/Container'
import FavoritosProvider from 'contextos/Favoritos'
import Player from 'pages/Player'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider>
                    <Routes>
                        <Route path='/' element={<Inicio />} />
                        <Route path='/favoritos' element={<Favoritos />} />
                        <Route path='/player/:id' element={<Player />} />
                    </Routes>
                </FavoritosProvider>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}
