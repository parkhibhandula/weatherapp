import React from 'react';

export default function WeatherDetails({ weatherData }) {
  const { main, wind, sys, visibility, timezone } = weatherData;

  const getWindDirection = (degrees) => {
    const directions = ['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  };
 
  const formatTime = (timestamp, timezoneOffset) => {
    const date = new Date((timestamp + timezoneOffset) * 1000); 
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; 
    const formattedMinutes = minutes.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };

  const visibilityInKm = (visibility / 1000).toFixed(1);


  const style = {
    boxShadow: 'inset 1px 0px 20px 3px',
    padding: '15px',
    marginBottom: '20px',
    borderRadius: '10px',
  };

  return (
    <div className="row" id="two" style={style}>
      <div className="col-md-4">
        <h2>
          Wind: {wind.speed} m/s, Direction: {wind.deg}° ({getWindDirection(wind.deg)})
        </h2>
      </div>
      <div className="col-md-4">
        <h2>
          Sunrise: {formatTime(sys.sunrise, timezone)} | Sunset: {formatTime(sys.sunset, timezone)}
        </h2>
      </div>
      <div className="col-md-4">
        <h2>Visibility: {visibilityInKm} km</h2>
      </div>
    </div>
  );
}
