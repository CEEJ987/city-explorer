import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import React, { useState } from 'react';
import Map from './mapcomp';
import Weather from './weather';


function App() {
  const [displaycityinfo, setDisplaycityinfo] = useState({});
  const [weatherdata, setWeatherdata] = useState([]);
  const [inputcity, setInputcity] = useState("");
  
  function locationfinder(event) {
    setInputcity(event.target.value);
  }
  
  async function weatherForecast(lat, lon) {
    lat = Math.floor(lat * 100) / 100;
    lon = Math.floor(lon * 100) / 100;
    try {
      const weatherforecast = await axios.get(`http://localhost:3001/weather?lat=${lat}&lon=${lon}`);
      console.log(weatherforecast);
      setWeatherdata(weatherforecast.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function button() {
    try {
      const apiinfo = await axios.get(`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONQI_APT_KEY}&center=${inputcity}`);
      console.log(apiinfo);
      setDisplaycityinfo(apiinfo.data[0]);
      weatherForecast(apiinfo.data[0].lat, apiinfo.data[0].lon);
    } catch (error) {
      console.log(error);
    }
  }
  
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
      </header>
    </div>
  );
}

export default App;
