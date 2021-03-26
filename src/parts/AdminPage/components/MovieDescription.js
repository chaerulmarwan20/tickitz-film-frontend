import React from "react";
import Row from "../../../components/Row";
import Col from "../../../components/Col";
import Card from "../../../components/Card";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

import Image from "../../../assets/img/spider-admin.png";

export default function MovieDescription() {
  return (
    <div className="movie-description d-flex justify-content-center pt-5 pb-5 pb-lg-4 px-4 mt-4">
      <Row>
        <Col className="col-12 col-lg-5">
          <Card className="image d-flex justify-content-center align-items-center">
            <img src={Image} alt="ImageDescription" width="177" />
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
              placeholder="Jon Watts"
            ></Input>
          </div>
        </Col>
        <Col className="col-7 d-none d-lg-block pl-0">
          <div className="form-group">
            <Input
              label="Movie Name"
              type="text"
              name="movie"
              placeholder="Spider-Man: Homecoming"
            ></Input>
          </div>
          <div className="form-group category">
            <Input
              label="Category"
              type="text"
              name="category"
              placeholder="Action, Adventure, Sci-Fi"
            ></Input>
          </div>
          <div className="form-row">
            <div className="form-group col-6">
              <label htmlFor="date">Realese date</label>
              <Input type="date" name="date" value="2021-07-21"></Input>
            </div>
            <div className="form-group col-3">
              <Input
                label={`Duration (hour `}
                type="number"
                name="hour"
                placeholder="2"
                classLabel="hour"
              ></Input>
            </div>
            <div className="form-group col-3">
              <Input
                label="&nbsp;&nbsp;/ minute)"
                type="number"
                name="minute"
                placeholder="13"
              ></Input>
            </div>
          </div>
          <div className="form-group casts">
            <Input
              label="Casts"
              type="text"
              name="casts"
              placeholder="Tom Holland, Michael Keaton, Robert Dow.."
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
              placeholder="Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, | "
            ></textarea>
          </div>
        </Col>
      </Row>
    </div>
  );
}
