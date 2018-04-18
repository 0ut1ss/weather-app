import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import SearchScreen from '../components/SearchScreen';
import WeatherDisplayScreen from '../components/WeatherDisplayScreen';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Credits from '../components/Credits';
import Contact from '../components/Contact';
import About from '../components/About';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
            <Route path = "/" component = {SearchScreen} exact = {true}/>
            <Route path = "/forecast" component = {WeatherDisplayScreen}/>
            <Route path = "/credits" component = {Credits}/>
            <Route path = "/contact" component = {Contact}/>
            <Route path = "/about" component = {About}/>
            <Route component = {NotFoundPage}/>
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;