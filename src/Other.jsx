import React, { useState, useEffect } from 'react';

export default function Other({ weatherData }) {
  const { main, coord } = weatherData;
  const [style, setStyle] = useState({});

  useEffect(() => {
   
    setStyle({ boxShadow: 'inset 1px 0px 20px 3px' });
  }, []);

  return (
    <div className="row" id="three" style={style}>
      <div className="row">
        <div className="col-md-5">
          <h1>Humidity:</h1>
          <h2>{main.humidity}</h2>
        </div>
        <div className="col-md-5">
          <h1>Pressure:</h1>
          <h2>{main.pressure}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <h1>Longitude:</h1>
          <h2>{coord.lon}</h2>
        </div>
        <div className="col-md-5">
          <h1>Latitude:</h1>
          <h2>{coord.lat}</h2>
        </div>
      </div>
    </div>
  );
}
