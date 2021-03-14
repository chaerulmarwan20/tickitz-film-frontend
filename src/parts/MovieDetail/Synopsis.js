import React from "react";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";

export default function Synopsis() {
  return (
    <Section className="synopsis">
      <Container>
        <Row>
          <Col className="col-12">
            <h2>Synopsis</h2>
            <p>
              Thrilled by his experience with the Avengers, Peter returns home,
              where he lives with his Aunt May, under the watchful eye of his
              new mentor Tony Stark, Peter tries to fall back into his normal
              daily routine - distracted by thoughts of proving himself to be
              more than just your friendly neighborhood Spider-Man - but when
              the Vulture emerges as a new villain, everything that Peter holds
              most important will be threatened.
            </p>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
