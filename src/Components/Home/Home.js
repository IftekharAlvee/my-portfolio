import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from '../About/About';
import Landing from '../Landing/Landing';
import Navigation from './Navigation';
import Wave from './Wave';

const Home = () => {
    return (
        <Router>
            <Navigation></Navigation>
            <Switch>
                <Route exact path="/">
                    <Landing></Landing>
                </Route>
                <Route  path="/home">
                    <Landing></Landing>
                </Route>
                <Route  path="/about">
                    <About></About>
                </Route>
            </Switch>
            <Wave></Wave>
        </Router>
    );
};

export default Home;