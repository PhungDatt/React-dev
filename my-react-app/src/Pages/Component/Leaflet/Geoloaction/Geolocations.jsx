import React from 'react';
import { useState }  from 'react';
import {useMapEvents, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';
  
//////GEO location người dùng ////////
const LocationIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });



function   LocationMarker() {
    const [position, setPosition] = useState(null)
  
    const map = useMapEvents({
  
      click() {
        map.locate  ()
       
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
      
    })
  
    return position === null ? null : (
      <Marker position={position} icon={LocationIcon}>
        <Popup> <b>Đây là tọa độ của bạn kinh độ {position.lat} và vĩ độ {position.lng} địa chỉ.</b></Popup>
      </Marker>
    )
  };

export default LocationMarker;
  
    