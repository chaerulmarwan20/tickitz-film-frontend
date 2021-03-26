import React from "react";
import Row from "../../../components/Row";
import Col from "../../../components/Col";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import Plus from "../../../assets/img/plus.png";

export default function Showtimes() {
  return (
    <div className="showtimes py-5 px-4 mt-4">
      <div className="d-flex justify-content-center justify-content-xl-start">
        <Input type="date" name="date" value="2021-07-21"></Input>
      </div>
      <Row className="justify-content-center mt-4">
        <Col className="col-12 mt-2 mt-xl-1">
          <div className="d-flex justify-content-center justify-content-xl-between align-items-center">
            <Button className="btn btn-plus d-flex justify-content-center align-items-center">
              <img src={Plus} alt="Plus" width="30" />
            </Button>
            <span>08:30am</span>
            <span>10:30pm</span>
            <span>12:00pm</span>
          </div>
          <div className="d-flex justify-content-center justify-content-xl-start mt-4">
            <span>04:30pm</span>
            <span>07:00pm</span>
            <span>08:30pm</span>
            <span>08:30pm</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}
