import React from "react";
import {
  APIProvider,
  Map,
  Marker,
  useMarkerRef,
} from "@vis.gl/react-google-maps";
import Weather from "../Weather/Weather";

const Test = ({lat,lon}) => {
  const [markerRef, marker] = useMarkerRef();

  return (
    <APIProvider apiKey={import.meta.env.VITE_MAP_KEY}>
      <Map
        style={{ width: "100dvw", height: "100dvh" }}
        defaultCenter={{ lat, lng:lon }}
        defaultZoom={5}
      >
        <Marker
          ref={markerRef}
          position={{ lat, lng:lon }}
        />
      </Map>
    </APIProvider>
  );
};

export default Test;
