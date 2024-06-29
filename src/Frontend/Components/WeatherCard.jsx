import React from "react";
import Weather from "../../backend/Weather/Weather";

const WeatherCard = ({ data }) => {
  console.log(data?.coord);

  return (
    <div className="weather-card p-4 m-2 mw-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <h2>Weather Information for {data?.name}</h2>
      
      <div className="section">
        <strong>Weather:</strong>
        
        Description: {data?.weather[0].description}
        <br />
        <br />
        Temperature: {data?.main.temp} K<br />
        Feels Like: {data?.main.feels_like} K<br />
        <img
          src={`http://openweathermap.org/img/wn/${data?.weather[0].icon}.png`}
          alt="Weather Icon"
        />
         
      </div>
        
      <div className="section">
        <strong>Clouds:</strong>
        <br />
        Cloudiness: {data?.clouds.all}%
      </div>
     

     
    </div>
  );
};

export default WeatherCard;
