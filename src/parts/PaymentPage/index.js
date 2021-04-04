import { React, useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovie,
  getCinema,
  createTransactions,
} from "../../configs/redux/actions/payment";
import { findUser } from "../../configs/redux/actions/user";
import Swal from "sweetalert2";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Card from "../../components/Card";

import Alert from "../../assets/img/warning.png";

function Index(props) {
  const history = useHistory();

  const dispatch = useDispatch();

  const { movie, cinema } = useSelector((state) => state.payment);
  const { user } = useSelector((state) => state.user);

  const date = props.location.state.date;
  const idMovie = props.location.state.idMovie;
  const idCinema = props.location.state.idCinema;
  const seat = props.location.state.seat;
  const idSeat = props.location.state.idSeat;
  const total = props.location.state.total;
  const time = props.location.state.time;
  const idUser = user.id;
  const category = movie.category;

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });
  const [showAlert] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");

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

  const setDateSchedule = (params) => {
    const date = new Date(params);

    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  };

  const setTime = (params) => {
    const time = params.split(":");
    return `${time[0]}:${time[1]}`;
  };

  const showError = () => {
    Swal.fire({
      title: "Info!",
      text: "Please choose payment method",
      icon: "info",
      confirmButtonText: "Ok",
      confirmButtonColor: "#5f2eea",
    });
  };

  const handleClickButton = (event) => {
    event.preventDefault();
    setPaymentMethod(event.target.getAttribute("data-content"));
    if (event.target.classList.contains("active") === true) {
      event.target.classList.remove("active");
    } else {
      event.target.classList.add("active");
    }
  };

  const handlePay = (event) => {
    event.preventDefault();
    const title = movie.title;
    const qty = seat.length;
    const dateTransactions = setDateSchedule(date);
    dispatch(
      createTransactions({
        dateTransactions,
        time,
        paymentMethod,
        idUser,
        idCinema,
        title,
        category,
        qty,
        seat,
        total,
        idSeat,
      })
    )
      .then(({ message, idTicket }) => {
        const idResult = idTicket;
        Swal.fire({
          title: "Success!",
          text: message,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        }).then((result) => {
          if (result.isConfirmed) {
            history.push("/ticket-result", { idTicket: idResult });
          } else {
            history.push("/ticket-result", { idTicket: idResult });
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      });
  };

  const handleFormChange = (event) => {
    const userNew = { ...data };
    userNew[event.target.name] = event.target.value;
    setData(userNew);
  };

  useEffect(() => {
    dispatch(getMovie(idMovie));
    dispatch(getCinema(idCinema));
  }, [dispatch, idMovie, idCinema]);

  useEffect(() => {
    dispatch(findUser()).then((res) => {
      setData(res);
    });
  }, [dispatch]);

  return (
    <Section className="payment-detail">
      <Container>
        <Row>
          <Col className="col-lg-12 col-xl-8">
            <h1 className="d-none d-md-block">Payment Info</h1>
            <Card className="d-none d-md-block payment-info p-5 mt-4">
              <Container>
                <Row className="justify-content-between align-items-center">
                  <h2>Date & time</h2>
                  <p>{`${setDate(date)} at ${setTime(time)}`}</p>
                  <hr />
                </Row>
                <Row className="justify-content-between align-items-center">
                  <h2>Movie title</h2>
                  <p>{movie.title}</p>
                  <hr />
                </Row>
                <Row className="justify-content-between align-items-center">
                  <h2>Cinema name</h2>
                  <p>{cinema.name}</p>
                  <hr />
                </Row>
                <Row className="justify-content-between align-items-center">
                  <h2>Number of tickets</h2>
                  <p>{`${seat.length} pieces`}</p>
                  <hr />
                </Row>
                <Row className="justify-content-between align-items-center">
                  <h2>Total payment</h2>
                  <p>{`$${total},00`}</p>
                  <hr />
                </Row>
              </Container>
            </Card>
            <h1 className="mt-5 choose-payment">
              <span className="d-none d-md-inline-block">Choose a</span> Payment
              Method
            </h1>
            <Card className="payment-method mt-4 pt-5 pb-4">
              <Row className="justify-content-center">
                <div className="d-flex">
                  <Button
                    className={`btn btn-payment google-pay`}
                    onClick={(event) => handleClickButton(event)}
                    content="Google Pay"
                  ></Button>
                  <Button
                    className={`btn btn-payment visa`}
                    onClick={(event) => handleClickButton(event)}
                    content="Visa"
                  ></Button>
                  <Button
                    className={`btn btn-payment gopay`}
                    onClick={(event) => handleClickButton(event)}
                    content="GoPay"
                  ></Button>
                  <Button
                    className={`btn btn-payment paypal d-none d-md-flex`}
                    onClick={(event) => handleClickButton(event)}
                    content="PayPal"
                  ></Button>
                </div>
                <div className="d-flex">
                  <Button
                    className={`btn btn-payment paypal d-md-none`}
                    onClick={(event) => handleClickButton(event)}
                    content="PayPal"
                  ></Button>
                  <Button
                    className={`btn btn-payment dana`}
                    onClick={(event) => handleClickButton(event)}
                    content="Dana"
                  ></Button>
                  <Button
                    className={`btn btn-payment bca d-none d-md-flex`}
                    onClick={(event) => handleClickButton(event)}
                    content="BCA"
                  ></Button>
                  <Button
                    className={`btn btn-payment bri d-none d-md-flex`}
                    onClick={(event) => handleClickButton(event)}
                    content="BRI"
                  ></Button>
                  <Button
                    className={`btn btn-payment ovo`}
                    onClick={(event) => handleClickButton(event)}
                    content="Ovo"
                  ></Button>
                </div>
              </Row>
              <div className="d-flex ml-3 ml-md-0 justify-content-center mt-2 mt-md-3 mb-2 mb-md-4">
                <hr />
                <p className="or">or</p>
                <hr />
              </div>
              <Row className="ml-2 ml-md-0 justify-content-center">
                <p className="pay">
                  Pay via cash. <span>See how it work</span>
                </p>
              </Row>
            </Card>
          </Col>
          <Col className="col-lg-12 col-xl-4 mt-5 mt-xl-0">
            <h1 className="personal-info-heading">Personal Info</h1>
            <Card className="personal-info p-4 mt-4">
              <form className="mt-4">
                <div className="form-group">
                  <Input
                    label="Full Name"
                    type="text"
                    name="full-name"
                    placeholder="Write full name"
                    value={data.fullName}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-group">
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Write email"
                    value={data.email}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone-number">Phone Number</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text payment-page">+62</div>
                    </div>
                    <Input
                      type="number"
                      name="phone-number"
                      className="phone-number"
                      placeholder="Write phone number"
                      value={data.phoneNumber}
                      onChange={handleFormChange}
                    />
                  </div>
                </div>
              </form>
              {showAlert === true && (
                <div className="custom-alert d-flex align-items-center">
                  <img src={Alert} alt="AlertWarning" className="alert-img" />
                  <span className="ml-4">Fill your data correctly.</span>
                </div>
              )}
            </Card>
          </Col>
        </Row>
        <Row className="pt-5 ml-auto">
          <Col className="col-lg-12 pl-0 col-xl-8 d-flex justify-content-between">
            <Button className="btn btn-previous d-none d-md-block">
              Previous step
            </Button>
            <Button
              className="btn btn-order mx-auto mx-md-0"
              onClick={
                paymentMethod !== ""
                  ? (event) => handlePay(event)
                  : () => showError()
              }
            >
              Pay your order
            </Button>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}

export default withRouter(Index);
