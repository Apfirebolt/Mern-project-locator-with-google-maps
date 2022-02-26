import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import React, { useState, useEffect } from "react";

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.latitude, lng: props.longitude }}
    onClick={(e) => props.onMarkerClick(e)}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.latitude, lng: props.longitude }} />}
  </GoogleMap>
))

export default MyMapComponent;