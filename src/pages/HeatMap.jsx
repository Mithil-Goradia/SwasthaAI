import React, { useState } from 'react';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import { HeatmapLayer } from 'react-leaflet-heatmap-layer-v3';
import 'leaflet/dist/leaflet.css';
import Navbar from '../components/Navbar';

const HeatMap = () => {
  const heatmapData = [
    [28.6139, 77.2090, 0.8], // Delhi
    [19.0760, 72.8777, 0.6], // Mumbai
    [13.0827, 80.2707, 0.7], // Chennai
    [22.5726, 88.3639, 0.5], // Kolkata
    [12.9716, 77.5946, 0.9], // Bangalore
    [23.0225, 72.5714, 0.4], // Ahmedabad
  ];

  const fakeDiseaseData = {
    "Delhi": "High cases of Respiratory issues",
    "Mumbai": "High cases of Skin allergies",
    "Chennai": "High cases of Digestive disorders",
    "Kolkata": "High cases of Anxiety & Stress",
    "Bangalore": "High cases of Insomnia",
    "Ahmedabad": "High cases of Joint pain",
  };

  const cityMarkers = [
    { name: "Delhi", coords: [28.6139, 77.2090] },
    { name: "Mumbai", coords: [19.0760, 72.8777] },
    { name: "Chennai", coords: [13.0827, 80.2707] },
    { name: "Kolkata", coords: [22.5726, 88.3639] },
    { name: "Bangalore", coords: [12.9716, 77.5946] },
    { name: "Ahmedabad", coords: [23.0225, 72.5714] },
  ];

  return (
    <div>
        <Navbar/>
        <div className="w-full flex flex-col items-center gap-4 mt-6">
      <h2 className="text-2xl font-semibold text-green-800">
        🌡️ Ai Heatmap for Regional Crisis Detection
      </h2>
      <p className="text-sm text-gray-600 max-w-lg text-center">
        This heatmap showcases the disease activity and intensity in various regions. 
        Click on markers to see commonly reported ailments in each city.
      </p>
      <div className="w-[600px] h-[400px] rounded-2xl shadow-lg border border-gray-300 overflow-hidden">
        <MapContainer
          center={[22.9734, 78.6569]}
          zoom={5}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          />
          <HeatmapLayer
            fitBoundsOnLoad
            fitBoundsOnUpdate
            points={heatmapData}
            longitudeExtractor={m => m[1]}
            latitudeExtractor={m => m[0]}
            intensityExtractor={m => m[2]}
          />
          {cityMarkers.map(city => (
            <Marker key={city.name} position={city.coords}>
              <Popup>
                <strong>{city.name}</strong><br />
                {fakeDiseaseData[city.name]}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
    </div>
  );
};

export default HeatMap;
