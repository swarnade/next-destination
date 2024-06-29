import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const WeatherPage = () => {
  const [weather, setWeather] = useState();
  const { place } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/weather?place=${place}`)
      .then((res) => setWeather(res.data));
  }, [place]);

  console.log(weather);
  return (
    <div>
      <WeatherCard data={weather} />
    </div>
  );
};

export default WeatherPage;
