import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import SearchScreen from './components/SearchScreen';
import WeatherDisplayScreen from './components/WeatherDisplayScreen';

ReactDOM.render(<WeatherDisplayScreen />, document.getElementById('app'));
