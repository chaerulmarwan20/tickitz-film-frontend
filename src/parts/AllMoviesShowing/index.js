import { React, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import {
  getAllMoviesShowing,
  searchMoviesShowing,
} from "../../configs/redux/actions/allMoviesShowing";

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
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const useQuery = () => new URLSearchParams(useLocation().search);

  const params = useQuery();

  const page = params.get("page") ? params.get("page") : 1;
  const perPage = params.get("perPage") ? params.get("perPage") : 5;

  const dispatch = useDispatch();
  const { allMoviesShowing, totalPage, currentPage } = useSelector(
    (state) => state.allMoviesShowing
  );
  const [paginate, setPaginate] = useState(1);

  const [query, setQuery] = useState("");
  const [show, setShow] = useState(true);

  const handleFormChange = (event) => {
    setQuery(event.target.value);
    axios
      .get(
        `${Url}/movies/is-realese/?keyword=${event.target.value}&perPage=${perPage}`
      )
      .then((res) => {
        if (event.target.value === "") {
          setShow(true);
        } else {
          setShow(false);
        }
        dispatch(searchMoviesShowing(res.data.data));
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        }).then((result) => {
          setShow(true);
          if (result.isConfirmed) {
            setQuery("");
            dispatch(getAllMoviesShowing(page, perPage));
          } else {
            setQuery("");
            dispatch(getAllMoviesShowing(page, perPage));
          }
        });
      });
  };

  useEffect(() => {
    dispatch(getAllMoviesShowing(page, perPage));
    setPaginate(totalPage < 6 ? totalPage : 5);
  }, [dispatch, page, perPage, totalPage]);

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
              value={query}
              onChange={handleFormChange}
            />
          </Col>
        </Row>
        <Row className="pl-2 pl-lg-0">
          <Col className="col-12 px-0 container-all-movie">
            {allMoviesShowing.map((data, index) => {
              return (
                <Card key={index} className="mt-5">
                  <div className="card-all-movie">
                    <img src={`${ImgUrl}${data.image}`} alt="ImageAllMovies" />
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
              {show === true && (
                <ul className="pagination-custom">
                  {Array.from(Array(paginate).keys()).map((data, index) => {
                    return (
                      <li key={index}>
                        <Link
                          to={`/all-movies-showing?page=${
                            currentPage >= 5 && currentPage < totalPage
                              ? data + (currentPage - 3)
                              : currentPage >= 5 && currentPage === totalPage
                              ? data + (currentPage - 3) - 1
                              : data + 1
                          }&perPage=${perPage}`}
                          className={`${
                            currentPage >= 5 && currentPage < totalPage
                              ? data + (currentPage - 3) === currentPage &&
                                "page-active"
                              : currentPage >= 5 && currentPage === totalPage
                              ? data + (currentPage - 3) - 1 === currentPage &&
                                "page-active"
                              : data + 1 === currentPage && "page-active"
                          }`}
                        >
                          {currentPage >= 5 && currentPage < totalPage
                            ? data + (currentPage - 3)
                            : currentPage >= 5 && currentPage === totalPage
                            ? data + (currentPage - 3) - 1
                            : data + 1}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </Nav>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
