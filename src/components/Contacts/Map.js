import React from "react";
import {GoogleMap} from 'react-google-maps';
// import withGoogleMap from "react-google-maps/lib/withGoogleMap";
// import withScriptjs from "react-google-maps/lib/withScriptjs";


export default function SimpleMap(){
  return (
      <GoogleMap
      defaultZoom={10}
      defaultCenter={{lat: 0, lng: 0}}
      >

      </GoogleMap>
  );
}

// const WrappedMap = withScriptjs(withGoogleMap(SimpleMap))