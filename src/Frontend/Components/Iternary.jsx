import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Iternary({ checkIn, checkOut, budget }) {
  const [iternaryData, setIternaryData] = useState(null);

  useEffect(() => {
    if (checkIn && checkOut && budget) {
      axios
        .get(
          `${
            import.meta.env.VITE_SERVER
          }/itinerary?place=Delhi&cin=${checkIn}&cout=${checkOut}&budget=${budget}`
        )
        .then((res) => setIternaryData(res.data))
        .catch((err) => console.log(err));
    }
  }, [checkIn, checkOut, budget]);
  console.log(iternaryData.itinerary[1]);
  return (
    <div>
      {iternaryData ? (
        <div>
          {iternaryData.itinerary.map((item) => (
            <div>
              <h1>Day{item.day}</h1>
              <h1>{item.title}</h1>
              <p>Description : {item.description}</p>
              {/* <p>{item.activities[0]}</p> */}
            </div>
          ))}
        </div>
      ) : (
        <h1>loading...</h1>
      )}
    </div>
  );
}
