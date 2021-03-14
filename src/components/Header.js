import React from "react";
import propTypes from "prop-types";

export default function Header(props) {
  return <header className={props.className}>{props.children}</header>;
}

Header.protoTypes = {
  className: propTypes.string,
};
