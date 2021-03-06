import { React, useState, useRef } from "react";
import Swal from "sweetalert2";
import axiosApiInstance from "../../../helpers/axios";

import Row from "../../../components/Row";
import Col from "../../../components/Col";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

import Image from "../../../assets/img/spider-admin.png";

export default function MovieDescription() {
  const Url = process.env.REACT_APP_API_URL;

  const imageRef = useRef(null);

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
  const [select, setSelect] = useState("No choosen");

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleChangeImage = (event) => {
    setSelect(event.target.files[0].name);
    setImgUrl(URL.createObjectURL(event.target.files[0]));
    setDataImage({
      image: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("genre", data.genre);
    formData.append("category", data.category);
    formData.append("image", dataImage.image);
    formData.append("duration", `${data.hour} hours ${data.minute} minutes`);
    formData.append("director", data.director);
    formData.append("cast", data.cast);
    formData.append("synopsis", data.synopsis);
    formData.append("dateRealesed", data.dateRealesed);
    axiosApiInstance
      .post(`${Url}/movies/`, formData)
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

  return (
    <div className="movie-description d-flex justify-content-center pt-5 pb-5 pb-lg-4 px-4 mt-4">
      <Row>
        <Col className="col-12 col-lg-5">
          <Card className="image d-flex justify-content-center align-items-center">
            <img src={imgUrl} alt="ImageDescription" width="177" />
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
