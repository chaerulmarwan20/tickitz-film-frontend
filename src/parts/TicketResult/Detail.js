import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { getTicket } from "../../configs/redux/actions/ticketResult";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import BitmapDetail from "./components/BitmapDetail";

import CheckCircle from "../../assets/img/check-circle.png";

function Detail(props) {
  const dispatch = useDispatch();

  const { ticket } = useSelector((state) => state.ticketResult);

  const idTicket = props.location.state.idTicket;

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
    return `${date.getDate()} ${month[date.getMonth()]}`;
  };

  const setTime = (params) => {
    const time = params.split(":");
    return `${time[0]}:${time[1]}`;
  };

  useEffect(() => {
    dispatch(getTicket(idTicket));
  }, [dispatch, idTicket]);

  return (
    <Container className="d-lg-none mb-5">
      <Row className="justify-content-center">
        <Col className="col-12">
          <Section className="transaction py-4 px-3">
            <Row>
              <Col className="col-12 thank-you d-flex flex-column align-items-center">
                <img
                  src={CheckCircle}
                  alt="Check Circle"
                  width="56"
                  className="mt-2"
                />
                <h1 className="mt-2">Thank You</h1>
                <p>Your transaction was successful</p>
                <BitmapDetail></BitmapDetail>
              </Col>
              <Col className="col-12 d-flex flex-row justify-content-center detail mt-5">
                <div className="d-flex flex-column">
                  <h2>Movie</h2>
                  {ticket.movieTitle !== undefined && (
                    <p>{`${ticket.movieTitle.substring(0, 16)}...`}</p>
                  )}
                  <h2>Date</h2>
                  <p>{setDate(ticket.dateTransactions)}</p>
                  <h2>Count</h2>
                  <p>{`${ticket.qty} pcs`}</p>
                </div>
                <div className="d-flex flex-column ml-5">
                  <h2>Category</h2>
                  <p>{ticket.category}</p>
                  <h2>Time</h2>
                  {ticket.time !== undefined && <p>{setTime(ticket.time)}</p>}
                  <h2>Seats</h2>
                  <p>{ticket.seat}</p>
                </div>
              </Col>
              <Col className="col-12 d-flex justify-content-center mt-4">
                <div className="total d-flex justify-content-between pt-2 px-3">
                  <h3>Total</h3>
                  <p>{`$${ticket.total}.00`}</p>
                </div>
              </Col>
            </Row>
          </Section>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(Detail);
