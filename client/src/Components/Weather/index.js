import React from "react";
import './style.css'
// import WeatherContext from '../../Utils/WeatherContext'
function Weather({ name, temp, humidity, Windspeed, UVindex }) {
  return (
    <div className="rounded m-4 p-4 weather">
      <h3 className="display">{name}</h3>
      <p className="lead">{temp}</p>
      <p className="lead">{humidity}</p>
      <p className="lead">{Windspeed}</p>
      <p className="lead">{UVindex}</p>
    </div>
  );
}

export default Weather;
