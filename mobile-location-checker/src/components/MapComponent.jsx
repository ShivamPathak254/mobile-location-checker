

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Marker icon fix (otherwise default icon nahi dikhata React me)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const MapComponent = ({ locationData }) => {
  const { lat, lng } = locationData.coordinates;

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">📍 Approximate Location</h3>
      <MapContainer
        center={[lat, lng]}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
        className="rounded-xl"
      >
        {/* OpenStreetMap Tiles (Free) */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />

        {/* Marker */}
        <Marker position={[lat, lng]}>
          <Popup>
            {locationData.city}, {locationData.state}, {locationData.country}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
