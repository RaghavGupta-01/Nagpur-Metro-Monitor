import React from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import './App.css';
import EWC_Data from "./stations/east-west-corridor.json"
import NSC_Data from "./stations/north-south-corridor.json"


function App() {
  return (
    <div className="App">
      <MapContainer center={[21.1414478, 79.0824843]} zoom={15} scrollWheelZoom={true}>
        
        <TileLayer
          attribution='&copy; <a href="https://www.thunderforest.com/maps/transport/">Thunderforest</a> contributors'
          url="https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png"
        />
        {/* leaflet providers- Jawg.Dark and Jawg.Light basemaps */}
        {
          EWC_Data.map((station) => (<CircleMarker center={[station.gps.lat, station.gps.lng]} radius={10}>
            <Popup>
              {station.name}
            </Popup>
          </CircleMarker>))
        }
        {
          NSC_Data.map((station) => (<CircleMarker center={[station.gps.lat, station.gps.lng]} radius={10}>
            <Popup>
              {station.name}
            </Popup>
          </CircleMarker>))
        }
       
      </MapContainer>
    </div>
  );
}

export default App;
