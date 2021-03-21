import React from "react";

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

export default function index() {
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
                  title="Spider-Man: Homecoming"
                ></MovieTitle>
                <Row>
                  <TicketDetail heading="Date" title="07 July"></TicketDetail>
                  <TicketDetail heading="Time" title="02:00pm"></TicketDetail>
                  <TicketDetail heading="Category" title="PG-13"></TicketDetail>
                </Row>
                <Row>
                  <TicketDetail heading="Count" title="3 pieces"></TicketDetail>
                  <TicketDetail
                    heading="Seats"
                    title="C4, C5, C6"
                  ></TicketDetail>
                  <TicketDetail
                    heading="Price"
                    title="$30.00"
                    className="price"
                  ></TicketDetail>
                </Row>
              </div>
              <div className="right py-4">
                <div className="d-flex flex-row ml-3">
                  <MovieTitle
                    heading="Movie"
                    title="Spider-Man: Home..."
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
                      title="07 Jul"
                    ></TicketDetailBitmap>
                    <TicketDetailBitmap
                      className="two"
                      heading="Count"
                      title="3 pcs"
                    ></TicketDetailBitmap>
                  </div>
                  <div className="d-flex flex-column ml-4 ml-xl-5 px-0">
                    <TicketDetailBitmap
                      className="one"
                      heading="Time"
                      title="2:00pm"
                    ></TicketDetailBitmap>
                    <TicketDetailBitmap
                      className="two"
                      heading="Seats"
                      title="C4, C5, C6"
                    ></TicketDetailBitmap>
                    <TicketDetailBitmap
                      className="three"
                      heading="Category"
                      title="PG-13"
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
