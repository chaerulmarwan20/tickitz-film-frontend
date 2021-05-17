import { React, Fragment, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { getLocation } from "../../configs/redux/actions/location";
import Rupiah from "../../helpers/rupiah";
import axiosApiInstance from "../../helpers/axios";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Input from "../../components/Input";
import Section from "../../components/Section";
import Card from "../../components/Card";
import Button from "../../components/Button";

export default function Cinema() {
  const Url = process.env.REACT_APP_API_URL;
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const history = useHistory();

  const { id } = useParams();

  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.location);

  const [schedule, setSchedule] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPage, setTotalPage] = useState(null);
  const [paginate, setPaginate] = useState(1);
  const [idSchedule, setIdSchedule] = useState(null);
  const [city, setCity] = useState(1);
  const [date, setDate] = useState("2021-04-02");
  const [time, setTime] = useState("");
  const [css, setCss] = useState({
    time: null,
    class: "activated",
  });

  const handleClickPaginate = (params) => {
    setPage(params);
  };

  const handleOptionChange = (event) => {
    setCity(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleButtonClick = (schedule, movie) => {
    if (schedule !== idSchedule) {
      Swal.fire({
        title: "Error!",
        text: "Invalid time!",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#5f2eea",
      });
    } else {
      history.push("/order-page", {
        schedule: schedule,
        movie: movie,
        time: time,
      });
    }
  };

  const handleButtonCart = () => {
    Swal.fire({
      title: "Info!",
      text: "This feature is coming soon",
      icon: "info",
      confirmButtonText: "Ok",
      confirmButtonColor: "#5f2eea",
    });
  };

  const handleTimeClick = (time1, time2, idSchedule) => {
    setIdSchedule(idSchedule);
    setTime(time1);
    setCss({
      time: time2,
      class: "activated",
    });
  };

  const showError = () => {
    Swal.fire({
      title: "Error!",
      text: "Please choose time!",
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#5f2eea",
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
    axiosApiInstance
      .get(
        `${Url}/schedule/?date=${date}&movie=${id}&city=${city}&page=${page}&perPage=${5}`
      )
      .then((res) => {
        setCurrentPage(res.data.currentPage);
        setTotalPage(res.data.totalPage);
        setPaginate(res.data.totalPage < 6 ? res.data.totalPage : 5);
        setEmpty(false);
        setSchedule(res.data.data);
      })
      .catch((err) => {
        setEmpty(true);
      });
  }, [page, totalPage, city, date, id, Url]);

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
            {empty === true && (
              <h4 className="empty text-center mt-2">
                The showtimes is not yet available
              </h4>
            )}
            {empty === false &&
              schedule.map((item, index) => {
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
                            {JSON.parse(item.time).map((data, index) => {
                              return (
                                <p
                                  className={`nav-link ${
                                    data + item.id === css.time ? css.class : ""
                                  }`}
                                  onClick={() => {
                                    handleTimeClick(
                                      data,
                                      data + item.id,
                                      item.id
                                    );
                                  }}
                                  key={index}
                                >
                                  {data}
                                </p>
                              );
                            })}
                          </nav>
                        </Col>
                      </Row>
                      <Row className="mt-2">
                        <Col className="px-5 d-flex justify-content-between align-items-center">
                          <h3>Price</h3>
                          <p className="price">{Rupiah(item.price)}/seat</p>
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
                            onClick={() => handleButtonCart()}
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
              {empty === false && (
                <>
                  <div className="d-flex justify-content-center">
                    <ul className="pagination-custom">
                      {Array.from(Array(paginate).keys()).map((data, index) => {
                        return (
                          <li key={index}>
                            <button
                              className={`${
                                currentPage >= 5 && currentPage < totalPage
                                  ? data + (currentPage - 3) === currentPage &&
                                    "page-active"
                                  : currentPage >= 5 &&
                                    currentPage === totalPage
                                  ? data + (currentPage - 3) - 1 ===
                                      currentPage && "page-active"
                                  : data + 1 === currentPage && "page-active"
                              }`}
                              onClick={() =>
                                handleClickPaginate(
                                  `${
                                    currentPage >= 5 && currentPage < totalPage
                                      ? data + (currentPage - 3)
                                      : currentPage >= 5 &&
                                        currentPage === totalPage
                                      ? data + (currentPage - 3) - 1
                                      : data + 1
                                  }`
                                )
                              }
                            >
                              {currentPage >= 5 && currentPage < totalPage
                                ? data + (currentPage - 3)
                                : currentPage >= 5 && currentPage === totalPage
                                ? data + (currentPage - 3) - 1
                                : data + 1}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </Section>
    </Fragment>
  );
}
