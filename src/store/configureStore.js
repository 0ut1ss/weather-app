import {createStore, combineReducers} from 'redux';
import forecastReducer from '../reducers/forecast';


export default () => {
    // Store creation
 const store = createStore(
     combineReducers({
         forecast: forecastReducer
         }),
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     ); 
     return store;
 };
