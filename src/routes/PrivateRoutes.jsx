
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PublicNavBar } from '../components/PublicNavBar'
import { Home } from '../pages/Home'
import { MENUBAR, SUBMENU } from '../db/globals';


export const PrivateRoutes = () => {
    return (
        <>
        <PublicNavBar />
            <Routes>
                <Route
                    path={'/'}
                    element={<Home />}
                />
            </Routes>
        </>
    )
}
