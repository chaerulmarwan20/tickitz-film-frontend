import React, { useEffect } from "react";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";

function App() {
  const { isLoading, error, data } = useVisitorData();

  useEffect(() => {
    if (data) console.info(data);
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else if (data) {
    return <div>Device Id: {data ? data.visitorId : ""}</div>;
  }
  return null;
}

export default App;
