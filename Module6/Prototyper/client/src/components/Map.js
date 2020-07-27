
import React, { useContext, useState } from 'react'
import { useHistory } from "react-router-dom"
import styled from 'styled-components'
import Navbar from '../components/NavBar'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'
import { ProtestContext } from '../context/ProtestProvider'

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
  require('dotenv').config()


  const mapStyles = {
    width: '100%',
    height: '100%',
    marginLeft: '-10px'
  };




  return (
    <PageContainer>
      <NavContainer>
        <Navbar />
      </NavContainer>
      <MapContainer>
        <Map
          google={props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: props.location.state.lat, lng: props.location.state.lng }}
        >
          <Marker id="first-position" position={{ lat: props.location.state.lat, lng: props.location.state.lng }} />

        </Map>
      </MapContainer>

    </PageContainer>
  )
}

// Maps.defaultProps = {
//       lat: 45,
//       lng: 45
// }

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(Maps);
