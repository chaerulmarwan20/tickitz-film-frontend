import React from "react";

import Row from "../../../components/Row";

export default function PaymentInfo(props) {
  return (
    <Row className="justify-content-between align-items-center">
      <h2>{props.heading}</h2>
      <p>{props.title}</p>
      <hr />
    </Row>
  );
}
