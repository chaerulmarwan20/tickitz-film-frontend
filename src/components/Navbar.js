import { React, Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../configs/redux/actions/location";
import { getUser } from "../configs/redux/actions/user";
import { searchMoviesShowing } from "../configs/redux/actions/allMoviesShowing";
import propTypes from "prop-types";
import Swal from "sweetalert2";
import axios from "axios";

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

  const history = useHistory();

  const perPage = 2;

  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.location);
  const { user } = useSelector((state) => state.user);
  const { allMoviesShowing } = useSelector((state) => state.allMoviesShowing);

  const [showSearch, setShowSearch] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [query, setQuery] = useState("");

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
      href: "/all-movies-showing",
    },
  ];

  const handleIcClick = () => {
    if (showSearch === false) {
      setShowSearch(true);
    } else {
      setShowSearch(false);
    }
  };

  const handleFormChange = (event) => {
    setQuery(event.target.value);
    axios
      .get(
        `${Url}/movies/is-realese/?keyword=${event.target.value}&perPage=${perPage}`
      )
      .then((res) => {
        if (event.target.value === "") {
          setShowResult(false);
        } else {
          setShowResult(true);
        }
        dispatch(searchMoviesShowing(res.data.data));
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        }).then((result) => {
          setShowResult(false);
          if (result.isConfirmed) {
            setQuery("");
          } else {
            setQuery("");
          }
        });
      });
  };

  const handleLogout = () => {
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

  const handleClickMovie = (id) => {
    history.push(`/movie-detail/${id}`);
  };

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getUser());
    }
  }, [dispatch]);

  return (
    <Fragment>
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
                    <Link
                      className="dropdown-item"
                      to="#"
                      onClick={handleLogout}
                    >
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
            {showSearch === true && (
              <form className="form-inline d-none d-lg-block mb-4 mt-3 search">
                <Input
                  type="text"
                  name="search"
                  placeholder="Search..."
                  value={query}
                  onChange={handleFormChange}
                  autoFocus
                />
              </form>
            )}
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
              onClick={handleIcClick}
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
                    ""
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
                  <Link className="dropdown-item" to="#" onClick={handleLogout}>
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
      {showResult === true && (
        <Row className="container-movie-search flex-column pt-4 pl-3">
          {allMoviesShowing.map((item, index) => {
            return (
              <Row
                className="result-search"
                key={index}
                onClick={() => handleClickMovie(item.id)}
              >
                <Col className="col-4">
                  <img
                    src={`${ImgUrl}${item.image}`}
                    alt="MovieSearch"
                    width="104"
                    height="152"
                  />
                </Col>
                <Col className="col-8 pl-4">
                  <div className="details-movie-search">
                    <h2>Directed by</h2>
                    <p>{`${item.director.substring(0, 14)}...`}</p>
                  </div>
                  <div className="details-movie-search">
                    <h2>Casts</h2>
                    <p>{`${item.cast.substring(0, 13)}...`}</p>
                  </div>
                  <div className="details-movie-search">
                    <h2>Synopsis</h2>
                    <p>{`${item.synopsis.substring(0, 20)}...`}</p>
                  </div>
                </Col>
              </Row>
            );
          })}
        </Row>
      )}
    </Fragment>
  );
}

Navbar.propTypes = {
  isHomepage: propTypes.bool,
  isPayment: propTypes.bool,
  isProfile: propTypes.bool,
};
