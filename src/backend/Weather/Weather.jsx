import React from "react";
import { useState, useEffect } from "react";
import "./weather.css";
import axios from "axios";

const Weather = ({ place }) => {
  const [weather, setWeather] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/weather?place=${place}`)
      .then((res) => setWeather(res.data));
  }, [place]);

  // console.log(weather);

  return <div className="weather">
   
  </div>;
};

export default Weather;
