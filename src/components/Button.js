import React from "react";
import propTypes from "prop-types";

export default function Button(props) {
  return (
    <button
      type={props.type}
      className={props.className}
      data-toggle={props.toggle}
      data-target={props.target}
      onClick={props.onClick}
      disabled={props.disabled}
      data-content={props.content}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  className: propTypes.string,
};
