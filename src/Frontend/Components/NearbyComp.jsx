import React, { useEffect, useState } from "react";
import Hotel from "./HotelsCard.jsx";
import Cardsub from "./Cardsub.jsx";
import axios from "axios";
const Card = ({ lat, lon }) => {
  const [nearby, setNearby] = useState([]);

  useEffect(() => {
    axios
      .get(`https://h4b.buckets.growsoc.arpan.xyz/nearby?lat=${lat}&lon=${lon}`)
      .then((res) => {
        setNearby(res.data);
      });
  }, [lat, lon]);

  return (
    <>
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8">
        {nearby.map((data) => (
          <Cardsub
            title={data?.name}
            image="http://photos.hotelbeds.com/giata/00/004200/004200a_hb_ro_006.jpg"
            description={data?.vicinity}
            rating={data?.rating}
            user_ratings_total={data?.user_ratings_total}
          />
        ))}
      </main>
    </>
  );
};

export default Card;
