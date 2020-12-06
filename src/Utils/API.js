import axios from 'axios'

const KEY = "58d666652ff1413e43798800e2896f32";

const API = {
    // Grab the current weather. 
    getWeather: function(city) {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + KEY + "&units=imperial")
    }
}


