import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import Barcode from "react-barcode";
import Rupiah from "../../helpers/rupiah";
import { getTicket } from "../../configs/redux/actions/ticketResult";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";

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

  const barCodeOptions = {
    width: 0.7,
    height: 40,
    format: "CODE128",
    displayValue: false,
    background: "transparent",
    lineColor: "#000000",
    margin: 0,
    marginTop: undefined,
    marginBottom: undefined,
    marginLeft: undefined,
    marginRight: undefined,
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
                <div className="bitmap mt-2 mb-5 d-flex">
                  <Barcode
                    {...barCodeOptions}
                    value={ticket.id}
                    alt="barcode"
                  />
                  <Barcode
                    {...barCodeOptions}
                    value={ticket.id}
                    alt="barcode"
                  />
                  <Barcode
                    {...barCodeOptions}
                    value={ticket.id}
                    alt="barcode"
                  />
                  <Barcode
                    {...barCodeOptions}
                    value={ticket.id}
                    alt="barcode"
                  />
                  <Barcode
                    {...barCodeOptions}
                    value={ticket.id}
                    alt="barcode"
                  />
                  <Barcode
                    {...barCodeOptions}
                    value={ticket.id}
                    alt="barcode"
                  />
                  <Barcode
                    {...barCodeOptions}
                    value={ticket.id}
                    alt="barcode"
                  />
                </div>
              </Col>
              <Col className="col-12 d-flex flex-row justify-content-center detail mt-5">
                <div className="d-flex flex-column">
                  <h2>Movie</h2>
                  {ticket.movieTitle !== undefined && (
                    <p>
                      {ticket.movieTitle.length >= 16
                        ? `${ticket.movieTitle.substring(0, 16)}...`
                        : ticket.movieTitle}
                    </p>
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
                  <p style={{ whiteSpace: "normal" }}>{ticket.seat}</p>
                </div>
              </Col>
              <Col className="col-12 d-flex justify-content-center mt-4">
                <div className="total d-flex justify-content-between pt-2 px-3">
                  <h3>Total</h3>
                  {ticket.total !== undefined && <p>{Rupiah(ticket.total)}</p>}
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
