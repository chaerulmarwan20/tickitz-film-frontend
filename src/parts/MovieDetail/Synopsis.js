import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";

export default function Synopsis() {
  const Url = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  const [state, setState] = useState({
    movie: [],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    axios.get(`${Url}/movies/${id}`).then((res) => {
      setState({
        movie: res.data.data,
      });
    });
  }, [Url, id]);
  return (
    <Section className="synopsis">
      <Container>
        <Row>
          <Col className="col-12">
            <h2>Synopsis</h2>
            {state.movie.map((data, index) => {
              return <p key={index}>{data.synopsis}</p>;
            })}
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
