import React, { useContext } from "react";
import WeatherContext from "../../Utils/WeatherContext";

function Cards() {
  const context = useContext(WeatherContext);

  return (
    <div>
      <h3>Five Day Forcast</h3>
      {context.map((day, i) => (
        <>
          <p key={i}>{day.dt_txt.substring(0, 10)}</p>
          <p>Temperature {day.main.temp} °</p>
          <p>Humidity {day.main.humidity} %</p>
          <img src={"https://openweathermap.org/img/wn/" + day.weather[0].icon + "@2x.png"} />
        </>
      ))}
    </div>
  );
}

export default Cards;
