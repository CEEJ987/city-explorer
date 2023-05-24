function Weather (props){
    console.log('weather data is ', props.forecast)    
    return (props.forecast.map((weatherdata) => {
        return <h1 style={{color:"white"}}>{weatherdata.date}{weatherdata.description}</h1>
    })
    );
}

export default Weather;