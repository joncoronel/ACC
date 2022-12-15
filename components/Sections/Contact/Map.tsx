import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import styles from "./Map.module.scss";
import { useMemo } from "react";

export default function Map() {
  const center = useMemo(() => ({ lat: 33.77499, lng: -117.901945 }), []);
  const handleClick = () => {
    window.open(
      "https://www.google.com/maps/place/Advanced+Car+Creations/@33.7750044,-117.9041331,17z/data=!4m12!1m6!3m5!1s0x80dcd81863a56d43:0x8b389526507b4adf!2sAdvanced+Car+Creations!8m2!3d33.7749616!4d-117.9019493!3m4!1s0x80dcd81863a56d43:0x8b389526507b4adf!8m2!3d33.7749616!4d-117.9019493"
    );
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });
  return (
    <>
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <GoogleMap
          zoom={12}
          center={center}
          mapContainerClassName={styles.mapContainer}
          options={{
            gestureHandling: "greedy",
          }}
        >
          <MarkerF
            clickable
            onClick={handleClick}
            position={center}
            title={"ACC"}
          />
        </GoogleMap>
      )}
    </>
  );
}
