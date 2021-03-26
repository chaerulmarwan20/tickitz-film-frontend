import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";

import MovieDescription from "./components/MovieDescription";
import PremiereLocation from "./components/PremiereLocation";
import Showtimes from "./components/Showtimes";
import Chart from "./components/Chart";

export default function index() {
  return (
    <Section className="description-premiere">
      <Container>
        <Row className="justify-content-center justify-content-xl-start">
          <Col className="col-xl-8 col-lg-10">
            <h1>Movie Description</h1>
            <MovieDescription></MovieDescription>
          </Col>
          <Col className="col-xl-4 col-lg-10 mt-5 mt-xl-0 d-flex d-xl-block flex-column">
            <h1>Premiere Location</h1>
            <PremiereLocation></PremiereLocation>
            <h1 className="mt-5 mt-xl-4">Showtimes</h1>
            <Showtimes></Showtimes>
          </Col>
        </Row>
        <Row className="justify-content-center justify-content-xl-start mt-5">
          <Col className="col-lg-10 col-xl-12">
            <h1>Sales Charts</h1>
            <div className="based d-flex py-3 px-4 mt-4">
              <Link className="active mt-1" to="#">
                Based on Movies
              </Link>
              <Link className="mt-1 ml-5" to="#">
                Based on Location
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center justify-content-xl-start mt-5">
          <Chart></Chart>
        </Row>
        <Row className="justify-content-center justify-content-xl-start view-more">
          <Col className="col-4 col-lg-4 col-xl-5">
            <hr />
          </Col>
          <Col className="col-4 col-lg-2 d-flex justify-content-center">
            <Link to="#">view more</Link>
          </Col>
          <Col className="col-4 col-lg-4 col-xl-5">
            <hr />
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
