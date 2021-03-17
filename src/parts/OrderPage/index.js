import React from "react";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Select from "../../components/Select";
import RowCinema from "./components/Row";
import SeatCinema from "./components/Seat";
import OrderInfo from "./components/OrderInfo";

import CineOne from "../../assets/img/CineOne21-order.png";

export default function index() {
  return (
    <Section className="movie-order">
      <Container>
        <Row>
          <Col className="col-12 col-xl-7">
            <h1 className="d-none d-md-block">Movie Selected</h1>
            <div className="movie-selected mt-3 d-md-flex justify-content-between align-items-center px-4 pt-4 pb-3 d-none">
              <h2>Spider-Man: Homecoming</h2>
              <Button className="btn btn-change-movie">Change movie</Button>
            </div>
            <h1 className="mt-md-4">Choose Your Seat</h1>
            <div className="seat mt-3">
              <p className="text-center screen">Screen</p>
              <hr className="mb-4" />
              <RowCinema></RowCinema>
              <SeatCinema></SeatCinema>
              <p className="seating-key mt-1 mt-md-3">Seating Key</p>
              <Row className="justify-content-around availability mt-3 mt-md-0">
                <Col className="d-md-flex justify-content-around d-none">
                  <p>Available</p>
                  <p>Selected</p>
                  <p>Love nest</p>
                  <p>Sold</p>
                </Col>
                <Col className="pl-4 ml-2 d-md-none">
                  <p>A - G</p>
                  <p>Available</p>
                  <p>Love nest</p>
                </Col>
                <Col className="pl-0 d-md-none">
                  <p>1 - 14</p>
                  <p>Selected</p>
                  <p>Sold</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="col-12 col-xl-5 container-order-info mt-4 mt-xl-0 d-none d-md-block">
            <h1>Order Info</h1>
            <div className="order-info mt-3 pt-4 pb-3">
              <Row className="d-flex flex-column align-items-center">
                <img src={CineOne} alt="CineOne" width="132" />
                <h2 className="mt-1">CineOne21 Cinema</h2>
              </Row>
              <OrderInfo
                heading="Movie Selected"
                title="Spider-Man: Homecoming"
              ></OrderInfo>
              <OrderInfo
                heading="Tuesday, 07 July 2020"
                title="02:00pm"
              ></OrderInfo>
              <OrderInfo heading="One ticket price" title="$10"></OrderInfo>
              <OrderInfo heading="Seat choosed" title="C4, C5, C6"></OrderInfo>
              <hr />
              <Row className="px-5 mt-3 justify-content-between">
                <h4>Total Payment</h4>
                <h5>$30</h5>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="d-md-none">
          <Col className="col-12">
            <div className="choosed d-flex align-items-center justify-content-between mt-3 py-2 px-3">
              <h2 className="mt-2">Choosed</h2>
              <p className="mt-3">C4, C5, C6</p>
            </div>
          </Col>
          <Col className="col-12">
            <div className="input-choosed d-flex align-items-center justify-content-around mt-3 py-3 px-3">
              <Select option={["C", "D", "E"]}></Select>
              <Select option={["4", "5", "6"]}></Select>
            </div>
          </Col>
          <Col className="col-12">
            <div className="input-choosed d-flex align-items-center justify-content-around mt-3 py-3 px-3">
              <Select option={["C", "D", "E"]}></Select>
              <Select option={["4", "5", "6"]}></Select>
            </div>
          </Col>
          <Col className="col-12">
            <div className="input-choosed d-flex align-items-center justify-content-around mt-3 py-3 px-3">
              <Select option={["C", "D", "E"]}></Select>
              <Select option={["4", "5", "6"]}></Select>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 pb-4">
          <Col className="col-12 col-md-6 col-xl-3">
            <Button className="btn btn-change-your-movie">
              <span className="d-none d-md-block">Change your Movie</span>
              <span className="d-block d-md-none">Add new seat</span>
            </Button>
          </Col>
          <Col className="col-12 col-md-6 col-xl-3 ml-xl-5 d-flex justify-content-start justify-content-md-end d-xl-block">
            <Button className="btn btn-checkout">Checkout now</Button>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
