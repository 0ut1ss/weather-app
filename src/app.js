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

const store = configureStore();
store.dispatch(forecast({lat:30, long:60}));
const state = store.getState();



console.log(state);
const jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx , document.getElementById('app'));
