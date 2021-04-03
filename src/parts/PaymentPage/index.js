import React from "react";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Card from "../../components/Card";
import PaymentInfo from "./components/PaymentInfo";
import PaymentMethod from "./components/PaymentMethod";

import Alert from "../../assets/img/warning.png";

export default function index() {
  window.scrollTo(0, 0);

  return (
    <Section className="payment-detail">
      <Container>
        <Row>
          <Col className="col-lg-12 col-xl-8">
            <h1 className="d-none d-md-block">Payment Info</h1>
            <Card className="d-none d-md-block payment-info p-5 mt-4">
              <Container>
                <PaymentInfo
                  heading="Date & time"
                  title="Tuesday, 07 July 2020 at 02:00pm"
                ></PaymentInfo>
                <PaymentInfo
                  heading="Movie title"
                  title="Spider-Man: Homecoming"
                ></PaymentInfo>
                <PaymentInfo
                  heading="Cinema name"
                  title="CineOne21 Cinema"
                ></PaymentInfo>
                <PaymentInfo
                  heading="Number of tickets"
                  title="3 pieces"
                ></PaymentInfo>
                <PaymentInfo
                  heading="Total payment"
                  title="$30,00"
                ></PaymentInfo>
              </Container>
            </Card>
            <h1 className="mt-5 choose-payment">
              <span className="d-none d-md-inline-block">Choose a</span> Payment
              Method
            </h1>
            <Card className="payment-method mt-4 pt-5 pb-4">
              <Row className="justify-content-center">
                <PaymentMethod></PaymentMethod>
              </Row>
              <div className="d-flex ml-3 ml-md-0 justify-content-center mt-2 mt-md-3 mb-2 mb-md-4">
                <hr />
                <p className="or">or</p>
                <hr />
              </div>
              <Row className="ml-2 ml-md-0 justify-content-center">
                <p className="pay">
                  Pay via cash. <span>See how it work</span>
                </p>
              </Row>
            </Card>
          </Col>
          <Col className="col-lg-12 col-xl-4 mt-5 mt-xl-0">
            <h1 className="personal-info-heading">Personal Info</h1>
            <Card className="personal-info p-4 mt-4">
              <form className="mt-4">
                <div className="form-group">
                  <Input
                    label="Full Name"
                    type="text"
                    name="full-name"
                    placeholder="Jonas El Rodriguez"
                  />
                </div>
                <div className="form-group">
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="jonasrodri123@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone-number">Phone Number</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text payment-page">+62</div>
                    </div>
                    <Input
                      type="number"
                      name="phone-number"
                      className="phone-number"
                      placeholder="81445687121"
                    />
                  </div>
                </div>
              </form>
              <div className="custom-alert d-flex align-items-center">
                <img src={Alert} alt="AlertWarning" className="alert-img" />
                <span className="ml-4">Fill your data correctly.</span>
              </div>
            </Card>
          </Col>
        </Row>
        <Row className="pt-5 ml-auto">
          <Col className="col-lg-12 pl-0 col-xl-8 d-flex justify-content-between">
            <Button className="btn btn-previous d-none d-md-block">
              Previous step
            </Button>
            <Button className="btn btn-order mx-auto mx-md-0">
              Pay your order
            </Button>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
