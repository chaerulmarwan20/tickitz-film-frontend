import React from "react";
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Nav from "../../components/Nav";
import Section from "../../components/Section";
import CinemaCard from "./components/CinemaCard";

export default function Date() {
  return (
    <Section className="cinema">
      <Container>
        <CinemaCard></CinemaCard>
        <Row>
          <Col className="col-12 d-flex justify-content-center">
            <Nav>
              <ul className="pagination-custom">
                <li>
                  <Link to="#" className="page-active">
                    1
                  </Link>
                </li>
                <li>
                  <Link to="#">2</Link>
                </li>
                <li>
                  <Link to="#">3</Link>
                </li>
                <li>
                  <Link to="#">4</Link>
                </li>
              </ul>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
