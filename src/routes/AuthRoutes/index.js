import React from 'react';
import { Route, Routes, Navigate } from "react-router";
import Login from '../../pages/Login';


function AuthRoute({setUser}) {

    return (
        <>
            <Routes>
                <Route path='/' element={<Login setUser={setUser}/>} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}

export default AuthRoute
