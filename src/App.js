import React, { useState } from 'react'
import Nav from './Components/Nav'
import Wrapper from './Components/Wrapper'
import WeatherContext from './Utils/WeatherContext'
import Footer from './Components/Footer'


// use context 
// set the state for the current weather, put the value of the api

function App() {

    const [currentWeather, setCurrentWeather] = useState({
        temperature: "",
        humidity: "",
        Windspeed: "",
        UVindex: "",
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


