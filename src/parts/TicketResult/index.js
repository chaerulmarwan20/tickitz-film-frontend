import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { getTicket } from "../../configs/redux/actions/ticketResult";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Logo from "./components/Logo";
import MovieTitle from "./components/MovieTitle";
import TicketDetail from "./components/TicketDetail";
import Bitmap from "./components/Bitmap";
import TicketDetailBitmap from "./components/TicketDetailBitmap";
import Download from "../../assets/img/download 1.png";
import Printer from "../../assets/img/printer 1.png";

function Index(props) {
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
    <Container className="d-none d-lg-block mb-5">
      <Row className="justify-content-center">
        <Col className="col-10">
          <Section className="ticket-result p-5">
            <h1 className="text-center">Proof of Payment</h1>
            <div className="admit-one mt-5">
              <div className="left d-flex justify-content-between align-items-center px-5">
                <Logo></Logo>
                <h2 className="mt-2">Admit One</h2>
              </div>
              <div className="right d-flex justify-content-center align-items-center">
                <Logo></Logo>
              </div>
            </div>
            <div className="tickets mt-0">
              <div className="left px-5 py-4">
                <MovieTitle
                  heading="Movie"
                  title={ticket.movieTitle}
                ></MovieTitle>
                <Row>
                  <TicketDetail
                    heading="Date"
                    title={setDate(ticket.dateTransactions)}
                  ></TicketDetail>
                  {ticket.time !== undefined && (
                    <TicketDetail
                      heading="Time"
                      title={setTime(ticket.time)}
                    ></TicketDetail>
                  )}
                  <TicketDetail
                    heading="Category"
                    title={ticket.category}
                  ></TicketDetail>
                </Row>
                <Row>
                  <TicketDetail
                    heading="Count"
                    title={`${ticket.qty} pieces`}
                  ></TicketDetail>
                  <TicketDetail
                    heading="Seats"
                    title={ticket.seat}
                  ></TicketDetail>
                  <TicketDetail
                    heading="Price"
                    title={`$${ticket.total}.00`}
                    className="price"
                  ></TicketDetail>
                </Row>
              </div>
              <div className="right py-4">
                <div className="d-flex flex-row ml-3">
                  <MovieTitle
                    heading="Movie"
                    title={ticket.movieTitle}
                  ></MovieTitle>
                  <div className="d-flex flex-column bitmap">
                    <Bitmap></Bitmap>
                  </div>
                </div>
                <div className="d-flex ml-3">
                  <div className="d-flex flex-column px-0">
                    <TicketDetailBitmap
                      className="one"
                      heading="Date"
                      title={setDate(ticket.dateTransactions)}
                    ></TicketDetailBitmap>
                    <TicketDetailBitmap
                      className="two"
                      heading="Count"
                      title={`${ticket.qty} pcs`}
                    ></TicketDetailBitmap>
                  </div>
                  <div className="d-flex flex-column ml-4 ml-xl-5 px-0">
                    {ticket.time !== undefined && (
                      <TicketDetailBitmap
                        className="one"
                        heading="Time"
                        title={setTime(ticket.time)}
                      ></TicketDetailBitmap>
                    )}

                    <TicketDetailBitmap
                      className="two"
                      heading="Seats"
                      title={ticket.seat}
                    ></TicketDetailBitmap>
                    <TicketDetailBitmap
                      className="three"
                      heading="Category"
                      title={ticket.category}
                    ></TicketDetailBitmap>
                  </div>
                </div>
              </div>
            </div>
            <Row className="mt-5">
              <Col className="col-12 d-flex justify-content-center">
                <Button className="btn btn-download">
                  <img
                    src={Download}
                    alt="Download"
                    width="24"
                    className="mr-2"
                  />
                  Download
                </Button>
                <Button className="btn btn-print ml-3">
                  <img src={Printer} alt="Print" width="24" className="mr-2" />
                  Print
                </Button>
              </Col>
            </Row>
          </Section>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(Index);
