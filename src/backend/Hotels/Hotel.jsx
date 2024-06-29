import React from "react";
import { useState, useEffect } from "react";
// import "./weather.css";
import axios from 'axios';
import Weather from "../Weather/Weather";

const Hotels = ({ data }) => {
  const [hotels, setHotels] = useState();

  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_SERVER}/hotels?lat=${data.coord.lon}&lon=${
          data.coord.lan
        }&cin=${data.coord.checkin}&cout=${data.coord.checkout}`
      )
      .then((res) => setHotels(res.data))
      .catch((err) => console.error("Error fetching hotels:", err));
  }, [place]);

  return <div className="hotels"></div>;
};

export default Hotels;
