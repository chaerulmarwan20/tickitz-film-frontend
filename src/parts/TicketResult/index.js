import { React, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { getTicket } from "../../configs/redux/actions/ticketResult";
import ReactToPrint from "react-to-print";
import { exportComponentAsJPEG } from "react-component-export-image";

import { Ticket } from "./Ticket";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Download from "../../assets/img/download 1.png";
import Printer from "../../assets/img/printer 1.png";

function Index(props) {
  const dispatch = useDispatch();

  const componentRef = useRef();

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
            {ticket.time !== undefined && (
              <Ticket
                ref={componentRef}
                id={ticket.id}
                movie={ticket.movieTitle}
                date={setDate(ticket.dateTransactions)}
                time={setTime(ticket.time)}
                category={ticket.category}
                qty={`${ticket.qty} pieces`}
                seat={ticket.seat}
                total={`$${ticket.total}.00`}
              />
            )}
            <Row className="mt-5">
              <Col className="col-12 d-flex justify-content-center">
                <Button
                  className="btn btn-download"
                  onClick={() =>
                    exportComponentAsJPEG(componentRef, {
                      fileName: `ticket-${new Date().getTime()}`,
                    })
                  }
                >
                  <img
                    src={Download}
                    alt="Download"
                    width="24"
                    className="mr-2"
                  />
                  Download
                </Button>
                <ReactToPrint
                  trigger={() => (
                    <Button className="btn btn-print ml-3">
                      <img
                        src={Printer}
                        alt="Print"
                        width="24"
                        className="mr-2"
                      />
                      Print
                    </Button>
                  )}
                  content={() => componentRef.current}
                />
              </Col>
            </Row>
          </Section>
        </Col>
      </Row>
    </Container>
  );
}

export default withRouter(Index);
