import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import Swal from "sweetalert2";
import { getMovieDetail } from "../../configs/redux/actions/movieDetail";

import axiosApiInstance from "../../helpers/axios";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function Index() {
  const Url = process.env.REACT_APP_API_URL;
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const imageRef = useRef(null);

  const { id } = useParams();

  const dispatch = useDispatch();

  const [imgUrl, setImgUrl] = useState("");
  const [data, setData] = useState({
    title: "",
    category: "",
    hour: "",
    minute: "",
    director: "",
    cast: "",
    genre: "",
    synopsis: "",
  });
  const [dataImage, setDataImage] = useState({
    image: {},
  });
  const [status, setStatus] = useState(false);
  const [showing, setShowing] = useState(false);

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleChangeImage = (event) => {
    setImgUrl(URL.createObjectURL(event.target.files[0]));
    setStatus(true);
    setDataImage({
      image: event.target.files[0],
    });
  };

  const handleCheck = () => {
    if (showing) {
      setShowing(false);
    } else {
      setShowing(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("genre", data.genre);
    formData.append("duration", `${data.hour} hours ${data.minute} minutes`);
    formData.append("director", data.director);
    formData.append("cast", data.cast);
    formData.append("synopsis", data.synopsis);
    formData.append("category", data.category);
    formData.append("realesed", showing);
    if (status) {
      formData.append("image", dataImage.image);
    }
    axiosApiInstance
      .put(`${Url}/schedule/${id}`, formData)
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        }).then(() => {
          dispatch(getMovieDetail(id))
            .then((res) => {
              setData({
                title: res[0].title,
                category: res[0].category,
                director: res[0].director,
                cast: res[0].cast,
                genre: res[0].genre,
                synopsis: res[0].synopsis,
                hour: res[0].duration.split(" ")[0],
                minute: res[0].duration.split(" ")[2],
              });
              setShowing(res[0].realesed === 1 ? true : false);
              setImgUrl(`${ImgUrl}${res[0].image}`);
              setStatus(false);
            })
            .catch((err) => {
              Swal.fire({
                title: "Error!",
                text: err.message,
                icon: "error",
                confirmButtonText: "Ok",
                confirmButtonColor: "#5f2eea",
              });
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
  };

  useEffect(() => {
    dispatch(getMovieDetail(id))
      .then((res) => {
        setData({
          title: res[0].title,
          category: res[0].category,
          director: res[0].director,
          cast: res[0].cast,
          genre: res[0].genre,
          synopsis: res[0].synopsis,
          hour: res[0].duration.split(" ")[0],
          minute: res[0].duration.split(" ")[2],
        });
        setShowing(res[0].realesed === 1 ? true : false);
        setImgUrl(`${ImgUrl}${res[0].image}`);
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      });
  }, [dispatch, id, ImgUrl]);

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <>
      <Section className="description-premiere">
        <Container>
          <Row className="justify-content-center">
            <Col className="col-xl-8 col-lg-10">
              <h1>Movie Description</h1>
              <div className="movie-description d-flex justify-content-center py-4 px-4 mt-4">
                <Row>
                  <Col className="col-12 col-lg-5">
                    <Card className="image d-flex justify-content-center align-items-center mx-auto mx-lg-0">
                      <img
                        src={imgUrl}
                        alt="ImageDescription"
                        width="177"
                        height="272"
                      />
                      <input
                        type="file"
                        name="image"
                        className="file-input"
                        ref={imageRef}
                        onChange={(event) => handleChangeImage(event)}
                      />
                      <div className="shadow">Upload</div>
                    </Card>
                    <div className="form-group director">
                      <Input
                        label="Director"
                        type="text"
                        className="director"
                        name="director"
                        placeholder="Write director"
                        value={data.director}
                        onChange={handleFormChange}
                      ></Input>
                    </div>
                  </Col>
                  <Col className="col-12 col-lg-7 pl-lg-0">
                    <div className="form-group">
                      <Input
                        label="Movie Name"
                        type="text"
                        name="title"
                        placeholder="Write movie name"
                        value={data.title}
                        onChange={handleFormChange}
                      ></Input>
                    </div>
                    <div className="form-group category">
                      <Input
                        label="Category"
                        type="text"
                        name="category"
                        value={data.category}
                        placeholder="Write category"
                        onChange={handleFormChange}
                      ></Input>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-6">
                        <Input
                          label="Duration | Hour"
                          type="number"
                          name="hour"
                          placeholder="hour"
                          classLabel="hour"
                          value={data.hour}
                          onChange={handleFormChange}
                          isMin
                        ></Input>
                      </div>
                      <div className="form-group col-6">
                        <Input
                          label="Minute"
                          type="number"
                          name="minute"
                          placeholder="minute"
                          value={data.minute}
                          onChange={handleFormChange}
                          isMin
                        ></Input>
                      </div>
                    </div>
                    <div className="form-group casts">
                      <Input
                        label="Casts"
                        type="text"
                        name="cast"
                        placeholder="Write casts"
                        value={data.cast}
                        onChange={handleFormChange}
                      ></Input>
                    </div>
                  </Col>
                  <Col className="col-12 mt-0 mt-lg-2">
                    <div className="form-group">
                      <Input
                        label="Genre"
                        type="text"
                        name="genre"
                        placeholder="Write genre"
                        value={data.genre}
                        onChange={handleFormChange}
                      ></Input>
                    </div>
                  </Col>
                  <Col className="col-12 mt-0 mt-lg-2">
                    <div className="form-group">
                      <label htmlFor="synopsis">Synopsis</label>
                      <textarea
                        className="form-control"
                        id="synopsis"
                        name="synopsis"
                        placeholder="Write synopsis"
                        value={data.synopsis}
                        onChange={handleFormChange}
                      ></textarea>
                      <Row className="mt-3">
                        <Col className="col-12 d-flex justify-content-start">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="now-showing"
                              checked={showing ? true : false}
                              onChange={() => handleCheck()}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="now-showing"
                            >
                              Make it now showing movie
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-4 mt-md-3">
                        <Col className="col-12 d-flex justify-content-end align-items-center">
                          <Button
                            className="btn btn-update-movie"
                            onClick={handleSubmit}
                          >
                            Update changes
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
}
