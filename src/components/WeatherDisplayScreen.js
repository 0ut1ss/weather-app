import React from 'react';
import DummyWeather from '../../DummyWeather.json';
import {connect} from 'react-redux';
import moment from 'moment';
import Loader from 'react-loader';


class WeatherDisplayScreen extends React.Component {
     
    day = new Date();

    state = {
        loaded: false
    }

    
    getDay = (tlist, dayNumber) => tlist.filter(item => item.dt_txt.includes(moment(this.day).add(dayNumber, 'days').format("YYYY-MM-DD")));

    getIcon = (forecasts) => {
        let icons = [];
        forecasts.forEach((forecast) => {
            icons.push(forecast.weather[0].icon)
        })
        switch(icons[0]) {
            case '04d':
            case '04n':
            return "images/sprite2.svg#icon-cloudy2"
            break;
            
            case '01d':
            case'01n':
            return "images/sprite2.svg#icon-sun"
            break;
            
            case '02d':
            case'02n':
            return "images/sprite2.svg#icon-cloudy"
            break;
            
            case '50d':
            case '50n':
            return "images/sprite2.svg#icon-lines"
            break;
            
            case '10d':
            case '10n':
            return "images/sprite2.svg#icon-rainy2"
            break;
            
            case '03d':
            case '03n':
            return "images/sprite2.svg#icon-cloud"
            break;
            
            case '09d':
            case '09n':
            return "images/sprite2.svg#icon-rainy"
            break;
            
            case '13d':
            case '13n':
            return "images/sprite2.svg#icon-snowy"
            break;
            
            case '11d':
            case '11n':
            return "images/sprite2.svg#icon-lightning"
            break; 
        }
        
    }

    

    getMinMax = (forecasts) => {
        const DayTemperatures = () => {
            let minMaxArray = [];
            forecasts.forEach((forecast) => {
            minMaxArray.push(forecast.main.temp);
        })
            return minMaxArray = [Math.round(Math.max(...minMaxArray)), Math.round(Math.min(...minMaxArray))];
        };
        return DayTemperatures();
    };

    componentDidMount = () => {
        setTimeout(() => {this.setState({loaded: true})}, 2000);
    }

    

    render () {

        const {name, country} = this.props.forecast[0].city;

        const list = this.props.forecast[0].list;

        const toDay = this.getDay(list, 0);
        const secondDay = this.getDay(list, 1);
        const thirdDay = this.getDay(list, 2);
        const fourthDay = this.getDay(list, 3);
        const fifthDay = this.getDay(list, 4);


        return (
            <Loader loaded = {this.state.loaded} className = "loader" color = "#6ffe90">

                        <div className = "weatherbox">
                                <h4 className="weatherbox__location">{name} - {country}</h4>
                                <div className = "forecastbox forecastbox-today">
                                    <h4 className = "highlightColor">Today</h4>
                                    <svg className="forecastbox-header__icon forecastbox-header__icon-large">
                                        <use xlinkHref={this.getIcon(toDay)}/>
                                    </svg>
                                    <div className="forecastbox__temperatures">
                                        <p className = "forecastbox__temperature"> {this.getMinMax(toDay)[0]}</p>
                                        <p className = "forecastbox__temperature forecastbox__temperature-opacity">{this.getMinMax(toDay)[1]}</p>
                                    </div>
                                </div>
                                    <hr className="weatherbox__divider"/>

                                    <div className = "forecastbox">
                                        <h4>{moment(this.day).add(1, 'days').format('dddd')}</h4>
                                        <svg className="forecastbox-header__icon">
                                            <use xlinkHref={this.getIcon(secondDay)}/>
                                        </svg>
                                        <div className="forecastbox__temperatures">
                                            <p className = "forecastbox__temperature">{this.getMinMax(secondDay)[0]}</p>
                                            <p className = "forecastbox__temperature forecastbox__temperature-opacity">{this.getMinMax(secondDay)[1]}</p>
                                        </div>
                                    </div>

                                    <hr className="weatherbox__divider"/>

                                    <div className = "forecastbox">
                                        <h4>{moment(this.day).add(2, 'days').format('dddd')}</h4>
                                        <svg className="forecastbox-header__icon">
                                            <use xlinkHref={this.getIcon(thirdDay)}/>
                                        </svg>
                                        <div className="forecastbox__temperatures">
                                            <p className = "forecastbox__temperature">{this.getMinMax(thirdDay)[0]}</p>
                                            <p className = "forecastbox__temperature forecastbox__temperature-opacity">{this.getMinMax(thirdDay)[1]}</p>
                                        </div>
                                    </div>

                                    <hr className="weatherbox__divider"/>

                                    <div className = "forecastbox">
                                        <h4>{moment(this.day).add(3, 'days').format('dddd')}</h4>
                                        <svg className="forecastbox-header__icon">
                                            <use xlinkHref={this.getIcon(fourthDay)}/>
                                        </svg>
                                        <div className="forecastbox__temperatures">
                                            <p className = "forecastbox__temperature">{this.getMinMax(fourthDay)[0]}</p>
                                            <p className = "forecastbox__temperature forecastbox__temperature-opacity">{this.getMinMax(fourthDay)[1]}</p>
                                        </div>
                                    </div>

                                    <hr className="weatherbox__divider"/>
                                    
                                    <div className = "forecastbox">
                                        <h4>{moment(this.day).add(4, 'days').format('dddd')}</h4>
                                        <svg className="forecastbox-header__icon">
                                            <use xlinkHref={this.getIcon(fifthDay)}/>
                                        </svg>
                                        <div className="forecastbox__temperatures">
                                            <p className = "forecastbox__temperature">{this.getMinMax(fifthDay)[0]}</p>
                                            <p className = "forecastbox__temperature forecastbox__temperature-opacity">{this.getMinMax(fifthDay)[1]}</p>
                                        </div>
                                    </div>
                            </div>
            </Loader>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      forecast: state.forecast
    };
  };

export default connect(mapStateToProps)(WeatherDisplayScreen);






