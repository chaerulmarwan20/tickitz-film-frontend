import {React, useState ,useEffect} from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Card from "../../components/Card";

export default function UpcomingMovies() {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const Url = process.env.REACT_APP_API_URL
  const [state, setState] = useState({
    movie: []
  })

  useEffect( () => {
    axios.get(`${Url}/movies/`)
      .then(res => {
        setState({
          movie: res.data.data
        });
      });
  }, [Url]);

  return (
    <Section className="upcoming-movies">
      <Container>
        <Row>
          <Col className="col-12 d-flex justify-content-between align-items-center">
            <h1 className="upcoming">Upcoming Movies</h1>
            <Link to="#">view all</Link>
          </Col>
        </Row>
        <div className="mt-4 container-btn-month">
          {month.map((item, index) => {
            return (
              <Link
                to="#"
                key={index}
                className={`btn btn-month ${index === 0 ? "main" : ""}`}
              >
                {item}
              </Link>
            );
          })}
        </div>
        <Row className="pl-2 pl-lg-0">
          <Col className="col-12 px-0 container-upcoming-movie">
            {state.movie.map((data, index) => {
              return (
                <Card key={index}>
                  <div className="card-upcoming-movie">
                    <img src={data.image} alt="ImageUpcomingMovie" />
                    <p>{data.title}</p>
                    <span>{data.genre}</span>
                    <Link to={`movie-detail/${data.id}`} className="btn btn-details">
                      Details
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
