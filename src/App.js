import { useEffect, useState } from "react";
import { Geolocation } from "@capacitor/geolocation";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function App() {
  const [coords, setCoords] = useState({});
  const [permision, setPermision] = useState();

  const CurrentPosition = async () => {
    await Geolocation.getCurrentPosition().then((response) => {
      console.log(response.coords);
      setCoords(response.coords);
    });
  };

  const permisions = async () => {
    await Geolocation.checkPermissions().then((response) => {
      console.log(response.location);
      setPermision(response.location);
    });
  };

  useEffect(() => {
    CurrentPosition();
    permisions();
    console.log(coords);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Capacitor Geolocation</h1>
      <h2>Latitude : {coords.latitude}</h2>
      <h2>Longitude : {coords.longitude}</h2>
      <h2>Permision : {permision}</h2>
      <Map
        mapboxAccessToken="<Mapbox access token>"
        initialViewState={{
          longitude: coords.longitude,
          latitude: coords.latitude,
          zoom: 14,
        }}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>
  );
}

export default App;
