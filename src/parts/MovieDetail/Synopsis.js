import { React } from "react";
import { useSelector } from "react-redux";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";

export default function Synopsis() {
  const { movieDetail } = useSelector((state) => state.movieDetail);

  return (
    <Section className="synopsis">
      <Container>
        <Row>
          <Col className="col-12">
            <h2>Synopsis</h2>
            {movieDetail.map((data, index) => {
              return <p key={index}>{data.synopsis}</p>;
            })}
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
