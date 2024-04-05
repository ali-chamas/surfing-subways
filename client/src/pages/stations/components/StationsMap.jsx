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
          longitude: 35.49548,
          latitude: 33.88863,
          zoom: 11,
        }}
        style={{ width: "100%", height: " calc(50vh)" }}
        mapStyle="https://api.maptiler.com/maps/streets/style.json?key=qNYCGSlfvbI5nEODpHvQ"
      >
        <NavigationControl position="top-left" />
        {stations.map((station, i) => (
          <div className="flex col gap" key={i}>
            <Marker
              latitude={station.latitude}
              longitude={station.longitude}
              color="rgb(255, 174, 0)"
            />
            <Marker
              latitude={station.latitude}
              longitude={station.longitude}
              children={station.name}
              style={{ color: "black", fontSize: "18px" }}
            />
          </div>
        ))}
      </Map>
    </div>
  );
};

export default StationsMap;
