import React from "react";
import { Link } from "react-router-dom";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Input from "../../components/Input";

import User from "../../assets/img/user.png";
import Star from "../../assets/img/star.png";

export default function Profile() {
  return (
    <Section className="profile">
      <Container>
        <Row>
          <Col className="col-lg-5 col-xl-4">
            <div className="info d-block pt-4">
              <Row className="px-5">
                <Col className="pl-0">
                  <h1>Info</h1>
                </Col>
                <Col className="d-flex align-items-center justify-content-end pr-0 ml-auto dot">
                  <div className="d-flex">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Col>
              </Row>
              <Row className="flex-column px-5 mt-4">
                <Col className="d-flex justify-content-center">
                  <img
                    src={User}
                    width="136"
                    className="rounded-circle"
                    alt="User"
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
                <div className="col">
                  <h3 className="mb-4">Loyalty Points</h3>
                  <div className="moviegoers pl-3 pt-3">
                    <div></div>
                    <div></div>
                    <h4>Moviegoers</h4>
                    <p className="mt-4">
                      320 <span>points</span>
                    </p>
                    <img src={Star} width="51" alt="Star" />
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
                </div>
              </Row>
            </div>
          </Col>
          <Col className="col-lg-7 col-xl-8">
            <div className="breadcrumbs-custom d-none d-lg-flex align-items-center">
              <Link to="#" className="mx-5 active">
                Account Settings
              </Link>
              <Link to="#">Order History</Link>
            </div>
            <h6 className="d-block d-lg-none mt-4">Account Settings</h6>
            <div className="details-information mt-4 py-5 px-4">
              <p>Details Information</p>
              <hr />
              <form className="mt-5">
                <Row>
                  <Col className="col-xl-6 d-none d-lg-block">
                    <div className="form-group">
                      <Input
                        label="First Name"
                        type="text"
                        name="first-name"
                        placeholder="Jonas"
                      />
                    </div>
                  </Col>
                  <Col className="col-xl-6 d-none d-lg-block">
                    <div className="form-group">
                      <Input
                        label="Last Name"
                        type="text"
                        name="last-name"
                        placeholder="El Rodriguez"
                      />
                    </div>
                  </Col>
                  <Col className="col-xl-6 d-block d-lg-none">
                    <div className="form-group">
                      <Input
                        label="Full Name"
                        type="text"
                        name="full-name"
                        placeholder="Jonas El Rodriguez"
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-xl-6">
                    <div className="form-group">
                      <Input
                        label="E-mail"
                        type="email"
                        name="email"
                        placeholder="jonasrodrigu123@gmail.com"
                      />
                    </div>
                  </Col>
                  <Col className="col-xl-6">
                    <div className="form-group">
                      <label htmlFor="phone-number">Phone Number</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text profile-page">
                            +62
                          </div>
                        </div>
                        <Input
                          type="number"
                          name="phone-number"
                          placeholder="81445687121"
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
            <div className="account-privacy mt-4 py-5 px-4">
              <p>Account and Privacy</p>
              <hr />
              <form className="mt-5">
                <Row>
                  <Col className="col-xl-6">
                    <div className="form-group">
                      <Input
                        label="New Password"
                        type="password"
                        name="password"
                        placeholder="Write your password"
                      />
                    </div>
                  </Col>
                  <Col className="col-xl-6">
                    <div className="form-group">
                      <Input
                        label="Confirm Password"
                        type="password"
                        name="confirm-password"
                        placeholder="Confirm your password"
                      />
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
            <div className="text-center text-lg-left">
              <Button type="button" className="btn btn-update my-5">
                Update changes
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
