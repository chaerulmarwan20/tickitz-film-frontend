import React from "react";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Header from "../../components/Header";
import Card from "../../components/Card";

import MovieHeader from "../../assets/img/movie-header.png";

export default function Hero() {
  return (
    <Header className="movies-details mb-5">
      <Container>
        <Row className="mt-5">
          <Col className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-start">
            <Card className="movie-header">
              <img src={MovieHeader} alt="MovieHeader" />
            </Card>
          </Col>
          <Col className="col-12 movie col-lg-7 mt-5 mt-lg-0 pl-0">
            <div className="d-flex flex-column text-center text-lg-left mb-3">
              <h1>Spider-Man: Homecoming</h1>
              <p className="genre">Adventure, Action, Sci-Fi</p>
            </div>
            <Row className="flex-row flex-lg-column ml-auto ml-lg-n3 movie-detail">
              <Col className="col-6 col-lg-12">
                <h2>Release Date</h2>
                <p>June 28, 2017</p>
              </Col>
              <Col className="col-6 col-lg-12">
                <h2>Duration</h2>
                <p>
                  2 h<span>ou</span>rs 13 min<span>utes</span>
                </p>
              </Col>
              <Col className="col-6 col-lg-12">
                <h2>Directed by</h2>
                <p>Jon Watss</p>
              </Col>
              <Col className="col-6 col-lg-12">
                <h2>Casts</h2>
                <p>
                  Tom Holland, <span>Michael Keaton,</span> Robert Downey Jr.,{" "}
                  <span className="d-none">etc.</span>
                  <span>...</span>
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Header>
  );
}
