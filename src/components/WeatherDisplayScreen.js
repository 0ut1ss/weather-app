import React from 'react';
import DummyWeather from '../../DummyWeather.json';
import moment from 'moment';


export default class WeatherDisplayScreen extends React.Component {

    getMinMax = (tlist, addDay, forecasts) => {
        tlist.filter(item => item.dt_txt.includes(moment(day).add(addDay, 'days').format("YYYY-MM-DD")));
        let min = forecasts[0].main.temp_min;
        let max = forecasts[0].main.temp_max;
        let minMaxArray = [];
        const DayTemperatures = () => {
        forecasts.forEach((forecast) => {
        forecast.main.temp_min < min ? min = forecast.main.temp_min : min
        forecast.main.temp_max > max ? max = forecast.main.temp_max : max
        })
        
        };
        return minMaxArray = [min, max];
    };

    render () {
        return (
            <div>
                <h1>Weather Forecast</h1>
                <h3>{name} - {country}</h3>
                <h3>{this.getMinMax(list, 1, secondDay)[0]}</h3>
            </div>
        );
    }
}

const {name, country} = DummyWeather.city
const list = DummyWeather.list;

const day = new Date();
const firstDay = list.filter(item => item.dt_txt.includes(moment(day).subtract(0, 'days').format("YYYY-MM-DD")));
const firstDayTemps = () => {
    let min = firstDay[0].main.temp_min;
    let max = firstDay[0].main.temp_max;
    let minMaxArray = []

    firstDay.forEach((forecast) => {
        forecast.main.temp_min < min ? min = forecast.main.temp_min : min
        forecast.main.temp_max > max ? max = forecast.main.temp_max : max
    })
    minMaxArray.push(min);
    minMaxArray.push(max);
    return minMaxArray;
};

const secondDay = list.filter(item => item.dt_txt.includes(moment(day).add(1, 'days').format("YYYY-MM-DD")));




