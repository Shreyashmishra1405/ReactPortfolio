import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Annotation
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const MapChart = () => {
  return (
    <ComposableMap projectionConfig={{ scale: 120 }} style={{cursor:"pointer"}}>
      <Sphere stroke="black" strokeWidth={2} />
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo}  stroke="black" fill="#2C065D"
            strokeWidth={2} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[78.652, 11.127]}
        dx={-30}
        dy={-10}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"I'm here"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
