import axios from 'axios'

const KEY = "58d666652ff1413e43798800e2896f32";

const API = {
    // Grab the current weather. 
    getWeather: function(city) {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + KEY + "&units=imperial")
    },
    getUV: function(latt, long) {
        return axios.get("https://api.openweathermap.org/data/2.5/uvi?lat=" + latt + "&lon=" +long + "&appid=" + KEY)
    },
    get5Day: function(city) {
        return axios.get("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + KEY +  "&units=imperial")
    },
    addCity: function(city) {
        return axios.post("/api/Weather", city);
    },
    getCity: function() {
        return axios.get("/api/Weather");
    }
}


export default API;

