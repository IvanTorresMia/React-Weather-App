import React, { useContext } from "react";
import "./style.css";
import WeatherContext from "../../Utils/WeatherContext";

function Cards() {
  const context = useContext(WeatherContext);

  return (

     <div className="Container rounded m-4 p-4">
        <h2 className="card-title">Five Day Forcast</h2>
        <div className="row">
        {context.map((day, i) => (
          <div className="Card rounded m-2 col-sm-2 p-2">
            <p key={i}>{day.dt_txt.substring(0, 10)}</p>
            <p>Temperature {day.main.temp} °</p>
            <p>Humidity {day.main.humidity} %</p>
            <img
              src={
                "https://openweathermap.org/img/wn/" +
                day.weather[0].icon +
                "@2x.png"
              }
            />
          </div>
        ))}
      </div>
      </div>
  );
}

export default Cards;
