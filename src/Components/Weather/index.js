import React from "react";
import './style.css'
// import WeatherContext from '../../Utils/WeatherContext'
function Weather({ name, temp, humidity, Windspeed, UVindex }) {
  return (
    <div className="container">
      <h3 className="display">{name}</h3>
      <p className="lead">{temp}</p>
      <p className="lead">{humidity}</p>
      <p className="lead">{Windspeed}</p>
      <p className="lead">{UVindex}</p>
    </div>
  );
}

export default Weather;
