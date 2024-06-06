import { useState } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import location_icon from '../assets/current-location-icon.png';

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  const handleLocateClick = () => {
    map.locate();
  };

  return (
    <>
      <div onClick={handleLocateClick} >
        <button style={{cursor:'pointer'}}>
          <img src={location_icon} alt="Current Location" height='20px' />
        </button>
      </div>

      {position === null ? null : (
        <Marker position={position}>
          <Popup>You are here</Popup>
        </Marker>
      )}
    </>
  );
}

export default LocationMarker;