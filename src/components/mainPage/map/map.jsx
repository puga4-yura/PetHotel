import React from 'react';
import s from './map.module.scss'
import {GoogleApiWrapper} from 'google-maps-react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

function Map() {
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
    </GoogleMap>
    )

}

const WrappedMap = withScriptjs(withGoogleMap(Map))



export default WrappedMap;
/*
let Map = () => {
  return(
    <section className={s.mapContainer}>

    </section>
  )
}

export default Map;*/
