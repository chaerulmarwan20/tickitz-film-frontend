import { React, Component, Fragment } from "react";
import propTypes from "prop-types";

class Input extends Component {
  render() {
    const className = ["form-control"];
    className.push(this.props.className);
    if (this.props.type === "date") {
      return (
        <input
          type={this.props.type}
          className={className.join(" ")}
          id={this.props.name}
          name={this.props.name}
          value={this.props.value}
        />
      );
    } else if (this.props.type === "checkbox") {
      return (
        <Fragment>
          <input
            type={this.props.type}
            className="ml-1"
            id={this.props.name}
            name={this.props.name}
          />
          <label htmlFor={this.props.name} className="ml-3">
            {this.props.label}
          </label>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <label htmlFor={this.props.name}>{this.props.label}</label>
          <input
            type={this.props.type}
            className={className.join(" ")}
            id={this.props.name}
            name={this.props.name}
            placeholder={this.props.placeholder}
          />
        </Fragment>
      );
    }
  }
}

Input.propTypes = {
  className: propTypes.string,
};

export default Input;
