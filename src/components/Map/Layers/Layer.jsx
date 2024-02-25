import "maplibre-gl/dist/maplibre-gl.css";
import "../Map.css";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.js"

import { useEffect } from "react";
import { useMap } from "../../../contexts/mapContext";
import { useLayers } from "../../../contexts/LayerContext";

import bursaTarihiYapi from "../../../public/data/bursaTarihiYapi.json";
import bursaMahalleSinir from "../../../public/data/bursaMahalleSinir.json";
import bursaIlceSinir from "../../../public/data/bursaIlceSinir.json";

import { cami, dikilitas, han, turbe } from "../../../public/assets/icons";

function Layer() {
  const { mapRef } = useMap();
  const { layers, setLayers } = useLayers();

  // Layer ilk harita yükleme anında katmanları yüklemiyor ref olduğundan
  // state yapılabilir
  // harita hareket ettiğinde katmanlar yükleniyor.

  

  const handleLoadLayers = () => {

    

    // Tarihi yapi verilerinin yüklenmesi
    mapRef.current.addSource("tarihi-yapi", {
      type: "geojson",
      data: bursaTarihiYapi,
    });



    const scaleCami = 10;

    mapRef.current.loadImage(cami, function (error, image) {
      if (error) throw error;
      mapRef.current.addImage("Cami", image, { pixelRatio: scaleCami });
    });

    mapRef.current.loadImage(turbe, function (error, image) {
      if (error) throw error;
      mapRef.current.addImage("Turbe", image, { pixelRatio: scaleCami });
    });

    mapRef.current.loadImage(dikilitas, function (error, image) {
      if (error) throw error;
      mapRef.current.addImage("Dikilitas", image, { pixelRatio: scaleCami });
    });

    mapRef.current.loadImage(han, function (error, image) {
      if (error) throw error;
      mapRef.current.addImage("Han", image, { pixelRatio: scaleCami });
    });

    mapRef.current.addLayer({
      id: "tarihi-yapi",
      type: "symbol",
      source: "tarihi-yapi",
      layout: {
        "icon-image": ["get", "tarihiYapi_tur"],
        "icon-overlap": "always",
      },
    });
    //
  
    //  Mahalle Verisinin yüklenmesi
    https: mapRef.current.addSource("mah-data", {
      type: "geojson",
      data: bursaMahalleSinir,
    });
    mapRef.current.addLayer({
      id: "mah-data",
      type: "fill",
      source: "mah-data",
      layout: {},
      paint: {
        "fill-color": "rgba(200, 100, 240, 0)",
        "fill-outline-color": "rgba(155,200,200, 1)",
      },
    });

    //  İlce Verisinin yüklenmesi
    mapRef.current.addSource("ilce-data", {
      type: "geojson",
      data: bursaIlceSinir,
    });
    mapRef.current.addLayer({
      id: "ilce-data",
      type: "fill",
      source: "ilce-data",
      layout: {},
      paint: {
        "fill-color": "rgba(200, 100, 240, 0)",
        "fill-outline-color": "rgba(0,0,0,1)",
      },
    });

    

    mapRef.current.addControl(new maplibregl.NavigationControl());

    console.log("Katmanlar Yüklendi!");
  };

  useEffect(() => {
    if (mapRef.current) {
      handleLoadLayers();
    }
    // mapRef.current?.on('load',handleLoadLayers())
  }, [mapRef.current, layers]);

  return null;
}

export default Layer;
