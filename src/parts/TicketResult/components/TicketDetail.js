import React from "react";
import Col from "../../../components/Col";

export default function TicketDetail(props) {
  return (
    <Col>
      <h3>{props.heading}</h3>
      <p className={props.className}>{props.title}</p>
    </Col>
  );
}
