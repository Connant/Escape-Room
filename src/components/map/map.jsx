import React from 'react';
import { GoogleMap, Marker, LoadScript} from '@react-google-maps/api';

const containerStyle = {
  width: '649px',
  height: '336px'
};

const center = {
  lat:  59.9681958,
  lng: 30.3159353
};

const SCALE = 17;

const Map = () => {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAMdPIeKksoyzyMN6Cjo6Pen19l-wm7z9s"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={SCALE}

      >
        <Marker position={{ lat: 59.9681958, lng: 30.315935 }}/>
        <></>
      </GoogleMap>
      </LoadScript>
  );
};

export default Map;
