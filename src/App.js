import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import React, { useState } from 'react';
import { bootstrap } from 'react-bootstrap';
import Map from './mapcomp';
import Weather from './weather'


function App() {
  const [displaycityinfo, setDisplaycityinfo] = useState("");
  const [weatherdata, setWeatherdata] = useState([]);
  const [inputcity, setInputcity] = useState("");
  const [error, setError] = useState("");

  function locationfinder(event) {
    setInputcity(event.target.value)

  }
  async function weatherForecast(lat, lon) {
    lat = Math.floor(lat * 100) / 100
    lon = Math.floor(lon * 100) / 100
    const weatherinfo = await axios.get(`http://localhost:3001/weather?lat=${lat}&lon=${lon}`)
      .then((weatherforecast) => {
        console.log(weatherforecast)
        setWeatherdata(weatherforecast.data)
      }).catch(setError)
    console.log(weatherinfo)
  }

  const button = async () => {
    const apiinfo = await axios.get(`https://us1.locationiq.com/v1/search?key=pk.4c85523dcc468cdc9fc82156184b6529&q=${inputcity}&format=json`)
      .then(async function (response) {
        console.log(response)
        setDisplaycityinfo(response.data[0])
        weatherForecast(response.data[0].lat, response.data[0].lon);

      })
    // console.log(apiinfo)
    // setDisplaycityinfo(apiinfo.data[0])
    // console.log(apiinfo)

    return apiinfo
  }
  const imageholder = <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.4c85523dcc468cdc9fc82156184b6529&center=${displaycityinfo.lat},${displaycityinfo.lon}&zoom=12`} />

  return (
    <div className="App">
      <header className="App-header">


        <Form.Control onChange={locationfinder} type="text" placeholder="Enter Location" />
        <Button onClick={button}>Explore</Button>
        {displaycityinfo.display_name}
        {displaycityinfo.lon}
        {displaycityinfo.lat}
        <Map lat={displaycityinfo.lat} lon={displaycityinfo.lon} />
        <Weather forecast={weatherdata} />


      {error.message}
      </header>
    </div>
  );
}

export default App;
