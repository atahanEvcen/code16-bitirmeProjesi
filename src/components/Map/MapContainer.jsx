import { MapProvider } from "../../contexts/MapContext";


function MapContainer({children}) {
  return (
    

    <MapProvider>
      {children}
    </MapProvider>
  );
}

export default MapContainer;
