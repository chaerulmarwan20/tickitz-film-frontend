import { React, Fragment, useState, useEffect } from "react";
import { Link, useParams, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSchedule,
  getAllTicket,
} from "../../configs/redux/actions/schedule";
import { getLocation } from "../../configs/redux/actions/location";
import Swal from "sweetalert2";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Nav from "../../components/Nav";
import Input from "../../components/Input";
import Section from "../../components/Section";
import Card from "../../components/Card";
import Button from "../../components/Button";

export default function Cinema() {
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const history = useHistory();

  const { id } = useParams();

  const useQuery = () => new URLSearchParams(useLocation().search);

  const params = useQuery();

  const page = params.get("page") ? params.get("page") : 1;
  const perPage = params.get("perPage") ? params.get("perPage") : 6;

  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.location);
  const { schedule, totalPage, currentPage } = useSelector(
    (state) => state.schedule
  );

  const [city, setCity] = useState(1);
  const [date, setDate] = useState("2021-04-02");
  const [paginate, setPaginate] = useState(1);
  const [time, setTime] = useState("");
  const [css, setCss] = useState({
    time: null,
    class: "activated",
  });

  const handleOptionChange = (event) => {
    setCity(event.target.value);
    dispatch(getAllSchedule(date, id, city, page, perPage))
      .then((res) => {})
      .catch((err) => {
        setCity(1);
        setDate("2021-04-02");
        Swal.fire({
          title: "Info!",
          text: err.message,
          icon: "info",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      });
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
    dispatch(getAllSchedule(date, id, city, page, perPage))
      .then((res) => {})
      .catch((err) => {
        setCity(1);
        setDate("2021-04-02");
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      });
  };

  const handleButtonClick = (schedule, movie) => {
    history.push("/order-page", {
      schedule: schedule,
      movie: movie,
      time: time,
    });
  };

  const handleTimeClick = (time1, time2) => {
    setTime(time1);
    setCss({
      time: time2,
      class: "activated",
    });
  };

  const showError = () => {
    Swal.fire({
      title: "Info!",
      text: "Please choose time",
      icon: "info",
      confirmButtonText: "Ok",
      confirmButtonColor: "#5f2eea",
    });
  };

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);

  useEffect(() => {
    setPaginate(totalPage < 6 ? totalPage : 5);
    dispatch(getAllTicket()).then((res) => {});
    dispatch(getAllSchedule(date, id, city, page, perPage))
      .then((res) => {})
      .catch((err) => {
        setCity(1);
        setDate("2021-04-02");
        Swal.fire({
          title: "Info!",
          text: err.message,
          icon: "info",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      });
  }, [dispatch, date, id, city, page, perPage, totalPage]);

  return (
    <Fragment>
      <Section className="date">
        <Container>
          <Row className="mb-2 mb-md-4">
            <Col className="col-12">
              <h2 className="text-center">Showtimes and Tickets</h2>
            </Col>
          </Row>
          <Row>
            <Col className="col-12 d-flex justify-content-center">
              <form className="form-inline d-flex justify-content-center">
                <Input
                  type="date"
                  name="date"
                  value={date}
                  onChange={handleDateChange}
                />
                <select
                  name="location"
                  className="custom-select"
                  onChange={(event) => handleOptionChange(event)}
                >
                  {location.map((item, index) => {
                    return (
                      <option
                        value={item.id}
                        key={index}
                        selected={item.id === city ? true : false}
                      >
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </form>
            </Col>
          </Row>
        </Container>
      </Section>
      <Section className="cinema">
        <Container className="mt-6">
          <Row className="container-cinema justify-content-center mb-5">
            {schedule.map((item, index) => {
              return (
                <Col
                  className="col-12 col-lg-5 d-flex justify-content-center d-xl-block col-xl-4 mt-2"
                  key={index}
                >
                  <Card className="cinema-card">
                    <Row className="flex-column flex-sm-row pt-3">
                      <Col className="d-flex justify-content-center align-items-center mt-2 mt-sm-0">
                        <img
                          src={`${ImgUrl}${item.image}`}
                          alt="ImgSchedule"
                          width="112"
                        />
                      </Col>
                      <Col className="col d-flex flex-column pl-1 mt-3 mt-sm-0">
                        <h2>{item.name}</h2>
                        <p>{item.address}</p>
                      </Col>
                    </Row>
                    <hr className="mx-auto" />
                    <Row>
                      <Col>
                        <nav className="nav pl-3 flex-row">
                          <p
                            className={`nav-link ${
                              item.time1 + item.id === css.time ? css.class : ""
                            }`}
                            onClick={() => {
                              handleTimeClick(item.time1, item.time1 + item.id);
                            }}
                          >
                            {item.time1}
                          </p>
                          <p
                            className={`nav-link ${
                              item.time2 + item.id === css.time ? css.class : ""
                            }`}
                            onClick={() => {
                              handleTimeClick(item.time2, item.time2 + item.id);
                            }}
                          >
                            {item.time2}
                          </p>
                          <p
                            className={`nav-link ${
                              item.time3 + item.id === css.time ? css.class : ""
                            }`}
                            onClick={() => {
                              handleTimeClick(item.time3, item.time3 + item.id);
                            }}
                          >
                            {item.time3}
                          </p>
                          <p
                            className={`nav-link ${
                              item.time4 + item.id === css.time ? css.class : ""
                            }`}
                            onClick={() => {
                              handleTimeClick(item.time4, item.time4 + item.id);
                            }}
                          >
                            {item.time4}
                          </p>
                          <p
                            className={`nav-link ${
                              item.time5 + item.id === css.time ? css.class : ""
                            }`}
                            onClick={() => {
                              handleTimeClick(item.time5, item.time5 + item.id);
                            }}
                          >
                            {item.time5}
                          </p>
                          <p
                            className={`nav-link ${
                              item.time6 + item.id === css.time ? css.class : ""
                            }`}
                            onClick={() => {
                              handleTimeClick(item.time6, item.time6 + item.id);
                            }}
                          >
                            {item.time6}
                          </p>
                          <p
                            className={`nav-link ${
                              item.time7 + item.id === css.time ? css.class : ""
                            }`}
                            onClick={() => {
                              handleTimeClick(item.time7, item.time7 + item.id);
                            }}
                          >
                            {item.time7}
                          </p>
                        </nav>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col className="px-5 d-flex justify-content-between align-items-center">
                        <h3>Price</h3>
                        <p className="price">{`$${item.price}.00/seat`}</p>
                      </Col>
                    </Row>
                    <Row className="mt-2">
                      <Col className="pr-5 pl-3 pl-sm-2 d-flex justify-content-around align-items-center">
                        <Button
                          type="button"
                          className="btn book-now"
                          onClick={
                            time !== ""
                              ? () => handleButtonClick(item.id, id)
                              : () => showError()
                          }
                        >
                          Book now
                        </Button>
                        <span
                          onClick={
                            time !== ""
                              ? () => handleButtonClick(item.id, id)
                              : () => showError()
                          }
                          className="add-cart"
                        >
                          Add Cart
                        </span>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col className="col-12 d-flex justify-content-center">
              <Nav>
                <ul className="pagination-custom">
                  {Array.from(Array(paginate).keys()).map((data, index) => {
                    return (
                      <li key={index}>
                        <Link
                          to={`/movie-detail/${id}/?page=${
                            currentPage >= 5 && currentPage < totalPage
                              ? data + (currentPage - 3)
                              : currentPage >= 5 && currentPage === totalPage
                              ? data + (currentPage - 3) - 1
                              : data + 1
                          }&perPage=${perPage}`}
                          className={`${
                            currentPage >= 5 && currentPage < totalPage
                              ? data + (currentPage - 3) === currentPage &&
                                "page-active"
                              : currentPage >= 5 && currentPage === totalPage
                              ? data + (currentPage - 3) - 1 === currentPage &&
                                "page-active"
                              : data + 1 === currentPage && "page-active"
                          }`}
                        >
                          {currentPage >= 5 && currentPage < totalPage
                            ? data + (currentPage - 3)
                            : currentPage >= 5 && currentPage === totalPage
                            ? data + (currentPage - 3) - 1
                            : data + 1}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
}
