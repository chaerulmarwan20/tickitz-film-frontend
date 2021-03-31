import { React, useState, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import Row from "../../../components/Row";
import Col from "../../../components/Col";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

import Image from "../../../assets/img/spider-admin.png";

export default function MovieDescription() {
  const Url = process.env.REACT_APP_API_URL;

  const token = localStorage.getItem("token");

  const imageRef = useRef(null);

  const [data, setData] = useState({
    title: "",
    genre: "",
    hour: "",
    minute: "",
    director: "",
    cast: "",
    synopsis: "",
    dateRealesed: "",
  });
  const [dataImage, setDataImage] = useState({
    image: {},
  });
  const [select, setSelect] = useState("No choosen");

  const handleFormChange = (event) => {
    console.log(event);
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("genre", data.genre);
    formData.append("image", dataImage.image);
    formData.append("duration", `${data.hour} hours ${data.minute} minutes`);
    formData.append("director", data.director);
    formData.append("cast", data.cast);
    formData.append("synopsis", data.synopsis);
    formData.append("dateRealesed", data.dateRealesed);
    axios
      .post(`${Url}/movies/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        }).then(() => {
          imageRef.current.value = "";
          setSelect("No Choosen");
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

  const handleChangeImage = (event) => {
    setSelect(event.target.files[0].name);
    setDataImage({
      image: event.target.files[0],
    });
  };

  return (
    <div className="movie-description d-flex justify-content-center pt-5 pb-5 pb-lg-4 px-4 mt-4">
      <Row>
        <Col className="col-12 col-lg-5">
          <Card className="image d-flex justify-content-center align-items-center">
            <img src={Image} alt="ImageDescription" width="177" />
            <input
              type="file"
              name="image"
              className="file-input"
              ref={imageRef}
              onChange={(event) => handleChangeImage(event)}
            />
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
              name="genre"
              value={data.genre}
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
              <Col className="col-12 d-flex justify-content-between align-items-center">
                <div>
                  Upload image: Click image movie <br /> Selected: {select}
                </div>
                <Button className="btn btn-add-movie" onClick={handleSubmit}>
                  Add movie
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}
