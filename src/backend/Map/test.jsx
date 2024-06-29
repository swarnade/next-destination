import React, { useEffect } from "react";
import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";
// import Weather from "../Weather/Weather";

const Test = ({ lat, lon }) => {
  const [markerRef, marker] = useMarkerRef();
  
  // let lat, lon;

  // useEffect(() => {
  //   if (data) {
  //     lat = data.coord.lat;
  //     lon = data.coord.lon;
  //   }
  //   console.log(lat, lon);
  // }, [data]);

  return (
    <div className="w-99 m-auto">
      <APIProvider apiKey={import.meta.env.VITE_MAP_KEY}>
        <Map
          style={{ width: "80dvw", height: "80dvh" }}
          defaultCenter={{ lat: Number(lat ?? 20.5937), lng: Number(lon ?? 78.9629) }}
          defaultZoom={5}
        >
        </Map>
        <Marker
          ref={markerRef}
          position={{ lat: Number(lat??0), lng: Number(lon??0) }}
        />
      </APIProvider>
    </div>
  );
};

export default Test;
