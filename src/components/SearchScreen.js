import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';

export default class SearchScreen extends React.Component {

    state = {
        address: "Athens, GR",
        city: ''
    }

    onChange = (address) => {
        this.setState(() =>({address}));
    }

    handleFormSubmit = (e) => {
        e.preventDefault()

        geocodeByAddress(this.state.address)
        .then(results => getLatLng(results[0]))
        .then(latLng => this.handleGetWeather(latLng.lat, latLng.lng))
        .catch(error => console.log('Error',error))
    }

    handleGetWeather = (lat, lng) => {
        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&&APPID=00aacc4e5842a5270702d3cee87e54c1`)
        .then((response) => response.json())
        .then((responseData) => this.setState(() => ({city: responseData.city.name})))
        .then(console.log(this.state.city));
    }

    render () {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange
        }    
        return (
            <div>
                <h1>Weather App</h1>
                <p>type a location:</p>
                <form onSubmit={this.handleFormSubmit}>
                    <PlacesAutocomplete inputProps={inputProps} />
                    <button type="submit">Search</button>
                </form>
                <p>or give us your location:</p>
                <button>access location</button>
            </div>
        );
    }
}