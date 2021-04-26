import React from "react";
import propTypes from "prop-types";

export default function Section(props) {
  return <section className={props.className}>{props.children}</section>;
}

Section.propTypes = {
  className: propTypes.string,
};
