import React from "react";
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Card from "../../components/Card";

import Image1 from "../../assets/img/image-showing-1.png";
import Image2 from "../../assets/img/image-showing-2.png";
import Image3 from "../../assets/img/image-showing-3.png";

export default function ShowingMovie() {
  const imageCard = [Image1, Image2, Image3, Image1, Image2];

  return (
    <Section className="showing-movie">
      <Container>
        <Row>
          <Col className="col-12 d-flex justify-content-between align-items-center">
            <h1 className="now-showing">Now Showing</h1>
            <Link to="#">view all</Link>
          </Col>
        </Row>
        <Row className="mt-5 pl-2 pl-lg-0">
          <Col className="col-12 px-0 now-showing-movie">
            {imageCard.map((data, index) => {
              return (
                <Card key={index}>
                  <div className="image-card">
                    <img src={data} alt="ImageCard" />
                  </div>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
