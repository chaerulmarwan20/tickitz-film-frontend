import React from "react";

export default function TicketDetailBitmap(props) {
  return (
    <div className={props.className}>
      <h3>{props.heading}</h3>
      <p>{props.title}</p>
    </div>
  );
}
