import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TimePicker from "./ReactBootstrapTimePicker";
import Swal from "sweetalert2";

import { getLocation } from "../../configs/redux/actions/location";
import axiosApiInstance from "../../helpers/axios";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";

import Chart from "./components/Chart";

import Image from "../../assets/img/movie2.jpg";
import Plus from "../../assets/img/plus.png";

export default function Index() {
  const Url = process.env.REACT_APP_API_URL;
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const imageRef = useRef(null);
  const dispatch = useDispatch();

  const { location } = useSelector((state) => state.location);

  const [imgUrl, setImgUrl] = useState(Image);
  const [data, setData] = useState({
    title: "",
    category: "",
    hour: "",
    minute: "",
    director: "",
    cast: "",
    genre: "",
    synopsis: "",
    dateRealesed: "",
  });
  const [dataImage, setDataImage] = useState({
    image: {},
  });
  const [time, setTime] = useState(0);
  const [arrTime, setArrTime] = useState(0);
  const [cinema, setCinema] = useState([]);
  const [date, setDate] = useState("");
  const [city, setCity] = useState(1);
  const [showTimes, setShowTimes] = useState([]);
  const [premiere] = useState([]);

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleChangeImage = (event) => {
    setImgUrl(URL.createObjectURL(event.target.files[0]));
    setDataImage({
      image: event.target.files[0],
    });
  };

  const handleClickAddTime = () => {
    if (showTimes.length === 7) {
      Swal.fire({
        title: "Error!",
        text: "Time too much. Max 7 time",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#5f2eea",
      });
    } else {
      showTimes.push(arrTime);
      setShowTimes(
        showTimes.map((item, index) => {
          return item;
        })
      );
    }
  };

  const handleChangeTime = (params) => {
    switch (params) {
      case 0:
        setArrTime("12:00am");
        break;
      case 3600:
        setArrTime("01:00am");
        break;
      case 7200:
        setArrTime("02:00am");
        break;
      case 10800:
        setArrTime("03:00am");
        break;
      case 14400:
        setArrTime("04:00am");
        break;
      case 18000:
        setArrTime("05:00am");
        break;
      case 21600:
        setArrTime("06:00am");
        break;
      case 25200:
        setArrTime("07:00am");
        break;
      case 28800:
        setArrTime("08:00am");
        break;
      case 32400:
        setArrTime("09:00am");
        break;
      case 36000:
        setArrTime("10:00am");
        break;
      case 39600:
        setArrTime("11:00am");
        break;
      case 43200:
        setArrTime("12:00pm");
        break;
      case 46800:
        setArrTime("01:00pm");
        break;
      case 50400:
        setArrTime("02:00pm");
        break;
      case 54000:
        setArrTime("03:00pm");
        break;
      case 57600:
        setArrTime("04:00pm");
        break;
      case 61200:
        setArrTime("05:00pm");
        break;
      case 64800:
        setArrTime("06:00pm");
        break;
      case 68400:
        setArrTime("07:00pm");
        break;
      case 72000:
        setArrTime("08:00pm");
        break;
      case 75600:
        setArrTime("09:00pm");
        break;
      case 79200:
        setArrTime("10:00pm");
        break;
      case 82800:
        setArrTime("11:00pm");
        break;
      default:
        setArrTime("12:00am");
        break;
    }
    setTime(params);
  };

  const handleChangeLocation = (e) => {
    setCity(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleClickPremiere = (e, id) => {
    if (premiere.includes(id) === false) {
      premiere.push(id);
    } else {
      const premiereSplice = premiere.indexOf(id);
      premiere.splice(premiereSplice, 1);
    }
    if (e.target.classList.contains("parent")) {
      if (e.target.parentElement.classList.contains("not-active")) {
        e.target.parentElement.classList.remove("not-active");
        e.target.parentElement.classList.add("active");
      } else {
        e.target.parentElement.classList.add("not-active");
        e.target.parentElement.classList.remove("active");
      }
    } else if (e.target.classList.contains("img-premiere")) {
      if (
        e.target.parentElement.parentElement.classList.contains("not-active")
      ) {
        e.target.parentElement.parentElement.classList.remove("not-active");
        e.target.parentElement.parentElement.classList.add("active");
      } else {
        e.target.parentElement.parentElement.classList.remove("active");
        e.target.parentElement.parentElement.classList.add("not-active");
      }
    } else {
      if (e.target.classList.contains("not-active")) {
        e.target.classList.remove("not-active");
        e.target.classList.add("active");
      } else {
        e.target.classList.remove("active");
        e.target.classList.add("not-active");
      }
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
    formData.append("dateRealesed", data.dateRealesed);
    formData.append("image", dataImage.image);
    formData.append("dateSchedule", date);
    formData.append("cinema", JSON.stringify(premiere));
    formData.append("city", city);
    formData.append("time", JSON.stringify(showTimes));
    axiosApiInstance
      .post(`${Url}/schedule`, formData)
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        }).then(() => {
          imageRef.current.value = "";
          setImgUrl(Image);
          setData({
            title: "",
            genre: "",
            hour: "",
            minute: "",
            director: "",
            cast: "",
            synopsis: "",
            dateRealesed: "",
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
    dispatch(getLocation())
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

  useEffect(() => {
    axiosApiInstance
      .get(`${Url}/cinemas`)
      .then((res) => {
        setCinema(res.data.data);
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
  }, [Url]);

  return (
    <>
      <Section className="description-premiere">
        <Container>
          <Row className="justify-content-center justify-content-xl-start">
            <Col className="col-xl-8 col-lg-10">
              <h1>Movie Description</h1>
              <div className="movie-description d-flex justify-content-center pt-5 pb-5 pb-lg-4 px-4 mt-4">
                <Row>
                  <Col className="col-12 col-lg-5">
                    <Card className="image d-flex justify-content-center align-items-center">
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
                    <Button className="btn btn-add d-lg-none mt-5">
                      Add description
                    </Button>
                    <div className="form-group director d-none d-lg-block">
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
                  <Col className="col-7 d-none d-lg-block pl-0">
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
                        <label htmlFor="date">Realese date</label>
                        <Input
                          type="date"
                          name="dateRealesed"
                          value={data.dateRealesed}
                          onChange={handleFormChange}
                        ></Input>
                      </div>
                      <div className="form-group col-3">
                        <Input
                          label={`Duration (hour `}
                          type="number"
                          name="hour"
                          placeholder="hour"
                          classLabel="hour"
                          value={data.hour}
                          onChange={handleFormChange}
                        ></Input>
                      </div>
                      <div className="form-group col-3">
                        <Input
                          label="&nbsp;&nbsp;/ minute)"
                          type="number"
                          name="minute"
                          placeholder="min"
                          value={data.minute}
                          onChange={handleFormChange}
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
                  <Col className="col-12 d-none d-lg-block mt-2">
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
                  <Col className="col-12 d-none d-lg-block mt-2">
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
                        <Col className="col-12 d-flex justify-content-end align-items-center">
                          <Button
                            className="btn btn-add-movie"
                            onClick={handleSubmit}
                          >
                            Add movie
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="col-xl-4 col-lg-10 mt-5 mt-xl-0 d-flex d-xl-block flex-column">
              <h1>Premiere Location</h1>
              <div className="location py-5 px-4 mt-4">
                <div className="d-flex justify-content-center justify-content-xl-start">
                  <select
                    className="custom-select"
                    name="location"
                    id="location"
                    onChange={(e) => handleChangeLocation(e)}
                  >
                    {location.map((item, index) => {
                      return (
                        <option value={item.id} key={index}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="image-cinemas d-flex justify-content-center justify-content-xl-between align-items-center mt-3">
                  {cinema.map((item, index) => {
                    return (
                      <div
                        className="not-active d-flex justify-content-center align-items-center mr-4 mr-xl-0"
                        key={index}
                        style={{ cursor: "pointer" }}
                        onClick={(e) => handleClickPremiere(e, item.id)}
                      >
                        <div
                          onClick={(e) => handleClickPremiere(e, item.id)}
                          className="parent"
                        >
                          <img
                            src={`${ImgUrl}${item.image}`}
                            alt="Premiere"
                            width="80"
                            onClick={(e) => handleClickPremiere(e, item.id)}
                            className="img-premiere"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <h1 className="mt-5 mt-xl-4">Showtimes</h1>
              <div className="showtimes py-5 px-4 mt-4">
                <div className="d-flex justify-content-center justify-content-xl-start">
                  <Input
                    type="date"
                    name="date"
                    value={date}
                    onChange={handleDateChange}
                  ></Input>
                </div>
                <Row className="justify-content-center mt-4">
                  <Col className="col-12 mt-2 mt-xl-1">
                    <div className="d-flex justify-content-center justify-content-xl-between align-items-center">
                      <Button
                        className="btn btn-plus d-flex justify-content-center align-items-center"
                        toggle="modal"
                        target="#timeModal"
                      >
                        <img src={Plus} alt="Plus" width="30" />
                      </Button>
                    </div>
                    <div className="d-flex flex-wrap justify-content-center mt-4">
                      {showTimes.length === 0 ? (
                        <span>No time choosen</span>
                      ) : (
                        showTimes.map((item, index) => {
                          return <span key={index}>{item}</span>;
                        })
                      )}
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center justify-content-xl-start mt-5">
            <Col className="col-lg-10 col-xl-12">
              <h1>Sales Charts</h1>
              <div className="based d-flex py-3 px-4 mt-4">
                <Link className="active mt-1" to="#">
                  Based on Movies
                </Link>
                <Link className="mt-1 ml-5" to="#">
                  Based on Location
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center justify-content-xl-start mt-5">
            <Chart></Chart>
          </Row>
          <Row className="justify-content-center justify-content-xl-start view-more">
            <Col className="col-4 col-lg-4 col-xl-5">
              <hr />
            </Col>
            <Col className="col-4 col-lg-2 d-flex justify-content-center">
              <Link to="#">view more</Link>
            </Col>
            <Col className="col-4 col-lg-4 col-xl-5">
              <hr />
            </Col>
          </Row>
        </Container>
      </Section>
      <div
        className="modal fade"
        id="timeModal"
        aria-labelledby="timeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="timeModalLabel">
                Showtimes
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <TimePicker onChange={handleChangeTime} value={time} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-close"
                data-dismiss="modal"
                onClick={() => handleClickAddTime()}
              >
                Add time
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
