import { React, useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import Swal from "sweetalert2";
import { getAllTicket, getSchedule } from "../../configs/redux/actions/order";
import Rupiah from "../../helpers/rupiah";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Select from "../../components/Select";
import SeatCinema from "./components/Seat";

function Index(props) {
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const history = useHistory();

  const idSchedule = props.location.state.schedule;
  const movie = props.location.state.movie;
  const time = props.location.state.time;

  const dispatch = useDispatch();
  const { schedule, ticket } = useSelector((state) => state.order);
  const [seat] = useState([]);
  const [idSeat] = useState([]);
  const [css, setCss] = useState([
    {
      index: null,
      class: "",
    },
  ]);

  const setDate = (params) => {
    const date = new Date(params);
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return `${day[date.getDay()]}, ${date.getDate()} ${
      month[date.getMonth()]
    } ${date.getFullYear()}`;
  };

  const setTime = (params) => {
    const time = params.split(":");
    return `${time[0]}:${time[1]}`;
  };

  const showError = () => {
    Swal.fire({
      title: "Info!",
      text: "Please choose seat",
      icon: "info",
      confirmButtonText: "Ok",
      confirmButtonColor: "#5f2eea",
    });
  };

  const handleChangeMovie = () => {
    history.push("/all-movies-showing", { css: css });
  };

  const handleCheckout = (
    date,
    idMovie,
    idCinema,
    seat,
    idSeat,
    total,
    time
  ) => {
    history.push("/payment-page", {
      date: date,
      idMovie: idMovie,
      idCinema: idCinema,
      seat: seat,
      idSeat: idSeat,
      total: total,
      time: time,
      schedule: idSchedule,
    });
  };

  const handleClickSeat = (params, id, event) => {
    if (seat.includes(params) === false && seat.includes(id) === false) {
      seat.push(params);
      idSeat.push(id);
    } else {
      const seatSplice = seat.indexOf(params);
      const idSeatSplice = idSeat.indexOf(id);
      seat.splice(seatSplice, 1);
      idSeat.splice(idSeatSplice, 1);
    }
    setCss([
      {
        index: id,
        class: "selected",
      },
    ]);
    if (event.target.classList.contains("selected") === true) {
      event.target.classList.remove("selected");
    } else {
      event.target.classList.add("selected");
    }
  };

  useEffect(() => {
    dispatch(getAllTicket(idSchedule, time, movie))
      .then((res) => {
        scroll.scrollToTop();
      })
      .catch((err) => {
        if (err.message === "Tickets not found") {
          Swal.fire({
            title: "Info!",
            text: "Tickets sold out",
            icon: "info",
            confirmButtonText: "Ok",
            confirmButtonColor: "#5f2eea",
          }).then((result) => {
            if (result.isConfirmed) {
              history.goBack();
            } else {
              history.goBack();
            }
          });
        } else {
          Swal.fire({
            title: "Info!",
            text: err.message,
            icon: "info",
            confirmButtonText: "Ok",
            confirmButtonColor: "#5f2eea",
          }).then((result) => {
            if (result.isConfirmed) {
              history.goBack();
            } else {
              history.goBack();
            }
          });
        }
      });
  }, [dispatch, idSchedule, time, movie, history]);

  useEffect(() => {
    dispatch(getSchedule(idSchedule))
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
  }, [dispatch, idSchedule]);

  return (
    <Section className="movie-order">
      <Container>
        <Row>
          <Col className="col-12 col-xl-7">
            <h1 className="d-none d-md-block">Movie Selected</h1>
            <div className="movie-selected mt-3 d-md-flex justify-content-between align-items-center px-4 pt-4 pb-3 d-none">
              <h2>{schedule.movie}</h2>
              <Button
                className="btn btn-change-movie"
                onClick={() => handleChangeMovie()}
              >
                Change movie
              </Button>
            </div>
            <h1 className="mt-md-4">Choose Your Seat</h1>
            <div className="seat mt-3">
              <p className="text-center screen">Screen</p>
              <hr className="mb-4" />
              <div className="d-flex justify-content-between container-grid">
                <div className="d-flex flex-column seat-alpha">
                  <span>A</span>
                  <span>B</span>
                  <span>C</span>
                  <span>D</span>
                  <span>E</span>
                  <span>F</span>
                  <span>G</span>
                </div>
                <div className="container-seat-1">
                  {ticket.map((data, index) => {
                    return data.available === 1 ? (
                      <div
                        key={index}
                        onClick={(event) =>
                          handleClickSeat(data.row + data.seat, data.id, event)
                        }
                        className={data.available === 0 ? "sold" : ""}
                      ></div>
                    ) : (
                      <div
                        key={index}
                        className={data.available === 0 ? "sold" : ""}
                      ></div>
                    );
                  })}
                </div>
              </div>
              <SeatCinema></SeatCinema>
              <p className="seating-key mt-1 mt-md-3">Seating Key</p>
              <Row className="justify-content-around availability mt-3 mt-md-0">
                <Col className="d-md-flex justify-content-around d-none">
                  <p>Available</p>
                  <p>Selected</p>
                  <p>Love nest</p>
                  <p>Sold</p>
                </Col>
                <Col className="pl-4 ml-2 d-md-none">
                  <p>A - G</p>
                  <p>Available</p>
                  <p>Love nest</p>
                </Col>
                <Col className="pl-0 d-md-none">
                  <p>1 - 14</p>
                  <p>Selected</p>
                  <p>Sold</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="col-12 col-xl-5 container-order-info mt-4 mt-xl-0 d-none d-md-block">
            <h1>Order Info</h1>
            <div className="order-info mt-3 pt-4 pb-3">
              <Row className="d-flex flex-column align-items-center">
                {schedule.image === undefined ? (
                  ""
                ) : (
                  <img
                    src={`${ImgUrl}${schedule.image}`}
                    alt="CineOne"
                    width="132"
                  />
                )}
                <h2 className="mt-1">{schedule.name}</h2>
              </Row>
              <Row className="px-5 mt-3 justify-content-between">
                <h3>Movie Selected</h3>
                <p>{schedule.movie}</p>
              </Row>
              <Row className="px-5 mt-3 justify-content-between">
                <h3>{setDate(schedule.date)}</h3>
                <p>{setTime(time)}</p>
              </Row>
              <Row className="px-5 mt-3 justify-content-between">
                <h3>One ticket price</h3>
                {schedule.price !== undefined && (
                  <p>{Rupiah(schedule.price)}</p>
                )}
              </Row>
              <Row className="px-5 mt-3 justify-content-between">
                <h3>Seat choosed</h3>
                <p>
                  {seat.length === 0
                    ? "No choosen"
                    : seat.map((data, index) => {
                        return index === 0 ? `${data}` : `, ${data}`;
                      })}
                </p>
              </Row>
              <hr />
              <Row className="px-5 mt-3 justify-content-between">
                <h4>Total Payment</h4>
                <h5>{Rupiah(schedule.price * seat.length)}</h5>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="d-md-none">
          <Col className="col-12">
            <div className="choosed d-flex align-items-center justify-content-between mt-3 py-2 px-3">
              <h2 className="mt-2">Choosed</h2>
              <p className="mt-3">
                {seat.length === 0
                  ? "No choosen"
                  : seat.map((data, index) => {
                      return index === 0 ? `${data}` : `, ${data}`;
                    })}
              </p>
            </div>
          </Col>
          {seat.length > 0 &&
            seat.map((data, index) => {
              return (
                <Col className="col-12" key={index}>
                  <div className="input-choosed d-flex align-items-center justify-content-around mt-3 py-3 px-3">
                    <Select option={[data.slice(0, 1)]}></Select>
                    <Select option={[data.slice(1)]}></Select>
                  </div>
                </Col>
              );
            })}
        </Row>
        <Row className="mt-5 pb-4">
          <Col className="col-12 col-md-6 col-xl-3">
            <Button
              className="btn btn-change-your-movie"
              onClick={() => handleChangeMovie()}
            >
              <span className="d-block">Change your Movie</span>
              {/* <span className="d-none d-md-block">Change your Movie</span> */}
              {/* <span className="d-block d-md-none">Add new seat</span> */}
            </Button>
          </Col>
          <Col className="col-12 col-md-6 col-xl-3 ml-xl-5 d-flex justify-content-start justify-content-md-end d-xl-block">
            <Button
              className="btn btn-checkout"
              onClick={() =>
                seat.length < 1 || idSeat.length < 1
                  ? showError()
                  : handleCheckout(
                      schedule.date,
                      schedule.idMovie,
                      schedule.idCinema,
                      seat,
                      idSeat,
                      schedule.price * seat.length,
                      time
                    )
              }
            >
              Checkout now
            </Button>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default withRouter(Index);
