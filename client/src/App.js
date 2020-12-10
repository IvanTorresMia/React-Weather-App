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
import "./App.css";
import HistoryContext from "./Utils/historyContext";

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
  const [buttons, setButtons] = useState([]);
  const [fiveDay, setFiveDay] = useState([]);
  const fiveDayArr = [];

  useEffect(() => {getNames()}, []);

  function handleInput(event) {
    event.preventDefault();
    const { value } = event.target;
    setInputState(value);
  }

  function getCurrentWeather(city) {
    const currentDate = moment().format(" (dddd, MMMM Do YYYY)");
    API.getWeather(city).then((res) => {
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
          UVindex: "UVindex: " + UVindexVal,
        });
      });
    });
  }

  function getfiveDayWeather(city) {
    API.get5Day(city).then((fiveRes) => {
      for (let i = 0; i < 40; i = i + 8) {
        fiveDayArr.push(fiveRes.data.list[i]);
      }

      setFiveDay(fiveDayArr);
    });
  }

  function getNames() {
    API.getCity().then((res) => {
      setButtons(res.data);
    });
  }

  function addCityToDb(city) {
    // mainWeather(city);

    API.addCity({ name: city }).then((res) => {
      console.log(res);
    });
  }

  async function getWeather() {
    getNames();
    await addCityToDb(inputState);
    getfiveDayWeather(inputState);
    getCurrentWeather(inputState);
  }

  function handleButton(event) {
    event.preventDefault();
    const currentButton = event.target.innerHTML;
    getfiveDayWeather(currentButton);
    getCurrentWeather(currentButton);
  }

  return (
    <div>
      <Nav />

      <div className="conatiner">
        <div className="row">
          <div className="col">
            <Search handleSearch={getWeather} handleChange={handleInput} />
            <HistoryContext.Provider value={buttons}>
              <History handleButton={handleButton} />
            </HistoryContext.Provider>
          </div>
          <div className="col">
            <Weather
              name={currentWeather.name}
              temp={currentWeather.temperature}
              humidity={currentWeather.humidity}
              Windspeed={currentWeather.W}
              UVindex={currentWeather.UVindex}
            />
            <WeatherContext.Provider value={fiveDay}>
              <Cards />
            </WeatherContext.Provider>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
