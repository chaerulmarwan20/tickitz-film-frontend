import React from "react";
import propTypes from "prop-types";

export default function Button(props) {
  return (
    <button
      type={props.type}
      className={props.className}
      data-toggle={props.toggle}
      data-target={props.target}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: propTypes.string,
};
