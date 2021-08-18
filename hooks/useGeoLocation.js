import { useState, useEffect } from "react";

const useGeoLocation = () => {
  const [geoLocation, setGeoLocation] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        setGeoLocation(userPosition);
      });
    } else {
      setError("Your web browser does not support geolocation")
    }
  }, []);

  return [geoLocation, error];
};

export default useGeoLocation;
