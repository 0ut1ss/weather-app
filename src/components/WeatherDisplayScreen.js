import React from 'react';
import DummyWeather from '../../DummyWeather.json';
import {connect} from 'react-redux';
import moment from 'moment';


class WeatherDisplayScreen extends React.Component {
     
    day = new Date();

    
    getDay = (tlist, dayNumber) => tlist.filter(item => item.dt_txt.includes(moment(this.day).add(dayNumber, 'days').format("YYYY-MM-DD")));

    getIcon = (forecasts) => {
        let icons = [];
        forecasts.forEach((forecast) => {
            icons.push(forecast.weather[0].icon)
        })
        return icons[2];
    }

    

    getMinMax = (forecasts) => {
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

        const {name, country} = this.props.forecast[0].city;

        const list = this.props.forecast[0].list;

        const toDay = this.getDay(list, 0);
        const secondDay = this.getDay(list, 1);
        const thirdDay = this.getDay(list, 2);
        const fourthDay = this.getDay(list, 3);
        const fifthDay = this.getDay(list, 4);


        return (
            <div>
                <h1>Weather Forecast</h1>
                <h3>{name} - {country}</h3>
                <h3>Forecasts</h3>
                
                <h4>{moment(this.day).format('dddd')}</h4>
                <img src={`http://openweathermap.org/img/w/${this.getIcon(toDay)}.png`}/>
                <p>Min:{this.getMinMax(toDay)[0]} Max:{this.getMinMax(toDay)[1]}</p>
                <h4>{moment(this.day).add(1, 'days').format('dddd')}</h4>
                <img src={`http://openweathermap.org/img/w/${this.getIcon(secondDay)}.png`}/>
                <p>Min:{this.getMinMax(secondDay)[0]} Max:{this.getMinMax(secondDay)[1]}</p>
                <h4>{moment(this.day).add(2, 'days').format('dddd')}</h4>
                <img src={`http://openweathermap.org/img/w/${this.getIcon(thirdDay)}.png`}/>
                <p>Min:{this.getMinMax(thirdDay)[0]} Max:{this.getMinMax(thirdDay)[1]}</p>
                <h4>{moment(this.day).add(3, 'days').format('dddd')}</h4>
                <img src={`http://openweathermap.org/img/w/${this.getIcon(fourthDay)}.png`}/>
                <p>Min:{this.getMinMax(fourthDay)[0]} Max:{this.getMinMax(fourthDay)[1]}</p>
                <h4>{moment(this.day).add(4, 'days').format('dddd')}</h4>
                <img src={`http://openweathermap.org/img/w/${this.getIcon(fifthDay)}.png`}/>
                <p>Min:{this.getMinMax(fifthDay)[0]} Max:{this.getMinMax(fifthDay)[1]}</p>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      forecast: state.forecast
    };
  };

export default connect(mapStateToProps)(WeatherDisplayScreen);






