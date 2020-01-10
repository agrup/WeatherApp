import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location'
import WheatherData from './WeatherData'
import './styles.css';

import {
    CLOUD, 
    CLOUDY,
    SUN, 
    SNOW,
} from './constants/Weather'
/*
https://samples.openweathermap.org/data/2.5/forecast?q=London.Uk&appid=
https://samples.openweathermap.org/data/2.5/forecast?
q=London.Uk&appid=b6907d289e10d714a6e88b30761fae22*/
const location = "Buenos Aires,ar";
const api_key = "17c3ae85c07b20e40653d3d4c446dbcc";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather"
const url ="http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=17c3ae85c07b20e40653d3d4c446dbcc";
const api_weather=`${url_base_weather}?q=${location}&appid=${api_key}`

const data = {
    temperature: 15,
    weatherState: SUN,
    humidity:10,
    wind:'10 m/s',
}


class WheatherLocation extends Component {

    constructor(){
        super();
        this.state={
            city: "Buenos Aires",
            data: data,
        }
    }

    getWeatherState = weather_data =>{
      return SUN;
    }
    getData = weather_data => {
      const {humidity,temp } = weather_data.main;
      const {speed} = weather_data.wind;
      const weatherState = this.getWeatherState(weather_data);
    
      const data ={
        humidity,
        temperature: temp,
        weatherState,
        wind:`${speed} m/s`,
    
      }
      return data;
    }
    
    handleUpdateClick = () =>{
        fetch(api_weather)
        // .then(
        //     function(response) {
        //       if (response.status !== 200) {
        //         console.log('Looks like there was a problem. Status Code: ' +
        //           response.status);
        //         return;
        //       }
        //       response.json().then(function(data) {
        //         console.log(data);
        //       });
        //     }
        //   )
        //   .catch(function(err) {
        //     console.log('Fetch Error :-S', err);
        //   });
        .then(resolve => {
          return resolve.json();
        }).then(data => {
          const newWeather = this.getData(data);
          console.log(newWeather);

          this.setState({
            data:newWeather
          })
        })

    }

    render() {
        const {city,data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WheatherData data={data}></WheatherData>
                <button onClick={this.handleUpdateClick}>Actualizart</button>
            </div>
        );
    }
};



export default WheatherLocation;