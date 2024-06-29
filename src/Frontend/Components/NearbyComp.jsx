import React, { useEffect, useState } from 'react';
import Hotel from './HotelsCard.jsx'
import Cardsub from './Cardsub.jsx';
import axios from 'axios';
const Card = ({ lat, lon }) => {
  const [nearby, setNearby] = useState([]);

  useEffect(() => {
    axios.get(`https://h4b.buckets.growsoc.arpan.xyz/nearby?lat=${lat}&lon=${lon}`).then((res) => {
      setNearby(res.data)
    })
  },[lat,lon])

  return (
    <>
      <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8">
        {nearby.map((data) => (
          <Cardsub title={data?.name} image="https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1719532800&semt=sph" description={data?.vicinity} />
        ))}

      </main>
    </>
  );
};

export default Card;
