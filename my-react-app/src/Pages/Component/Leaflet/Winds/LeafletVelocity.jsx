import "leaflet-velocity/dist/leaflet-velocity.css";
import "leaflet-velocity/dist/leaflet-velocity.js";
import { forwardRef, useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";

import './wind-gobal.json';


                                                                /*================================================
                                                                Call - APi radar hướng gió
                                                                ================================================= */
const LeafletVelocity = forwardRef((_props, ref) => {

  const map = useMap();// cretate map
  // hook
  useEffect(() => {
    if (!map) return;

    let mounted = true;
    let windGlobalLayer;
    
    // call data
    fetch("https://onaci.github.io/leaflet-velocity/wind-global.json")
      .then((response) => response.json())
      .then((data) => {
        if (!mounted) return;
        // create layer winds
        windGlobalLayer = L.velocityLayer({
          displayValues: true,
          displayOptions: {
            velocityType: "GBR Water",
            position: "bottomleft",
            emptyString: "No water data"
          },
          data: data,
         // set options data
           minVelocity: 0, // used to align color scale
           maxVelocity: 10, // used to align color scale
           opacity: 0.97, // layer opacity, default 0.97
          velocityScale: 0.005, // arbitrary default 0.005
          colorScale: [255, 140, 0] // define your own array of hex/rgb colors
        });
        // adds
        if (ref.current && windGlobalLayer)
          ref.current.addOverlay(windGlobalLayer, "Radar - Hướng gió");
      })
      .catch((err) => console.log(err));

    // type with object
    return () => {
      mounted = false;
      if (ref.current) {    
        ref.current.removeOverlay(windGlobalLayer);
      }
    };
  }, [map]);

  return null;
});

export default LeafletVelocity;
