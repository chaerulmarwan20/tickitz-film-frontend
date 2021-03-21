import { React, Fragment } from "react";

export default function MovieDetail(props) {
  return (
    <Fragment>
      {props.data.map((item, index) => {
        return (
          <Fragment key={index}>
            <h2>{item.heading}</h2>
            <p>{item.title}</p>
          </Fragment>
        );
      })}
    </Fragment>
  );
}
