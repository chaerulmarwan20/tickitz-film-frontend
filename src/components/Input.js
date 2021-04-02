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
          onChange={this.props.onChange}
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
            onChange={this.props.onChange}
            checked={this.props.checked}
          />
          <label htmlFor={this.props.name} className="ml-3">
            {this.props.label}
          </label>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <label htmlFor={this.props.name} className={this.props.classLabel}>
            {this.props.label}
          </label>
          <input
            type={this.props.type}
            className={className.join(" ")}
            id={this.props.name}
            name={this.props.name}
            value={this.props.value}
            placeholder={this.props.placeholder}
            onChange={this.props.onChange}
            autoFocus={this.props.autoFocus && true}
          />
        </Fragment>
      );
    }
  }
}

Input.propTypes = {
  className: propTypes.string,
  autoFocus: propTypes.bool,
};

export default Input;
