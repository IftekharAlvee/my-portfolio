import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Landing from '../Landing/Landing';
import Portfolio from '../Portfolio/Portfolio';
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
                <Route  path="/portfolio">
                    <Portfolio></Portfolio>
                </Route>
                <Route  path="/blogs">
                    <Blogs></Blogs>
                </Route>
                <Route  path="/contacts">
                    <Contact></Contact>
                </Route>
            </Switch>
            <Wave></Wave>
        </Router>
    );
};

export default Home;