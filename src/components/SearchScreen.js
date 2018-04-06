import React from 'react';
import {connect} from 'react-redux';    
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';


export default class SearchScreen extends React.Component {

    state = {
        queryText: "Athens, GR",
        city: ''
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
        .catch(error => console.log('Error',error))
    }



       handleAccessLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => this.handleGetWeather(position.coords.latitude, position.coords.longitude));
    }

    

    handleGetWeather = (lat, lng) => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&&APPID=00aacc4e5842a5270702d3cee87e54c1`)
        .then((response) => response.json())
        .then((responseData) => {
            this.setState(() => ({city: responseData}))
            console.log(this.state.city);
        })
    }



    render () {
        const inputProps = {
            value: this.state.queryText,
            onChange: this.onChange
        }    
        return (
            <div>
                <p>type a location:</p>
                <form onSubmit={this.handleFormSubmit}>
                    <PlacesAutocomplete inputProps={inputProps} />
                    <button type="submit">Search</button>
                </form>
                <p>or give us your location:</p>
                <button onClick = {this.handleAccessLocation}>access location</button>
                <h3>{this.state.city.name}</h3>
            </div>
        );
    }
}


