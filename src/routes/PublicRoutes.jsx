import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PublicNavBar } from '../components/PublicNavBar'
import { Login } from '../pages/Login'
import { Register } from '../pages/Register'
import { Welcome } from '../pages/Welcome'

export const PublicRoutes = () => {
    return (
        <>
            <PublicNavBar />
            <Routes>
                <Route
                    path={'/'}
                    element={<Welcome />}
                />
                <Route
                    path={'/login'}
                    element={<Login />}
                />
                <Route
                    path={'/register'}
                    element={<Register />}
                />
            </Routes>
        </>
    )
}
