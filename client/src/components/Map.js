import styled from "styled-components";
import { useEffect, useState } from "react";


const Map = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
    googleMapScript.async = true;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      const options = {
        center: { lat: 44.2312, lng: -76.4860 },
        zoom: 12,
      };

      const map = new window.google.maps.Map(document.getElementById('map'), options);

      setMap(map);
    });
  }, []);

  return <MapWrapper id="map" />;
};

const MapWrapper = styled.div`
  width: 100%;
  height: 400px;
`;

export default Map;
