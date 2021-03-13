import { React, Fragment } from "react";
import propTypes from "prop-types";

export default function InputForm(props) {
  const className = ["form-control"];
  className.push(props.className);
  return props.type === "checkbox" ? (
    <Fragment>
      <input
        type={props.type}
        className="ml-1"
        id={props.name}
        name={props.name}
      />
      <label htmlFor={props.name} className="ml-3">
        {props.label}
      </label>
    </Fragment>
  ) : (
    <Fragment>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type}
        className={className.join(" ")}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
      />
    </Fragment>
  );
}

InputForm.propTypes = {
  className: propTypes.string,
};
