import {createStore} from 'redux';
import forecastReducer from '../reducers/forecast';

export default () =>  createStore(forecastReducer);
