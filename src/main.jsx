import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MapProvider } from './contexts/MapContext';
import { LayerProvider } from './contexts/LayerContext';
import 'maplibre-gl/dist/maplibre-gl.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MapProvider>
    <LayerProvider>
      <App />
    </LayerProvider>
  </MapProvider>
); 