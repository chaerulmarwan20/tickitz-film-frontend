import { React, Fragment } from "react";
import propTypes from "prop-types";

export default function InputForm(props) {
  const className = ["form-control"];
  className.push(props.className);
  return (
    <Fragment>
      <label for={props.for}>{props.textLabel}</label>
      <br />
      <input
        type={props.type}
        className={className.join(" ")}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
      />
    </Fragment>
  );
}

InputForm.propTypes = {
  className: propTypes.string,
};
