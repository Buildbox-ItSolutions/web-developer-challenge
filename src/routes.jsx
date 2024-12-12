import { Route, Routes, BrowserRouter } from 'react-router-dom'
import React from 'react'

import Header from './components/Header'
import Home from './Home'




export default function RoutesApp() {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}