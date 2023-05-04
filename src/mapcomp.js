import React, { useState } from 'react';


function Mapdisplay (props){
    const [mapdisplay, setMapdisplay] = useState("")
    return (  
      <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONQI_APT_KEY}&center=${props.lat},${props.lon}`}/>)}



export default Mapdisplay;