import './App.css'
import MapContainer from './components/Map/MapContainer'
import Map from './components/Map/Map'
import Layer from './components/Map/Layers/Layer'
import Navbar from './components/Common/Navbar/Navbar'

function App() {


  return (
    <>
    <Navbar></Navbar>

      <MapContainer>
        <Map>
          <Layer/>
        </Map>
      </MapContainer>


    </>
  )
}

export default App
