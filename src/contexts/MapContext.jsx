/* eslint-disable react/prop-types */

import { createContext, useContext, useRef, useState } from "react";
import {outdoors, satellite} from "../public/assets/basemaps";

const MapContext = createContext();

export const MapProvider = ({ children }) => {

  const [basemaps, setBasemaps] = useState([
    { value: "outdoors", image: outdoors, label: "Outdoor" },
    { value: "alidade_satellite", image: satellite, label: "Satellite" }
  ]);


  const mapRef = useRef(null)

  const [selectedBasemap, setSelectedBasemap] = useState("outdoors");
  
  const [mapParams, setMapParams] = useState({
    lat : 40.1360,
    lng : 29.0063,
    zoom : 8,
    style : `https://tiles.stadiamaps.com/styles/${selectedBasemap}.json`
  })
  const [activeMapParams, setActiveMapParams] = useState({
    lat : 40.1360,
    lng : 29.0063,
    zoom : 8,
    style : `https://tiles.stadiamaps.com/styles/${selectedBasemap}.json`
  })
  

  const data = {
    mapRef,
    mapParams,
    basemaps,
    setBasemaps,
    selectedBasemap,
    setSelectedBasemap,
    setMapParams,
    activeMapParams,
    setActiveMapParams,
  };

  return (
    <MapContext.Provider value={data}>
      {children}
    </MapContext.Provider>
  );
};

export default MapContext;

export const useMap = () => {
  return useContext(MapContext);
};

