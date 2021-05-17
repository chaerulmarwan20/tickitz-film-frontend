import { React, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Header from "../../components/Header";

import Image1 from "../../assets/img/image-1.png";
import Image2 from "../../assets/img/image-2.png";
import Image3 from "../../assets/img/image-3.png";

export default function Hero() {
  const cardMovie = [Image1, Image2, Image3];

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <Header className="homepage">
      <Container>
        <Row className="align-items-center">
          <Col className="col-12 col-sm-12 col-lg-6">
            <p className="mt-1 mt-md-3 mt-lg-5">
              Nearest Cinema, Newest Movie,
            </p>
            <h1>Find out now!</h1>
          </Col>
          <Col className="col-12 col-sm-12 mt-5 mt-lg-0 col-lg-6 d-flex justify-content-center container-card">
            {cardMovie.map((data, index) => {
              return (
                <div key={index} className="card-movie">
                  <img src={data} className="card-img-top" alt="CardImage" />
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </Header>
  );
}
