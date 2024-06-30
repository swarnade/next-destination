import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import Test from "../../backend/Map/test";
import NearbyComp from "./NearbyComp";
import HotelComp from "./HotelComp";
import HotelCard from "./HotelsCard";
import SideBar from "./SideBar";
const WeatherPage = () => {
  const [weather, setWeather] = useState();
  const { place } = useParams();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/weather?place=${place}`)
      .then((res) => setWeather(res.data));
    console.log(weather);
  }, [place]);
  //   console.log(weather);

  return (
    <div className="bg-mainBgColor min-h-screen flex flex-col justify-center">
      <WeatherCard data={weather} />
      <div className="text-white flex justify-between">
        <div>
          <SideBar />
        </div>
        <div className=" m-auto">
          <Test lat={weather?.coord?.lat} lon={weather?.coord?.lon} />
        </div>
      </div>
      <div className="mt-10">
        <NearbyComp
          lat={weather?.coord?.lat}
          lon={weather?.coord?.lon}
        ></NearbyComp>
        <HotelCard></HotelCard>
      </div>
    </div>
  );
};

export default WeatherPage;
