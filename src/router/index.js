import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements, Route, Navigate
} from "react-router-dom";
import {AuthPage} from "../pages/AuthPage/AuthPage";

export const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route path="/" element={<AuthPage/>}>
                <Route path='/' element={<Navigate to="/login"/>}/>
                <Route path="/login" element={<AuthPage/>}/>
            </Route>
        </>
    ))
;
