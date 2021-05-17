import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getShowingMovies } from "../../configs/redux/actions/homePage";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Card from "../../components/Card";

export default function ShowingMovie() {
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const dispatch = useDispatch();
  const { showingMovies } = useSelector((state) => state.homePage);

  useEffect(() => {
    dispatch(getShowingMovies())
      .then((res) => {})
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      });
  }, [dispatch]);

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
            {showingMovies.map((data, index) => {
              return (
                <Card key={index}>
                  <div className="image-card">
                    <Link to={`movie-detail/${data.id}`}>
                      <img src={`${ImgUrl}${data.image}`} alt="ImageCard" />
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
