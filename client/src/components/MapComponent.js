import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 25.473, lng: 81.878 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 25.473, lng: 81.878 }} />}
  </GoogleMap>
))

export default MyMapComponent;