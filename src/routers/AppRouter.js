import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import SearchScreen from '../components/SearchScreen';
import WeatherDisplayScreen from '../components/WeatherDisplayScreen';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
            <Route path = "/" component = {SearchScreen} exact = {true}/>
            <Route path = "/forecast" component = {WeatherDisplayScreen}/>
            <Route component = {NotFoundPage}/>
        </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;