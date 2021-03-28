import { React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import propTypes from "prop-types";
import axios from "axios";
import Swal from "sweetalert2";

import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Nav from "./Nav";
import Input from "./Input";
import Button from "./Button";

import Logo from "../assets/img/Tickitz 1.png";
import Icon from "../assets/img/ic_dropdown.png";
import Search from "../assets/img/ic-search.png";

export default function Navbar(props) {
  const Url = process.env.REACT_APP_API_URL;
  const ImgUrl = process.env.REACT_APP_API_IMG;
  const menu = [
    {
      title: "Movies",
      href: "/",
    },
    {
      title: "Cinemas",
      href: "#",
    },
    {
      title: "Buy Ticket",
      href: "/order-page",
    },
  ];
  const [state, setState] = useState({
    location: [],
  });
  const history = useHistory();
  const ImgUser = localStorage.getItem("image");

  useEffect(() => {
    axios.get(`${Url}/cities`).then((res) => {
      setState({
        location: res.data.data,
      });
    });
  }, [Url]);

  const HandleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      showDenyButton: true,
      confirmButtonText: `Logout!`,
      confirmButtonColor: "#ea2e57",
      denyButtonText: "Cancel",
      denyButtonColor: `#5f2eea`,
      focusDeny: true,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        history.push("/");
      } else if (result.isDenied) {
        Swal.fire({
          title: "Logout canceled",
          text: "",
          icon: "info",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      }
    });
  };

  return (
    <Nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <Container>
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="Tickitz" />
        </Link>
        <Button
          className="navbar-toggler"
          type="button"
          toggle="collapse"
          target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex mr-auto">
            <form
              className={`d-block d-lg-none form-inline mb-4 mt-3 form-search ${
                props.isPayment ? "payment" : ""
              } ${props.isProfile ? "profile" : ""}`}
            >
              <Input type="text" name="search" placeholder="Search..." />
            </form>
            {menu.map((data, index) => {
              return (
                <li key={index} className="nav-item">
                  <Link className="nav-link my-2 my-lg-0" to={data.href}>
                    {data.title}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item dropdown d-lg-none">
              <Link
                className="nav-link mt-4 mb-2 my-lg-0"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                Location <img src={Icon} width="18px" alt="Icon" />
              </Link>
              <div
                className="dropdown-menu mb-3"
                aria-labelledby="navbarDropdown"
              >
                {state.location.map((data, index) => {
                  return (
                    <Link key={index} className="dropdown-item" to="#">
                      {data.name}
                    </Link>
                  );
                })}
              </div>
            </li>
            {localStorage.getItem("IsLogin") === "true" ? (
              <li className="nav-item dropdown d-lg-none">
                <Link
                  className="nav-link mt-4 mb-2 my-lg-0"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                >
                  Account <img src={Icon} width="18px" alt="Icon" />
                </Link>
                <div
                  className="dropdown-menu mb-3"
                  aria-labelledby="navbarDropdown"
                >
                  <Link className="dropdown-item" to="/profile-page">
                    Settings
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#" onClick={HandleLogout}>
                    Logout
                  </Link>
                </div>
              </li>
            ) : (
              <li className="nav-item mt-3">
                <Link className="nav-link my-2 my-lg-0" to="/sign-up">
                  Sign Up
                </Link>
              </li>
            )}
            <Row className="d-lg-none">
              <Col className="d-flex align-items-center justify-content-center">
                <p className="copyright-nav">
                  © 2021 Tickitz. All Rights Reserved.
                </p>
              </Col>
            </Row>
          </ul>
          <div className="dropdown d-none d-lg-block">
            <Link
              className="nav-link"
              to="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
            >
              Location <img src={Icon} width="18px" alt="Icon" />
            </Link>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {state.location.map((data, index) => {
                return (
                  <Link key={index} className="dropdown-item" to="#">
                    {data.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <img
            src={Search}
            className="ic-search d-none d-lg-block mx-5"
            alt="Search"
          />
          {localStorage.getItem("IsLogin") === "true" ? (
            <div className="dropdown">
              <Link
                className="nav-link"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
              >
                <img
                  src={`${ImgUrl}${ImgUser}`}
                  className="rounded-circle d-none d-lg-block img-user"
                  alt="User"
                />
              </Link>
              <div
                className="dropdown-menu user"
                aria-labelledby="dropdownMenuLink"
              >
                <Link className="dropdown-item" to="/profile-page">
                  Account Settings
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#" onClick={HandleLogout}>
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <Link className="btn btn-sign-up d-none d-lg-block" to="/sign-up">
              Sign Up
            </Link>
          )}
        </div>
      </Container>
    </Nav>
  );
}

Navbar.propTypes = {
  isHomepage: propTypes.bool,
  isPayment: propTypes.bool,
  isProfile: propTypes.bool,
};
