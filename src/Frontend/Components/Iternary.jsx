import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Iternary({
  checkIn,
  checkOut,
  budget,
  loading,
  setLoading,
}) {
  const [iternaryData, setIternaryData] = useState(null);
  const { place } = useParams();

  useEffect(() => {
    if (checkIn && checkOut && budget) {
      if (budget < 5000) {
        alert("Budget should be greater than 5000");
        return;
      }
      axios
        .get(
          `${
            import.meta.env.VITE_SERVER
          }/itinerary?place=${place}&cin=${checkIn}&cout=${checkOut}&budget=${budget}`
        )
        .then((res) => setIternaryData(res.data.itinerary))
        .catch((err) => console.log(err));
    }
    setLoading(false);
  }, [checkIn, checkOut, budget]);

  console.log(iternaryData);

  return <div>{iternaryData ?? ""}</div>;
}
