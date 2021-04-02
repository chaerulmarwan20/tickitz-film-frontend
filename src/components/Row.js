import React from "react";
import propTypes from "prop-types";

export default function Row(props) {
  const className = ["row"];
  className.push(props.className);
  return (
    <div className={className.join(" ")} onClick={props.onClick}>
      {props.children}
    </div>
  );
}

Row.protoTypes = {
  className: propTypes.string,
};
