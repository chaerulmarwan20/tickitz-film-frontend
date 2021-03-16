import React from "react";

import Row from "../../../components/Row";

export default function OrderInfo(props) {
  return (
    <Row className="px-5 mt-3 justify-content-between">
      <h3>{props.heading}</h3>
      <p>{props.title}</p>
    </Row>
  );
}
