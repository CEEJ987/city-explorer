import logo from './logo.svg';
import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import React, { useState } from 'react';
import bootstrap from 'react';
import Map from './mapcomp'



function App() {
  const [displaycityinfo, setDisplaycityinfo] = useState("")
  
  const [inputcity, setInputcity] = useState("");
  function locationfinder(event){
    setInputcity(event.target.value)

  }

  const button = async () => {
    const apiinfo = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONQI_APT_KEY}&q=${inputcity}&format=json`); 
    console.log(apiinfo)
    setDisplaycityinfo(apiinfo.data[0])
    console.log(apiinfo)

    return apiinfo
  }
  return (
    <div className="App">
      <header className="App-header">
      

    <Form.Control onChange={locationfinder} type="text" placeholder="Enter Location" />
    <Button onClick={button}>Explore</Button>
    {displaycityinfo.display_name}
    {displaycityinfo.lon}
    {displaycityinfo.lat}
    <Map lat = {displaycityinfo.lat} lon = {displaycityinfo.lon}/>

  


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
