import React from "react";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Input from "../../components/Input";

export default function Date() {
  const location = ["Purwokerto", "Jakarta", "Bandung", "Surabaya"];

  return (
    <Section className="date">
      <Container>
        <Row className="mb-2 mb-md-4">
          <Col className="col-12">
            <h2 className="text-center">Showtimes and Tickets</h2>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 d-flex justify-content-center">
            <form className="form-inline d-flex justify-content-center">
              <Input type="date" name="date" value="2021-07-21" />
              <select className="custom-select" name="location" id="location">
                {location.map((data, index) => {
                  return (
                    <option key={index} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
            </form>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
