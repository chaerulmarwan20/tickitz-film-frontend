import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Nav from "../../components/Nav";
import Section from "../../components/Section";
import Card from "../../components/Card";
import Input from "../../components/Input";

export default function Index() {
  window.scrollTo(0, 0);
  const Url = process.env.REACT_APP_API_URL;
  const [state, setState] = useState({
    movie: [],
  });

  const [data, setData] = useState({
    keyword: "",
  });

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
    axios
      .post(`${Url}/movies/search-not-realese?perPage=10`, {
        keyword: event.target.value,
      })
      .then((res) => {
        setState({
          movie: res.data.data,
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        }).then((result) => {
          if (result.isConfirmed) {
            setData({
              keyword: "",
            });
            axios
              .get(`${Url}/movies/realesed?realese=false&perPage=10`)
              .then((res) => {
                setState({
                  movie: res.data.data,
                });
              });
          }
        });
      });
  };

  useEffect(() => {
    axios.get(`${Url}/movies/realesed?realese=false&perPage=10`).then((res) => {
      setState({
        movie: res.data.data,
      });
    });
  }, []);

  return (
    <Section className="all-movies">
      <Container>
        <Row className="justify-content-center">
          <Col className="mt-5 col-6 d-flex justify-content-center">
            <Input
              type="text"
              className="form-search-movie"
              placeholder="Search..."
              name="keyword"
              value={data.keyword}
              onChange={handleFormChange}
            />
          </Col>
        </Row>
        <Row className="pl-2 pl-lg-0">
          <Col className="col-12 px-0 container-all-movie">
            {state.movie.map((data, index) => {
              return (
                <Card key={index} className="mt-5">
                  <div className="card-all-movie">
                    <img src={data.image} alt="ImageAllMovies" />
                    <p>{data.title}</p>
                    <span>{data.genre}</span>
                    <Link
                      to={`movie-detail/${data.id}`}
                      className="btn btn-details"
                    >
                      Details
                    </Link>
                  </div>
                </Card>
              );
            })}
          </Col>
        </Row>
        <Row className="pl-2 pl-lg-0 mt-5">
          <Col className="col-12 px-0">
            <Nav className="d-flex justify-content-center">
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
