import { useEffect, useState } from "react";
import { Geolocation } from "@capacitor/geolocation";

function App() {
  const [coords, setCoords] = useState({});

  const CurrentPosition = async () => {
    await Geolocation.getCurrentPosition().then((response) => {
      console.log(response.coords);
      setCoords(response.coords);
    });
  };

  useEffect(() => {
    CurrentPosition();
    console.log(coords);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Capacitor Geolocation</h1>
      <h2>Latitude : {coords.latitude}</h2>
      <h2>Longitude : {coords.longitude}</h2>
    </div>
  );
}

export default App;
