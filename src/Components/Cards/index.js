import React, { useContext } from "react";
import './style.css'
import WeatherContext from "../../Utils/WeatherContext";

function Cards() {
  const context = useContext(WeatherContext);

  return (
    <div className="row">
      <h3>Five Day Forcast</h3>
     
      {context.map((day, i) => (
        <div className="Card rounded m-2 col-sm-2">
          <p key={i}>{day.dt_txt.substring(0, 10)}</p>
          <p>Temperature {day.main.temp} °</p>
          <p>Humidity {day.main.humidity} %</p>
          <img src={"https://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png"} />
        </div>
      ))}
    </div>
  );
}

export default Cards;
