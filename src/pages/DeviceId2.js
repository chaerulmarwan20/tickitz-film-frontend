import React, { useState, useEffect } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs-pro";

const DeviceId2 = () => {
  const [data, setData] = useState(false);
  const fpPromise = FingerprintJS.load({
    apiKey: "6GBXCYGxWqE367js5Fj5",
  });

  const getDeviceId = async () => {
    const fp = await fpPromise;
    const result = await fp.get({
      extendedResult: true,
    });
    if (result) {
      console.info("fingerprintjs", result);
      setData(result);
    }
  };

  const getCoordinate = new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position.coords);
      },
      (error) => {
        resolve({
          latitude: 0,
          longitude: 0,
        });
      }
    );
  });

  useEffect(() => {
    getDeviceId();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getCoordinate.then((result) => {
      console.info("navigator latitude", result.latitude);
      console.info("navigator longitude", result.longitude);
    });
    // eslint-disable-next-line
  }, []);

  if (!data) return <div>Loading...</div>;
  return <div>Device Id: {data.visitorId}</div>;
};

export default DeviceId2;
