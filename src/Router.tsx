import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<HomePage />} path="/" />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;