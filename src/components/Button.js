import React from "react";
import propTypes from "prop-types";

export default function Button(props) {
  return (
    <button type={props.type} className={props.className}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: propTypes.string,
};
