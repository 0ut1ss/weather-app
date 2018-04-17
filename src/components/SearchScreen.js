import React from 'react';
import {connect} from 'react-redux';
import {forecast} from '../actions/forecast';    
import PlacesAutocomplete from 'react-places-autocomplete';
import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete';
import Sidebar from './Sidebar';

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
        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&&APPID=00aacc4e5842a5270702d3cee87e54c1`)
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
            root: {
                position: 'relative'
            },
            input: {
                width: '80%',
                height: '4rem',
                color: '#d3b5ff',
                boxShadow: '0 2px 2px #774fb3',
                backgroundColor: '#a970ff',
                border: 'none'
            },
            autocompleteContainer: {
                width: '85%',
                left: '7%'
            }
          }

            
        return (

                <div className="searchScreen">
                <Sidebar />
                    <div className= "searchbox">
                        <p>type a location:</p>
                        <div className = "searchbox__form-root">
                            <form onSubmit={this.handleFormSubmit}>
                            <PlacesAutocomplete inputProps={inputProps} styles = {cssClasses}/>
                            <button type="submit" className= "form__button"></button>
                            </form>
                        </div>
                        <p>or give us your location:</p>

                        <button onClick = {this.handleAccessLocation} className= "locationbutton">access location</button>
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





