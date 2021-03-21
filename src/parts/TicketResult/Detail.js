import React from "react";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import BitmapDetail from "./components/BitmapDetail";
import MovieDetail from "./components/MovieDetail";

import CheckCircle from "../../assets/img/check-circle.png";

export default function Detail() {
  const movieDetail1 = [
    {
      heading: "Movie",
      title: "Spider-Man: ..",
    },
    {
      heading: "Date",
      title: "07 Jul",
    },
    {
      heading: "Count",
      title: "3 pcs",
    },
  ];
  const movieDetail2 = [
    {
      heading: "Category",
      title: "PG-13",
    },
    {
      heading: "Time",
      title: "2:00pm",
    },
    {
      heading: "Seats",
      title: "C4, C5, C6",
    },
  ];

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
                  <MovieDetail data={movieDetail1}></MovieDetail>
                </div>
                <div className="d-flex flex-column ml-5">
                  <MovieDetail data={movieDetail2}></MovieDetail>
                </div>
              </Col>
              <Col className="col-12 d-flex justify-content-center mt-4">
                <div className="total d-flex justify-content-between pt-2 px-3">
                  <h3>Total</h3>
                  <p>$30.00</p>
                </div>
              </Col>
            </Row>
          </Section>
        </Col>
      </Row>
    </Container>
  );
}
