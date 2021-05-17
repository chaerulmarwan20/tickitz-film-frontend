import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import Swal from "sweetalert2";
import { getMovieDetail } from "../../configs/redux/actions/movieDetail";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Header from "../../components/Header";
import Card from "../../components/Card";

function Hero() {
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const { id } = useParams();

  const dispatch = useDispatch();
  const { movieDetail } = useSelector((state) => state.movieDetail);

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

  useEffect(() => {
    dispatch(getMovieDetail(id))
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
  }, [dispatch, id]);

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <Header className="movies-details mb-5">
      <Container>
        {movieDetail.map((data, index) => {
          return (
            <Row key={index} className="mt-5">
              <Col className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-start">
                <Card className="movie-header">
                  <img src={`${ImgUrl}${data.image}`} alt="MovieHeader" />
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
                    <p>
                      {data.realesed === 1
                        ? setDate(data.createdAt)
                        : "Unknown"}
                    </p>
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
                    <p>{`${data.cast.substring(0, 48)}...`}</p>
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

export default Hero;
