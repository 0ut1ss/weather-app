import React from 'react';
import {connect} from 'react-redux';
import {forecast} from '../actions/forecast';    
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';


 class SearchScreen extends React.Component {


    state = {
        queryText: "Athens, GR",
        city: {}
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
        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&&APPID=00aacc4e5842a5270702d3cee87e54c1`)
        .then((response) => response.json())
        .then((responseData) => this.props.dispatch(forecast(responseData)))
        .catch(error => console.log('Error',error))
    }


    render () {
        const inputProps = {
            value: this.state.queryText,
            onChange: this.onChange
        }    
        return (
            <div className="searchScreen">
                <div className ="searchScreen__form">
                <p>type a location:</p>
                <form onSubmit={this.handleFormSubmit}>
                    <PlacesAutocomplete inputProps={inputProps} />
                    <button type="submit">Search</button>
                </form>
                </div>
                <div className ="searchScreen__btn">
                    <p>or give us your location:</p>
                    <button onClick = {this.handleAccessLocation}>access location</button>
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



