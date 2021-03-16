import React from "react";

import Row from "../../../components/Row";
import Col from "../../../components/Col";

import User from "../../../assets/img/user.png";
import Star from "../../../assets/img/star.png";

export default function ProfileInfo(props) {
  return (
    <Col className="col-lg-5 col-xl-4 d-none d-md-block">
      <div className="info d-block pt-4">
        <Row className="px-5">
          <Col className="pl-0">
            <h1>Info</h1>
          </Col>
          <Row className="d-flex align-items-center justify-content-end pr-3 dot">
            <div className="d-flex">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Row>
        </Row>
        <Row className="flex-column px-5 mt-4">
          <Col className="d-flex justify-content-center">
            <img src={User} width="136" alt="User" className="rounded-circle" />
          </Col>
          <Col className="d-flex justify-content-center text-center mt-2">
            <h2>{props.data}</h2>
          </Col>
          <Col className="d-flex justify-content-center text-center">
            <p>Moviegoers</p>
          </Col>
        </Row>
        <hr className="mt-4" />
        <Row className="mx-5 mt-4">
          <Col>
            <h3 className="mb-4">Loyalty Points</h3>
            <div className="moviegoers pl-3 pt-3">
              <div></div>
              <div></div>
              <h4>Moviegoers</h4>
              <p className="mt-4">
                320 <span>points</span>
              </p>
              <img src={Star} width="51" alt="Star" />
            </div>
            <h5 className="mt-4 text-center">180 points become a master</h5>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: ` 45%` }}
                aria-valuenow="45"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
}
