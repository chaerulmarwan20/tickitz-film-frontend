import React from "react";
import propTypes from "prop-types";

export default function Card(props) {
  const className = ["card"];
  className.push(props.className);
  return <div className={className.join(" ")}>{props.children}</div>;
}

Card.propTypes = {
  className: propTypes.string,
};
