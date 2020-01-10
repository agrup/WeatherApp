import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo'
import WeatherTemperature from './WeatherTemperature'
import './styles.css';

const WeatherData = ({data:{temperature,weatherState,humidity,wind}}) => {

        return (
            <div className="weatherDataCont">
               <WeatherExtraInfo
                    humidity={humidity}
                    wind={wind}
               />   
               <WeatherTemperature
                    weatherState={weatherState}
                    temperature={temperature} />
            </div>
        );
}

WeatherData.prototype ={
    data:PropTypes.shape({
        temperature:PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.string.isRequired,
        wind:PropTypes.string.isRequired,
    })
}

export default WeatherData;