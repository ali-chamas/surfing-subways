import React from "react";
import "../style.css";
import maplibregl from "maplibre-gl";
import Map, { NavigationControl, Marker } from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";
const StationsMap = ({ stations }) => {
  return (
    <div className="map-wrap">
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 16.62662018,
          latitude: 49.2125578,
          zoom: 12,
        }}
        style={{ width: "100%", height: " calc(50vh)" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=qNYCGSlfvbI5nEODpHvQ"
      >
        <NavigationControl position="top-left" />
        {stations.map((station, i) => (
          <Marker
            latitude={station.latitude}
            longitude={station.longtitude}
            color="rgb(255, 174, 0)"
          />
        ))}
      </Map>
    </div>
  );
};

export default StationsMap;
