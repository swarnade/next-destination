import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import Test from "../../backend/Map/test";
import NearbyComp from "./NearbyComp";
import HotelComp from "./HotelComp";
import HotelCard from "./HotelsCard";
const WeatherPage = () => {
  const [weather, setWeather] = useState();
  const { place } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/weather?place=${place}`)
      .then((res) => setWeather(res.data));
      console.log(weather)
  }, [place]);

  //   console.log(weather);
  return (
    <div className="bg-mainBgColor min-h-screen flex flex-col justify-center">
      <WeatherCard data={weather} />
      <Test lat={weather?.coord?.lat} lon={weather?.coord?.lon}/>
      <NearbyComp lat={weather?.coord?.lat} lon={weather?.coord?.lon}></NearbyComp>
    </div>
  );
};

export default WeatherPage;
