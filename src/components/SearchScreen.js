import React from 'react';
import {connect} from 'react-redux';
import {forecast} from '../actions/forecast';    
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

 class SearchScreen extends React.Component {


    state = {
        queryText: "",
        city: {},
    }


    onChange = (queryText) => {
        this.setState(() =>({queryText}));
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        geocodeByAddress(this.state.queryText)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
            this.handleGetWeather(latLng.lat, latLng.lng)
        })
        .then(this.props.history.push('/forecast'))

        .catch(error => console.log('Error',error))
    }



       handleAccessLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => this.handleGetWeather(position.coords.latitude, position.coords.longitude));
        this.props.history.push('/forecast')
    }

    

    handleGetWeather = (lat, lng) => {
        let returnJson = {};
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&&APPID=00aacc4e5842a5270702d3cee87e54c1`)
        .then((response) => response.json())
        .then((responseData) => this.props.dispatch(forecast(responseData)))
        .catch(error => console.log('Error',error))
    }


    render () {
        const inputProps = {
            value: this.state.queryText,
            onChange: this.onChange,
            placeholder: 'type here...',
            autoFocus: true,
        }

        const cssClasses = {

            input: {
                border: '0',
                backgroundColor: '#a970ff',
                paddingLeft: '0',
                paddingRight: '0',
                borderRadius: '2rem 2rem',
                color: '#fff',
                outline: 'none'
            },
            root: {
                border: '0',
            }
          }

            
        return (

                    <div className="searchbox">
                        <p>type a location:</p>
                        
                            <form onSubmit={this.handleFormSubmit} className="searchbox__form">
                            <PlacesAutocomplete inputProps={inputProps} styles = {cssClasses} />
                            <button type="submit" className= "searchbox__form-button">
                                <svg className="searchbox__icon">
                                    <use xlinkHref="images/sprite.svg#icon-magnifying-glass"/>
                                </svg>
                            </button>
                            </form>

                        <p>or give us your location:</p>
                        <div className="location">
                            <button onClick = {this.handleAccessLocation} className="location__button">Your location</button>
                            <svg className="location__icon">
                                <use xlinkHref="images/sprite.svg#icon-direction"/>
                            </svg>
                        </div>
                    </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        forecast: state.forecast
    };
};

export default connect(mapStateToProps)(SearchScreen);





