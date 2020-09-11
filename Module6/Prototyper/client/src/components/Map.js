import React, { useContext, useState, useRef,useCallback } from "react";
import styled from "styled-components";
import Navbar from "../components/NavBar";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutoComplete, {
  getGeocode,
  geoLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import { ProtestContext } from "../context/ProtestProvider";

const NavContainer = styled.div`
  z-index: 100;
  position: fixed;
`;

const GeoContainer = styled.div`
  button {
    width: 100px;
    height: 41px;
    position: absolute;
    z-index: 1;
    left: 1200px;
    top: 18px;
  }
`;

const SearchBox = styled.div`
  positoin: absolute;
  top: 1rem;
  left: 50%;
  width: 100%

`

const libaries = ["places"];
const mapContainerStyle = {
  width: "90vw",
  height: "100vh",
  position: "absolute",
  left: "80px",
};

export default function Maps(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    libaries,
  });
  const center = {
    lat: 45,
    lng: -111,
  };
  const [selected, setSelected] = useState(null);
  const { protestState } = useContext(ProtestContext);

  const mapRef = React.useRef();

  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  
  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "error loading maps";
  if (!isLoaded) return "Loading Maps";
  require("dotenv").config();

  return (
    <div>
      <Locate panTo={panTo} />
      <NavContainer>
        <Navbar />
      </NavContainer>
      <Search />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        onLoad={onMapLoad}
      >
        {protestState.map((protest) => (
          <Marker
            key={protest._id}
            position={{ lat: protest.lat, lng: protest.lng }}
            onClick={() => {
              setSelected(protest);
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{
              lat: selected.lat,
              lng: selected.lng,
            }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <div>
              <h1>{selected.title}</h1>
              <p>
                {selected.where} {selected.when}
              </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}

function Search() {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutoComplete({

    requestOptions: {
      location: { lat: () => 45, lng: () => -111 },
      radius: 200 * 1000,
    },
    
  });
  return (
    <div className="search">
      <Combobox
        onSelect={(address) => {
          console.log(address);
        }}
      >
        <ComboboxInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Enter an address"
        />
        <ComboboxPopover>
          {status === "OK" && data.map(({id, description}) => (
            <ComboboxOption key={id} value={description}/>
          ))}
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

function Locate({ panTo }) {
  return (
    <GeoContainer>
      <button
        onClick={() => {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
            },
            () => null
          );
        }}
      >
        geolocation
      </button>
    </GeoContainer>
  );
}
