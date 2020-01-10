import React, { Component } from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = ({humidity,wind}) => {
        return (
            <div className="weatherExtraInfoCont">
                <span className="ExtraInfoText">{`Humedad ${humidity} % `}</span>
                <span className="ExtraInfoText">{`Viento ${wind}`}</span>
            </div>
        );
}

WeatherExtraInfo.propTypes = {

};

export default WeatherExtraInfo;