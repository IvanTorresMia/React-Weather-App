import React, { useState, useEffect } from 'react'
import Nav from './Components/Nav'
import Wrapper from './Components/Wrapper'
import WeatherContext from './Utils/WeatherContext'
import Footer from './Components/Footer'
import API from './Utils/API'


// use context 
// set the state for the current weather, put the value of the api

function App() {

    const [currentWeather, setCurrentWeather] = useState({
        name: "",
        temperature: "",
        humidity: "",
        Windspeed: "",
        UVindex: "",
    })

  
API.getWeather('California').then((res) => {
    console.log(res)

   
})



return (
<div>
<Nav />
<WeatherContext.Provider>
< Wrapper/>
</WeatherContext.Provider>
< Footer/>
</div>


)

}




export default App;


