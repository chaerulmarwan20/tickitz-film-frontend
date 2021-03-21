import React from "react";

export default function MovieTitle(props) {
  return (
    <div className="d-flex flex-column">
      <h3>{props.heading}</h3>
      <p>{props.title}</p>
    </div>
  );
}
