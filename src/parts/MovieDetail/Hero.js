import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Header from "../../components/Header";
import Card from "../../components/Card";

export default function Hero() {
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

  const setDate = (params) => {
    const date = new Date(params);
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
    return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <Header className="movies-details mb-5">
      <Container>
        {state.movie.map((data, index) => {
          return (
            <Row key={index} className="mt-5">
              <Col className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-start">
                <Card className="movie-header">
                  <img src={data.image} alt="MovieHeader" />
                </Card>
              </Col>
              <Col className="col-12 movie col-lg-7 mt-5 mt-lg-0 pl-0">
                <div className="d-flex flex-column text-center text-lg-left mb-3">
                  <h1>{data.title}</h1>
                  <p className="genre">{data.genre}</p>
                </div>
                <Row className="flex-row flex-lg-column ml-auto ml-lg-n3 movie-detail">
                  <Col className="col-6 col-lg-12">
                    <h2>Release Date</h2>
                    <p>{setDate(data.createdAt)}</p>
                  </Col>
                  <Col className="col-6 col-lg-12">
                    <h2>Duration</h2>
                    <p>{data.duration}</p>
                  </Col>
                  <Col className="col-6 col-lg-12">
                    <h2>Directed by</h2>
                    <p>{data.director}</p>
                  </Col>
                  <Col className="col-6 col-lg-12">
                    <h2>Casts</h2>
                    <p>
                      {data.cast}., <span className="d-none">etc.</span>
                      <span>...</span>
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          );
        })}
      </Container>
    </Header>
  );
}