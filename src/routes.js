import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Aside } from './components/Aside';

//Pages
import { Home } from './pages/Home';
import { MainTemplate } from './templates/Main';


export const Routes = () => {
    return (
        <Router>
            <Router>
                <MainTemplate>
                    <Switch>
                        <Route exact path='/' component={Home} />
                    </Switch>
                </MainTemplate>
            </Router>
        </Router>
    )
}   