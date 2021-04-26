import React from "react";
import propTypes from "prop-types";

export default function Nav(props) {
  return <nav className={props.className}>{props.children}</nav>;
}

Nav.propTypes = {
  className: propTypes.string,
};
