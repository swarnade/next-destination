import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Iternary({
  checkIn,
  checkOut,
  budget,
  loading,
  setLoading,
}) {
  const [iternaryData, setIternaryData] = useState(null);

  useEffect(() => {
    if (checkIn && checkOut && budget) {
      axios
        .get(
          `${
            import.meta.env.VITE_SERVER
          }/itinerary?place=Delhi&cin=${checkIn}&cout=${checkOut}&budget=${budget}`
        )
        .then((res) => setIternaryData(res.data.itinerary))
        .catch((err) => console.log(err));
    }
  }, [checkIn, checkOut, budget]);

  console.log(iternaryData);

  return <div>{iternaryData ?? ""}</div>;
}
