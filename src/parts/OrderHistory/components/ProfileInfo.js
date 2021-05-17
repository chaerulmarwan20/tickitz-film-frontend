import React from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import Row from "../../../components/Row";
import Col from "../../../components/Col";

import Star from "../../../assets/img/star.png";

export default function ProfileInfo(props) {
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const history = useHistory();

  const handleClickMenu = () => {
    Swal.fire({
      title: "What do yo want?",
      showDenyButton: true,
      confirmButtonText: `Account Settings`,
      confirmButtonColor: "#5f2eea",
      denyButtonText: "Order History",
      denyButtonColor: `#5f2eea`,
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/profile-page");
      } else if (!result.isConfirmed && result.dismiss !== "backdrop") {
        history.push("/order-history");
      }
    });
  };

  return (
    <Col className="col-lg-5 col-xl-4 d-none d-md-block">
      <div className="info d-block pt-4">
        <Row className="px-5">
          <Col className="pl-0">
            <h1>Info</h1>
          </Col>
          <Col className="d-flex align-items-center justify-content-end pr-0 ml-auto dot">
            <div className="d-flex" onClick={() => handleClickMenu()}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Col>
        </Row>
        <Row className="flex-column px-5 mt-4">
          <Col className="d-flex justify-content-center">
            {props.img === undefined ? (
              ""
            ) : (
              <img
                src={`${ImgUrl}${props.img}`}
                width="136"
                height="136"
                className="rounded-circle"
                alt="User"
              />
            )}
          </Col>
          <Col className="d-flex justify-content-center text-center mt-2">
            <h2>
              {props.user === "firstName lastName"
                ? "Your full name"
                : props.user}
            </h2>
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
                0 <span>points</span>
              </p>
              <img src={Star} width="51" alt="Star" />
            </div>
            <h5 className="mt-4 text-center">400 points become a master</h5>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `0%` }}
                aria-valuenow="0"
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
