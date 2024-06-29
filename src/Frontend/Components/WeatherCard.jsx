import React from "react";
import Weather from "../../backend/Weather/Weather";
import Test from "../../backend/Map/test";
const WeatherCard = ({ data }) => {
  console.log(data?.coord);

  return (
    <div className="weather-card p-4 mw-w-sm mx-auto bg-mainBgColor h-auto text-white shadow-md overflow-hidden">
      <h2 className=" text-center">Weather Information of {data?.name}</h2>

      <div className="flex justify-center gap-6 mt-4 text-sm">
        <div> • {data?.weather[0].description} </div>

        <div> Temperature: {data?.main.temp} K </div>
        <div>
          {" "}
          Feels Like: {data?.main.feels_like} K<br />{" "}
        </div>
        {/*
         */}
        <div className="">Cloudiness: {data?.clouds.all}%</div>
      </div>
    </div>
  );
};

export default WeatherCard;
