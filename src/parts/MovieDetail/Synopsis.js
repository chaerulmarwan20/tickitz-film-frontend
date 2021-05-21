import React, { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { getUser } from "../../configs/redux/actions/user";
import axiosApiInstance from "../../helpers/axios";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Button from "../../components/Button";

export default function Synopsis() {
  const Url = process.env.REACT_APP_API_URL;

  const history = useHistory();

  const dispatch = useDispatch();

  const { role } = useSelector((state) => state.user);

  const { id } = useParams();

  const { movieDetail } = useSelector((state) => state.movieDetail);

  const handleClickDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      confirmButtonColor: "#ea2e57",
      cancelButtonText: "No, cancel!",
      cancelButtonColor: "#5f2eea",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosApiInstance
          .delete(`${Url}/schedule/${id}`)
          .then((res) => {
            Swal.fire({
              title: "Success!",
              text: res.data.message,
              icon: "success",
              confirmButtonColor: "#5f2eea",
            }).then(() => {
              Swal.fire({
                title: "Info!",
                text: "Redirect to the movie page",
                icon: "info",
                confirmButtonColor: "#5f2eea",
              }).then(() => {
                history.push("/all-movies-showing");
              });
            });
          })
          .catch((err) => {
            Swal.fire({
              title: "Error!",
              text: err.response.data.message,
              icon: "error",
              confirmButtonText: "Ok",
              confirmButtonColor: "#5f2eea",
            });
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled!",
          text: "Movie is safe :)",
          icon: "info",
          confirmButtonColor: "#5f2eea",
        });
      }
    });
  };

  useEffect(() => {
    dispatch(getUser())
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
        {role === 1 && (
          <Row className="mt-5">
            <Col className="col-12 d-flex justify-content-center">
              <Link
                type="submit"
                className="btn btn-update mr-5 d-flex justify-content-center align-items-center"
                to={`/edit-movie/${id}`}
              >
                Update movie
              </Link>
              <Button
                type="submit"
                className="btn btn-delete"
                onClick={() => handleClickDelete()}
              >
                Delete movie
              </Button>
            </Col>
          </Row>
        )}
      </Container>
    </Section>
  );
}
