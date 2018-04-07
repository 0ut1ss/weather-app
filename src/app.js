import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {forecast} from './actions/forecast';
import SearchScreen from './components/SearchScreen';
import WeatherDisplayScreen from './components/WeatherDisplayScreen';
import DummyWeather from '../DummyWeather';


const store = configureStore();

const state = store.getState();

store.dispatch(forecast(DummyWeather));


const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx , document.getElementById('app'));
