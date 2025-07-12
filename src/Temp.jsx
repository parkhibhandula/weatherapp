import React, { useState, useEffect } from 'react';

export default function Temp({ weatherData }) {
  const { name, main, weather } = weatherData;
  const weatherType = weather[0].main;

  const [style, setStyle] = useState({});

  useEffect(() => {
    
    setStyle({ boxShadow: 'inset 1px 0px 20px 3px' });
  }, []); 

  return (
    <div className="row" id="two" style={style}>
      <div className="col-md-4">
        <h2>City: {name}</h2>
        <h2>Temperature Today: {main.temp} °C</h2>
      </div>
      <div className="col-md-4">
        <h1>Weather: {weatherType}</h1>
      </div>
      <div className="col-md-4">
        <div>
          <img
            id="imgw"
            src={`/src/assets/images/${weatherType.toLowerCase()}.png`}
            alt={weatherType}
          />
        </div>
      </div>
    </div>
  );
}
