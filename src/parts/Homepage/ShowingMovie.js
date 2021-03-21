import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Card from "../../components/Card";

export default function ShowingMovie() {
  const Url = process.env.REACT_APP_API_URL;
  const [state, setState] = useState({
    movie: [],
  });

  useEffect(() => {
    axios.get(`${Url}/movies/realesed?realese=true`).then((res) => {
      setState({
        movie: res.data.data,
      });
    });
  }, [Url]);

  return (
    <Section className="showing-movie">
      <Container>
        <Row>
          <Col className="col-12 d-flex justify-content-between align-items-center">
            <h1 className="now-showing">Now Showing</h1>
            <Link to="/all-movies-showing">view all</Link>
          </Col>
        </Row>
        <Row className="mt-5 pl-2 pl-lg-0">
          <Col className="col-12 px-0 now-showing-movie">
            {state.movie.map((data, index) => {
              return (
                <Card key={index}>
                  <div className="image-card">
                    <Link to={`movie-detail/${data.id}`}>
                      <img src={data.image} alt="ImageCard" />
                    </Link>
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
