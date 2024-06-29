import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import Test from "../../backend/Map/test";
import { useNavigate } from "react-router-dom";

const WeatherPage = () => {
  const [weather, setWeather] = useState();
  const { place } = useParams();
  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate("/nearest");
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER}/weather?place=${place}`)
      .then((res) => setWeather(res.data));
  }, [place]);

  //   console.log(weather);
  return (
    <div className="bg-mainBgColor min-h-screen flex flex-col justify-center">
      <WeatherCard data={weather} />
      <Test data={weather} />
      <div className="m-auto">
        <button
          className="bg-gray-500 w-40 m-4 text-white font-bold p-2  rounded-md hover:bg-mainColor hover:text-mainBgColor"
          onClick={handleBtnClick}
        >
          Check Details
        </button>
      </div>
    </div>
  );
};

export default WeatherPage;
