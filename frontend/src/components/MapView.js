import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px'
};

export default function MapView({ location }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBPc0M210VAaBc--os7__3LmdfdCpNCdgg'
  });

  const center = {
    lat: 51.5074, // fallback
    lng: -0.1278,
  };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      <Marker position={center} />
    </GoogleMap>
  ) : <div>Loading Map...</div>;
}