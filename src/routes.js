import React from 'react';
import {
    BrowserRouter,
    Routes,
    Switch,
    Route,
} from "react-router-dom";
import { Aside } from './components/Aside';

//Pages
import { Home } from './pages/Home';
import { MainTemplate } from './templates/Main';


export const RoutesApp = () => {
    return (
        <BrowserRouter>
            <MainTemplate>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </MainTemplate>
        </BrowserRouter>
    )
}   