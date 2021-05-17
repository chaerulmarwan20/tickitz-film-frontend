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

  const [showResult, setShowResult] = useState(false);
  const [showResultMobile, setShowResultMobile] = useState(false);
  const [query, setQuery] = useState("");
  const [queryMobile, setQueryMobile] = useState("");
  const [empty, setEmpty] = useState(false);

  const handleFormChange = (event) => {
    setQuery(event.target.value);
    axios
      .get(
        `${Url}/movies/is-realese/?keyword=${event.target.value}&perPage=${perPage}`
      )
      .then((res) => {
        if (event.target.value === "") {
          setEmpty(false);
          setShowResult(false);
        } else {
          setEmpty(false);
          setShowResult(true);
        }
        setEmpty(false);
        dispatch(searchMoviesShowing(res.data.data));
      })
      .catch((err) => {
        setShowResult(false);
        setEmpty(true);
      });
  };

  const handleFormChangeMobile = (event) => {
    setQueryMobile(event.target.value);
    axios
      .get(
        `${Url}/movies/is-realese/?keyword=${event.target.value}&perPage=${perPage}`
      )
      .then((res) => {
        if (event.target.value === "") {
          setEmpty(false);
          setShowResultMobile(false);
        } else {
          setEmpty(false);
          setShowResultMobile(true);
        }
        setEmpty(false);
        dispatch(searchMoviesShowing(res.data.data));
      })
      .catch((err) => {
        setShowResultMobile(false);
        setEmpty(true);
      });
  };

  const handleClickCinemas = () => {
    history.push("/cinemas");
  };

  const handleClickMovies = () => {
    Swal.fire({
      title: "What do yo want?",
      showDenyButton: true,
      confirmButtonText: `Now Showing`,
      confirmButtonColor: "#5f2eea",
      denyButtonText: "Upcoming Movies",
      denyButtonColor: `#5f2eea`,
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/all-movies-showing");
      } else if (!result.isConfirmed && result.dismiss !== "backdrop") {
        history.push("/all-movies-upcoming");
      }
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
        history.push("/sign-in");
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
    setShowResult(false);
    setShowResultMobile(false);
    setQuery("");
    setQueryMobile("");
    setEmpty(false);
    history.push(`/movie-detail/${id}`);
  };

  const handleClickBuy = () => {
    Swal.fire({
      title: "Please choose a movie!",
      text: "Redirect to the movie page",
      icon: "info",
      confirmButtonText: "Ok",
      confirmButtonColor: "#5f2eea",
    }).then((result) => {
      if (result.isConfirmed) {
        history.push("/all-movies-showing");
      }
    });
  };

  useEffect(() => {
    dispatch(getLocation())
      .then((res) => {})
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      });
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(getUser())
        .then((res) => {})
        .catch((err) => {
          Swal.fire({
            title: "Error!",
            text: err.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#5f2eea",
          });
        });
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
                <Input
                  type="text"
                  name="search"
                  placeholder="Search..."
                  value={queryMobile}
                  onChange={handleFormChangeMobile}
                />
                {showResultMobile === true && empty === false && (
                  <Row className="container-movie-search-mobile d-block d-lg-none flex-column pt-4 pl-3">
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
                {showResultMobile === false && empty === true && (
                  <p className="empty-mobile mt-4">Movie not found</p>
                )}
              </form>
              <li className="nav-item">
                <div
                  className="nav-link my-2 my-lg-0"
                  onClick={() => handleClickMovies()}
                >
                  Movies
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link my-2 my-lg-0"
                  onClick={() => handleClickCinemas()}
                >
                  Cinemas
                </div>
              </li>
              <li className="nav-item">
                <div
                  className="nav-link my-2 my-lg-0"
                  onClick={() => handleClickBuy()}
                >
                  Buy Ticket
                </div>
              </li>
              <li className="nav-item dropdown d-lg-none">
                <div
                  className="nav-link mt-4 mb-2 my-lg-0"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                >
                  Location <img src={Icon} width="18px" alt="Icon" />
                </div>
                <div
                  className="dropdown-menu mb-3"
                  aria-labelledby="navbarDropdown"
                >
                  {location.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="dropdown-item location-content"
                      >
                        {data.name}
                      </div>
                    );
                  })}
                </div>
              </li>
              {localStorage.getItem("token") ? (
                <li className="nav-item dropdown d-lg-none">
                  <div
                    className="nav-link mt-4 mb-2 my-lg-0"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                  >
                    Account <img src={Icon} width="18px" alt="Icon" />
                  </div>
                  <div
                    className="dropdown-menu mb-3"
                    aria-labelledby="navbarDropdown"
                  >
                    {user.role === 1 && (
                      <>
                        <Link className="dropdown-item" to="/admin-page">
                          Admin Page
                        </Link>
                        <div className="dropdown-divider"></div>
                      </>
                    )}
                    <Link className="dropdown-item" to="/profile-page">
                      Settings
                    </Link>
                    <div className="dropdown-divider"></div>
                    <div
                      className="dropdown-item logout"
                      onClick={handleLogout}
                    >
                      Logout
                    </div>
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
              <div
                className="nav-link link-location"
                id="dropdownMenuLink"
                data-toggle="dropdown"
              >
                Location <img src={Icon} width="18px" alt="Icon" />
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {location.map((data, index) => {
                  return (
                    <div key={index} className="dropdown-item location-content">
                      {data.name}
                    </div>
                  );
                })}
              </div>
            </div>
            <img
              src={Search}
              className="ic-search d-none d-lg-block mx-5"
              alt="Search"
              data-target="#exampleModal"
              data-toggle="modal"
            />
            {localStorage.getItem("token") ? (
              <div className="dropdown d-none d-lg-block">
                <div
                  className="nav-link"
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
                </div>
                <div
                  className="dropdown-menu user"
                  aria-labelledby="dropdownMenuLink"
                >
                  {user.role === 1 && (
                    <>
                      <Link className="dropdown-item" to="/admin-page">
                        Admin Page
                      </Link>
                      <div className="dropdown-divider"></div>
                    </>
                  )}
                  <Link className="dropdown-item" to="/profile-page">
                    Account Settings
                  </Link>
                  <div className="dropdown-divider"></div>
                  <div
                    className="dropdown-item logout"
                    to="#"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
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
      <div
        className="modal fade"
        id="exampleModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Search movie
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center">
              <form className="form-inline d-none d-lg-block mb-4 mt-3 search">
                <Input
                  type="text"
                  name="keyword"
                  placeholder="Search..."
                  value={query}
                  onChange={handleFormChange}
                  autoComplete
                />
                {showResult === true && empty === false && (
                  <Row className="container-movie-search d-none d-lg-flex flex-column pt-4 pl-5 pr-5">
                    {allMoviesShowing.map((item, index) => {
                      return (
                        <Row
                          className="result-search justify-content-center"
                          key={index}
                          dismiss="modal"
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
                          <Col className="col-7">
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
                {showResult === false && empty === true && (
                  <p className="empty mt-4">Movie not found</p>
                )}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-close"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

Navbar.propTypes = {
  isHomepage: propTypes.bool,
  isPayment: propTypes.bool,
  isProfile: propTypes.bool,
};
