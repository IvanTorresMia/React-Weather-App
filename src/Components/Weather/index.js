import React from "react";
// import WeatherContext from '../../Utils/WeatherContext'
function Weather({ name, temp, humidity, Windspeed }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{temp}</p>
      <p>{humidity}</p>
      <p>{Windspeed}</p>
    </div>
  );
}

export default Weather;
