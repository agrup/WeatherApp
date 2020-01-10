import React, { Component } from 'react';
import PropTypes from 'prop-types';
import WeatherIcons from 'react-weathericons';


import {
    CLOUD, 
    CLOUDY,
    SUN, 
    SNOW,
} from './../constants/Weather'

const icons = {
    [CLOUD]:"cloud", 
    [CLOUDY]:"cloudy",
    [SUN]:"day-sunny", 
    [SNOW]:"windy",
};

const sizeIcon = "4x"

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />
    else
        return <WeatherIcons className="wicon" name="day-sunny" size={sizeIcon} />
}

const WeatherTemperature = ({temperature,weatherState}) => {
        return (
            <div className="weatherTemperatureCont">
                {
                    getWeatherIcon(weatherState)
                }
            <span className="temperature">{`${temperature}`}</span>
            <span className="temperatureType"> {`ºC`}</span>
            </div>
        );
}

WeatherTemperature.prototype = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;