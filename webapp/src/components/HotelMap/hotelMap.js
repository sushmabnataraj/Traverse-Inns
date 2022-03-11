import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import * as parkData from "./../../data/data.json";

export default function App({ hoteldata }) {
  function Map() {
    const styles = () => ({
      root: {
        width: "100%",
        margin: "30px",
        display: "flex",
        flexDirection: "row",
      },
      mapTitle: {
        fontWeight: "800",
      },
    });

    const [selectedHotel, setSelectedHotel] = useState(null);
    const markerImage =
      "http://www.mapsmarker.com/wp-content/uploads/leaflet-maps-marker-icons/bar_coktail.png";

    useEffect(() => {
      const listener = (e) => {
        if (e.key === "Escape") {
          setSelectedHotel(null);
        }
      };
      window.addEventListener("keydown", listener);

      return () => {
        window.removeEventListener("keydown", listener);
      };
    }, []);
    let latitude;
    let longitude;
    if (hoteldata[0]) {
      latitude = hoteldata[0].loc.coordinates[0];
      longitude = hoteldata[0].loc.coordinates[1];
    } else {
      latitude = 42.35371711031502;
      longitude = -71.06105761272826;
    }
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: latitude, lng: longitude }}
        // defaultCenter={{ lat: 42.35371711031502, lng: -71.06105761272826 }}
        defaultOptions={{ mapTypeControl: false, scrollwheel: false }}
      >
        {hoteldata.map((hotel) => (
          <Marker
            key={hotel.id}
            position={{
              lat: hotel.loc.coordinates[0],
              lng: hotel.loc.coordinates[1],
            }}
            onClick={() => {
              setSelectedHotel(hotel);
            }}
            icon={{
              url: "/price6.png",
              scaledSize: new window.google.maps.Size(40, 30),
            }}
            label={{
              text: `$${hotel.pricing}`,
              color: "black",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          />
        ))}

        {selectedHotel && (
          <InfoWindow
            onCloseClick={() => {
              setSelectedHotel(null);
            }}
            position={{
              lat: selectedHotel.loc.coordinates[0],
              lng: selectedHotel.loc.coordinates[1],
            }}
          >
            <div>
              <h3>{selectedHotel.name}</h3>
              <p>{selectedHotel.description}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }

  const MapWrapped = withScriptjs(withGoogleMap(Map));
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA9fdoDLBhwhliHUMFcX8ldVkk8m1YYVqQ
        `}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
