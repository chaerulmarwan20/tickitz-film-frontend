import React from "react";
import propTypes from "prop-types";

export default function Aside(props) {
  return <aside className={props.className}>{props.children}</aside>;
}

Aside.propTypes = {
  className: propTypes.string,
};
