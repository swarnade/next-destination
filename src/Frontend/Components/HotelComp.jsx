import React,{useState,useEffect} from 'react'
import HotelCard from './HotelsCard';
import axios from "axios";
const HotelComp = ({ lat, lon }) => {
    const [nearby, setNearby] = useState([]);
  
    useEffect(() => {
      axios.get(`https://h4b.buckets.growsoc.arpan.xyz/hotels?lat=${lat}&lon=${lon}&cin=2024-07-05&cout=2024-07-07`).then((res) => {
        const fixed=res.data;
        setNearby(fixed.data)
        console.log(fixed);
      })
    },[lat,lon])

    return (
      <>
        <main className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8">
          {nearby.map((data) => (
           <HotelCard title={data.title} secondaryInfo={data.secondaryInfo} provider={data.provider} priceForDisplay={data.priceForDisplay} bubbleRating={data.bubbleRating} externalUrl={data.externalUrl} cardPhotos={data.cardPhotos} ></HotelCard>
          ))}
        </main>
      </>
    );
  };
  export default HotelComp;