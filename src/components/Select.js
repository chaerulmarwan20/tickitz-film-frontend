import React from "react";
import propTypes from "prop-types";

export default function Select(props) {
  const className = ["custom-select"];
  className.push(props.className);
  return (
    <select
      className={className.join(" ")}
      name={props.name}
      id={props.name}
      onChange={props.onChange}
    >
      {props.option.map((data, index) => {
        return data.name ? (
          <option key={index} value={data.name}>
            {data.name}
          </option>
        ) : (
          <option key={index} value={data}>
            {data}
          </option>
        );
      })}
    </select>
  );
}

Select.propTypes = {
  className: propTypes.string,
  option: propTypes.array,
};
