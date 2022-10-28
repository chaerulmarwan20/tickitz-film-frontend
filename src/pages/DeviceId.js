import React, { useState, useEffect } from "react";
import FingerprintJS from "@fingerprintjs/fingerprintjs-pro";

const DeviceId = () => {
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
      console.info(result);
      setData(result);
    }
  };

  useEffect(() => {
    getDeviceId();
    // eslint-disable-next-line
  }, []);

  if (!data) return <div>Loading...</div>;
  return <div>Device Id: {data.visitorId}</div>;
};

export default DeviceId;
