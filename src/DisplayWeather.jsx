import React, { useState } from 'react';
import Temp from './Temp';
import Other from './Other';
import Time from './Time';

export default function DisplayWeather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apikey = 'da7bb78e9a4da3dca1f9e41456b7336e';

  const display = () => {
    if (city === '') {
      alert('Please enter a city');
      return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeatherData(data);
        } else {
          alert('City not found!');
        }
      })
      .catch(() => alert("You're not connected!"));
  };

  return (
    <div className="container mt-5 text-center" style={{ paddingBottom: '5%' }}>
      <div className="row">
        <div className="col-lg-6">
          <img src="/src/assets/images/weather.png" id="img" alt="Weather Image" />
        </div>
        <div className="col-lg-6" id="cont1">
          <div className="col">
            <img src="/src/assets/images/logo.png" height="100px" width="100px" alt="img" />
            <h1 id="logo">ClimaX</h1>
            <h4>The Weather App</h4>
          </div>
          <div className="col" id="cont2">
            <input
              type="text"
              id="city"
              placeholder="Enter your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <br />
            <button onClick={display}>Check</button>
          </div>
        </div>
      </div>
      {weatherData && (
        <>
          <Temp weatherData={weatherData} />
          <Other weatherData={weatherData} />
          <Time weatherData={weatherData}></Time>
        </>
      )}
    </div>
  );
}
