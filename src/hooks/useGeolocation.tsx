import { useEffect, useState } from "react";
import { ILocation } from "../interfaces";

export const useGeolocation = () => {
  const [userLocation, setUserLocation] = useState<ILocation | null>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not available.");
      return;
    }

    const handleSuccess = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setUserLocation({ lat: latitude, lon: longitude });
    };

    const handleError = (error: GeolocationPositionError) => {
      console.error(error);
      setError("Cannot get location.");
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
  }, []);

  return { userLocation, error };
};
