import React from "react";
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Button from "../../components/Button";

import User from "../../assets/img/user.png";
import Star from "../../assets/img/star.png";
import CineOne from "../../assets/img/CineOne21 2.png";
import Ebv from "../../assets/img/ebv.id 2.png";

export default function Order() {
  return (
    <Section className="order-history mb-5">
      <Container>
        <Row>
          <Col className="col-lg-5 col-xl-4 d-none d-md-block">
            <div className="info d-block pt-4">
              <Row className="px-5">
                <Col className="pl-0">
                  <h1>Info</h1>
                </Col>
                <Row className="d-flex align-items-center justify-content-end pr-0 ml-auto dot">
                  <div className="d-flex">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Row>
              </Row>
              <Row className="flex-column px-5 mt-4">
                <Col className="d-flex justify-content-center">
                  <img
                    src={User}
                    width="136"
                    alt="User"
                    className="rounded-circle"
                  />
                </Col>
                <Col className="d-flex justify-content-center text-center mt-2">
                  <h2>Jonas El Rodriguez</h2>
                </Col>
                <Col className="d-flex justify-content-center text-center">
                  <p>Moviegoers</p>
                </Col>
              </Row>
              <hr className="mt-4" />
              <Row className="mx-5 mt-4">
                <Col>
                  <h3 className="mb-4">Loyalty Points</h3>
                  <div className="moviegoers pl-3 pt-3">
                    <div></div>
                    <div></div>
                    <h4>Moviegoers</h4>
                    <p className="mt-4">
                      320 <span>points</span>
                    </p>
                    <img src={Star} alt="Star" width="51" />
                  </div>
                  <h5 className="mt-4 text-center">
                    180 points become a master
                  </h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: ` 45%` }}
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className="col-lg-7 col-xl-8">
            <div className="breadcrumbs-custom d-none d-lg-flex align-items-center">
              <Link to="#" className="mx-5">
                Account Settings
              </Link>
              <Link to="#" className="active">
                Order History
              </Link>
            </div>
            <Container>
              <Row className="detail-order justify-content-between flex-column flex-md-row align-items-start align-items-md-center mt-0 mt-md-4 py-4">
                <div className="left pl-4 pl-md-5 order-1 order-md-0">
                  <p className="m-0">Tuesday, 07 July 2020 - 04:30pm</p>
                  <h3 className="mt-1">Spider-Man: Homecoming</h3>
                </div>
                <div className="right pr-0 pr-md-5 pl-4 pl-md-0 order-0 order-md-1 mb-4 mb-md-0">
                  <img src={CineOne} alt="CineOne" width="122" />
                </div>
                <hr className="mt-4 mb-4 order-2" />
                <div className="pl-4 pl-md-5 pb-2 order-3">
                  <Button className="btn btn-ticket ml-2 ml-sm-0">
                    Ticket in active
                  </Button>
                </div>
                <div className="pr-0 pr-md-5 pb-2 order-4 d-none d-md-block">
                  <select className="custom-select">
                    <option>Show Details</option>
                  </select>
                </div>
              </Row>
              <Row className="detail-order justify-content-between flex-column flex-md-row align-items-start align-items-md-center mt-4 py-4">
                <div className="left pl-4 pl-md-5 order-1 order-md-0">
                  <p className="m-0">Monday, 14 June 2020 - 02:00pm</p>
                  <h3 className="mt-1">Avengers: End Game</h3>
                </div>
                <div className="right pr-0 pr-md-5 pl-4 pl-md-0 order-0 order-md-1 mb-4 mb-md-0">
                  <img src={Ebv} alt="Ebv" width="122" />
                </div>
                <hr className="mt-4 mb-4 order-2" />
                <div className="pl-4 pl-md-5 pb-2 order-3">
                  <Button className="btn btn-ticket-used ml-2 ml-sm-0">
                    Ticket used
                  </Button>
                </div>
                <div className="pr-0 pr-md-5 pb-2 order-4 d-none d-md-block">
                  <select className="custom-select">
                    <option>Show Details</option>
                  </select>
                </div>
              </Row>
              <Row className="detail-order justify-content-between flex-column flex-md-row align-items-start align-items-md-center mt-4 py-4 d-none d-md-flex">
                <div className="left pl-4 pl-md-5 order-1 order-md-0">
                  <p className="m-0">Monday, 10 March 2020 - 04:00pm</p>
                  <h3 className="mt-1">Thor: Ragnarok</h3>
                </div>
                <div className="right pr-0 pr-md-5 pl-4 pl-md-0 order-0 order-md-1 mb-4 mb-md-0">
                  <img src={Ebv} alt="Ebv" width="122" />
                </div>
                <hr className="mt-4 mb-4 order-2" />
                <div className="pl-4 pl-md-5 pb-2 order-3">
                  <Button className="btn btn-ticket-used ml-2 ml-sm-0">
                    Ticket used
                  </Button>
                </div>
                <div className="pr-0 pr-md-5 pb-2 order-4 d-none d-md-block">
                  <select className="custom-select">
                    <option>Show Details</option>
                  </select>
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
