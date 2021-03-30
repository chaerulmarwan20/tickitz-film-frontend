import { React, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../configs/redux/actions/location";
import { getUser } from "../configs/redux/actions/user";
import propTypes from "prop-types";
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
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const history = useHistory();

  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.location);
  const { user } = useSelector((state) => state.user);

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

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getUser());
    }
  }, [dispatch]);

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
      } else {
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
                {location.map((data, index) => {
                  return (
                    <Link key={index} className="dropdown-item" to="#">
                      {data.name}
                    </Link>
                  );
                })}
              </div>
            </li>
            {localStorage.getItem("token") ? (
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
              <li className="nav-item mt-3 d-lg-none">
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
              {location.map((data, index) => {
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
          {localStorage.getItem("token") ? (
            <div className="dropdown">
              <Link
                className="nav-link"
                to="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
              >
                {user.image ? (
                  <img
                    src={`${ImgUrl}${user.image}`}
                    className="rounded-circle d-none d-lg-block img-user"
                    alt="User"
                  />
                ) : (
                  <img
                    src={`${ImgUrl}images/avatar.png`}
                    className="rounded-circle d-none d-lg-block img-user"
                    alt="User"
                  />
                )}
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
