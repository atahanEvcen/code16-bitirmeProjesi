/* eslint-disable react/prop-types */
import "maplibre-gl/dist/maplibre-gl.css";
import "./Map.css";
import { useEffect, useRef } from "react";
import { useMap } from "../../contexts/mapContext";
import maplibregl from "maplibre-gl";
import BasemapSwitch from "./BasemapSwitch/BasemapSwitch";
import { useLayers } from "../../contexts/LayerContext";



function Map({children}) {
  const mapContainer = useRef(null);
  const {
    mapRef,
    mapParams,
    setActiveMapParams,
  } = useMap();
  const [layers] = useLayers();

  const handleMapMove = (e) => {
    const { center, zoom } = e.target.boxZoom._tr;
    console.log(center);
    setActiveMapParams({
      lat: center.lat,
      lng: center.lng,
      zoom: zoom,
    });

    console.log(mapRef.current.getStyle().sources)

  };
  
  const handlePointClick = (e) => {
    console.log(e.features[0]);
    new maplibregl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        "<b> Yapi No: </b> " + e.features[0].properties.tarihiYapi_no +
        "<b> <br /> Yapi Adi: </b> " + e.features[0].properties.tarihiYapi_ad +
        (e.features[0].properties.tarihiYapi_3D_Link ? "<div> " +  '<a target="_blank" href="'+ e.features[0].properties.tarihiYapi_3D_Link  + '">' + '<p style="color:blue"> <b> 3D Model İçin Tıklayınız. </b> </p>' + '</a></div>':"")+
        "<b> <br /> Bulundugu Mahalle / İlce: </b> " + e.features[0].properties.bursa_mahalle_ad + " / " + e.features[0].properties.bursa_ilce_ad +  "<div>" +  '<img src="' + e.features[0].properties.gorsel_link + '" alt="" />' + "</div>"


      )
      .addTo(mapRef.current);

  };

  useEffect(() => {

    console.log("Harita Başladi!");
    mapRef.current = new maplibregl.Map({
      container: mapContainer.current,
      style: mapParams.style,
      center: [mapParams.lng, mapParams.lat],
      zoom: mapParams.zoom,
    });

    

    mapRef.current.on("moveend", handleMapMove);
    
    mapRef.current.on("click", "tarihi-yapi" , handlePointClick);

    return () => {
      mapRef.current.off("moveend", handleMapMove);
      mapRef.current.remove();
    };
  }, [mapParams, mapRef, layers]);

  return (
    <div className="map-wrap">



      <div className="map" ref={mapContainer} />

      <nav id="filter-group" className="filter-group"></nav>
      <BasemapSwitch />
      {children}
    </div>
  );
}

export default Map;