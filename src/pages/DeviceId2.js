import React, { useState } from "react";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";

const DeviceId2 = () => {
  const [data, setData] = useState(false);
  const { isLoading, error, getData } = useVisitorData(
    { tag: "device-id" },
    { immediate: false }
  );

  const handleClick = (e) => {
    e.preventDefault();
    getData().then((data) => {
      if (data) setData(data);
    });
  };

  if (isLoading) return <div>Loading...</div>;
  else if (error) return <div>{error.message}</div>;
  return (
    <div>
      <button type="button" onClick={handleClick}>
        Get Device Id
      </button>
      {data && <div>Device Id: {data.visitorId}</div>}
    </div>
  );
};

export default DeviceId2;
