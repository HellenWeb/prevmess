import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Routes, Navigate, Route } from 'react-router-dom'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<About />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router