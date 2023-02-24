import Inicio from './pages/Inicio'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Favoritos from 'pages/Favoritos'
import Cabecalho from 'components/Cabecalho'
import Rodape from 'components/Rodape'
import Container from 'components/Container'

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/favoritos' element={<Favoritos />} />
                </Routes>
            </Container>
            <Rodape />
        </BrowserRouter>
    )
}
