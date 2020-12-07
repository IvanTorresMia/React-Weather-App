import axios from 'axios'

const KEY = "9ddc8097fb5593b533f4685eec567503";

const API = {
    // Grab the current weather. 
    getWeather: function(city) {
        return axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + KEY + "&units=imperial")
    },
    getUV: function(latt, long) {
        return axios.get("https://api.openweathermap.org/data/2.5/uvi?lat=" + latt + "&lon=" +long + "&appid=" + KEY)
    }
}


export default API;

