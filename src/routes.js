import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

//Pages
import { Home } from './pages/Home';

//Components
import { Header } from './components/Header';

export const Routes = () => {
    return (
        <Router>
            <Header />
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </Router>
        </Router>
    )
}