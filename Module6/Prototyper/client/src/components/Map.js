
import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/NavBar'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import {ProtestContext} from '../context/ProtestProvider'

const PageContainer = styled.div`
`
const NavContainer = styled.div`
  z-index:100;
  position: fixed;
`
const MapContainer = styled.div`
  z-index: -1;
`

function Maps(props) {
  const mapStyles = {
    width: '100%',
    height: '100%',
    marginLeft: '-10px'
  };

  Maps.defaultProps = {
    lat: "47",
    lng: "49"
  }

  

  const {protestState} = useContext(ProtestContext)
  
  


  return (
    <PageContainer>
      <NavContainer>
        <Navbar />
      </NavContainer>
      <MapContainer>
        <h1>Maps</h1>
        <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: props.location.placeProps.lat , lng: props.location.placeProps.lng }}
        >
          <Marker id = "first-position" position={{ lat: props.location.placeProps.lat, lng: props.location.placeProps.lng }} />

        </Map>
      </MapContainer>

    </PageContainer>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCHza6eUiHFGjQGu5d7K-RXvS0c2-h0j44'
})(Maps);
