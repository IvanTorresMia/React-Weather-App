import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import WeatherContext from "./Utils/WeatherContext";
import Footer from "./Components/Footer";
import API from "./Utils/API";
import moment from "moment";
import Search from "./Components/Search";
import History from "./Components/History";
import Cards from "./Components/Cards";
import Weather from "./Components/Weather";

// use context
// set the state for the current weather, put the value of the api

function App() {
  const [inputState, setInputState] = useState("");
  const [currentWeather, setCurrentWeather] = useState({
    name: "",
    temperature: "",
    humidity: "",
    Windspeed: "",
    UVindex: "",
  });

  //   make the axios calls, then set the state of the weather, once thats done.
  // use the vales of the state to fill in the props of compenents i.e Weather

  // practice back end
  // save the weather data to a data base then call it back when a button is pressed

  function handleInput(event) {
    const { value } = event.target;
    setInputState(value)
  }

  function getWeather() {
    const currentDate = moment().format(" (dddd, MMMM Do YYYY)");
    API.getWeather(inputState).then((res) => {
      const long = res.data.coord.lon;
      const latt = res.data.coord.lat;
      API.getUV(latt, long).then((response) => {
        const UVindexVal = response.data.value;
        setCurrentWeather({
          ...currentWeather,
          name: res.data.name + currentDate,
          temperature: "Temperature: " + res.data.main.temp + "°",
          humidity: "Humidity " + res.data.main.humidity + "%",
          Windspeed: "Windspeed " + res.data.wind.speed + " MPH",
          UVindex: UVindexVal,
        });
      });
    });
  }

  return (
    <div>
      <Nav />
      <WeatherContext.Provider value={currentWeather}>
        <div className="conatiner">
          <div className="row">
            <div className="col">
              <Search handleSearch={getWeather} handleChange={handleInput} />
              <History />
            </div>
            <div className="col">
              <Weather
                name={currentWeather.name}
                temp={currentWeather.temperature}
                humidity={currentWeather.humidity}
                Windspeed={currentWeather.W}
                UVindex={currentWeather.UVindex}
              />
              <Cards />
            </div>
          </div>
        </div>
      </WeatherContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
