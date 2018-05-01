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

    getIcon = (forecasts, isToday) => {
        let icons = [];
        forecasts.forEach((forecast) => {
            icons.push(forecast.weather[0].icon)
        })
        switch(icons[0]) {
            case '04d':
            case '04n':
            return isToday ? '/images/weather_icons/lg/broken_clouds_lg.png' : '/images/weather_icons/sm/broken_clouds_sm.png'
            break;
            
            case '01d':
            case'01n':
            return isToday ? '/images/weather_icons/lg/clear_sky_lg.png' 
            : '/images/weather_icons/sm/clear_sky_sm.png'
            break;
            
            case '02d':
            case'02n':
            return isToday ? '/images/weather_icons/lg/few_clouds_lg.png' : '/images/weather_icons/sm/few_clouds_sm.png'
            break;
            
            case '50d':
            case '50n':
            return isToday ? '/images/weather_icons/lg/mist_lg.png' 
            : '/images/weather_icons/sm/mist_sm.png'
            break;
            
            case '10d':
            case '10n':
            return isToday ? '/images/weather_icons/lg/rain_lg.png' 
            : '/images/weather_icons/sm/rain_sm.png'
            break;
            
            case '03d':
            case '03n':
            return isToday ? '/images/weather_icons/lg/scattered_clouds_lg.png' : '/images/weather_icons/sm/scattered_clouds_sm.png'
            break;
            
            case '09d':
            case '09n':
            return isToday ? '/images/weather_icons/lg/shower_rain_lg.png' : '/images/weather_icons/sm/shower_rain_sm.png'
            break;
            
            case '13d':
            case '13n':
            return isToday ? '/images/weather_icons/lg/snow_lg.png' 
            : '/images/weather_icons/sm/snow_sm.png'
            break;
            
            case '11d':
            case '11n':
            return isToday ? '/images/weather_icons/lg/thunderstorm_lg.png' : '/images/weather_icons/sm/thunderstorm_sm.png'
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
                                <div className = "today">
                                    <h4 className = "highlightColor">Today</h4>
                                    <h4>{name} - {country}</h4>
                                    <img src={this.getIcon(toDay, true)}/>
                                    <p className = "highlightColor"> {this.getMinMax(toDay)[0]}</p>
                                    <p className = "highlightColor opacity">{this.getMinMax(toDay)[1]}</p>
                                </div>
                                <div className = "rest">
                                    <div>
                                        <h4>{moment(this.day).add(1, 'days').format('dddd')}</h4>
                                        <img src={this.getIcon(secondDay, false)}/>
                                        <p className = "highlightColor">{this.getMinMax(secondDay)[0]}</p>
                                        <p className = "highlightColor opacity">{this.getMinMax(secondDay)[1]}</p>
                                    </div>

                                    <div>
                                        <h4>{moment(this.day).add(2, 'days').format('dddd')}</h4>
                                        <img src={this.getIcon(thirdDay, false)}/>
                                        <p className = "highlightColor">{this.getMinMax(thirdDay)[0]}</p>
                                        <p className = "highlightColor opacity">{this.getMinMax(thirdDay)[1]}</p>
                                    </div>

                                    <div>
                                        <h4>{moment(this.day).add(3, 'days').format('dddd')}</h4>
                                        <img src={this.getIcon(fourthDay, false)}/>
                                        <p className = "highlightColor">{this.getMinMax(fourthDay)[0]}</p>
                                        <p className = "highlightColor opacity">{this.getMinMax(fourthDay)[1]}</p>
                                    </div>

                                    <div>
                                        <h4>{moment(this.day).add(4, 'days').format('dddd')}</h4>
                                        <img src={this.getIcon(fifthDay, false)}/>
                                        <p className = "highlightColor">{this.getMinMax(fifthDay)[0]}</p>
                                        <p className = "highlightColor opacity">{this.getMinMax(fifthDay)[1]}</p>
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






