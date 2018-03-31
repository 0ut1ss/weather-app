import React from 'react';
import DummyWeather from '../../DummyWeather.json';
import moment from 'moment';


export default class WeatherDisplayScreen extends React.Component {

    getMinMax = (tlist, addDay, forecasts) => {
        tlist.filter(item => item.dt_txt.includes(moment(day).add(addDay, 'days').format("YYYY-MM-DD")));
        const DayTemperatures = () => {
            let tmin = 0;
            let tmax;
            let minMaxArray = [];
            forecasts.forEach((forecast) => {
            forecast.main.temp > tmin ? tmin = forecast.main.temp : tmax = forecast.main.temp;
        })
            return minMaxArray = [tmin, tmax];
        };
        return DayTemperatures();
    };

    render () {
        return (
            <div>
                <h1>Weather Forecast</h1>
                <h3>{name} - {country}</h3>
                <h3>Forecasts</h3>
                <p>Min:{this.getMinMax(list, 0, toDay)[0]} Max:{this.getMinMax(list, 0, toDay)[1]}</p>
                <p>Min:{this.getMinMax(list, 1, secondDay)[0]} Max:{this.getMinMax(list, 1, secondDay)[1]}</p>
                <p>Min:{this.getMinMax(list, 2, thirdDay)[0]} Max:{this.getMinMax(list, 2, thirdDay)[1]}</p>
                <p>Min:{this.getMinMax(list, 3, fourthDay)[0]} Max:{this.getMinMax(list, 3, fourthDay)[1]}</p>
                <p>Min:{this.getMinMax(list, 4, fifthDay)[0]} Max:{this.getMinMax(list, 4, fifthDay)[1]}</p>
            </div>
        );
    }
}

const {name, country} = DummyWeather.city
const list = DummyWeather.list;

const day = new Date();
const toDay = list.filter(item => item.dt_txt.includes(moment(day).subtract(0, 'days').format("YYYY-MM-DD")));
const secondDay = list.filter(item => item.dt_txt.includes(moment(day).add(1, 'days').format("YYYY-MM-DD")));
const thirdDay = list.filter(item => item.dt_txt.includes(moment(day).add(2, 'days').format("YYYY-MM-DD")));
const fourthDay = list.filter(item => item.dt_txt.includes(moment(day).add(3, 'days').format("YYYY-MM-DD")));
const fifthDay = list.filter(item => item.dt_txt.includes(moment(day).add(4, 'days').format("YYYY-MM-DD")));





