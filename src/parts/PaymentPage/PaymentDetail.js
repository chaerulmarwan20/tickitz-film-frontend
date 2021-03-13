import React from "react";
import { Link } from "react-router-dom";

import Section from "../../components/Section";
import Button from "../../components/Button";
import InputForm from "../../components/InputForm";
import Card from "../../components/Card";

import Google from "../../assets/img/logos_google-pay.png";
import Visa from "../../assets/img/logos_visa.png";
import GoPay from "../../assets/img/Logo GoPay (SVG-240p) - FileVector69 1.png";
import Paypal from "../../assets/img/logos_paypal.png";
import Dana from "../../assets/img/Logo DANA (PNG-240p) - FileVector69 1.png";
import BCA from "../../assets/img/Bank BCA Logo (SVG-240p) - FileVector69 1.png";
import BRI from "../../assets/img/Bank BRI (Bank Rakyat Indonesia) Logo (SVG-240p) - FileVector69 1.png";
import Ovo from "../../assets/img/ovo.png";
import Alert from "../../assets/img/warning.png";

export default function PaymentDetail() {
  return (
    <Section className="payment-detail">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xl-8">
            <h1 className="d-none d-md-block">Payment Info</h1>
            <Card className="d-none d-md-block payment-info p-5 mt-4">
              <div className="container">
                <div className="row justify-content-between align-items-center">
                  <h2>Date & time</h2>
                  <p>Tuesday, 07 July 2020 at 02:00pm</p>
                  <hr />
                </div>
                <div className="row justify-content-between align-items-center">
                  <h2>Movie title</h2>
                  <p>Spider-Man: Homecoming</p>
                  <hr />
                </div>
                <div className="row justify-content-between align-items-center">
                  <h2>Cinema name</h2>
                  <p>CineOne21 Cinema</p>
                  <hr />
                </div>
                <div className="row justify-content-between align-items-center">
                  <h2>Number of tickets</h2>
                  <p>3 pieces</p>
                  <hr />
                </div>
                <div className="row justify-content-between align-items-center">
                  <h2>Total payment</h2>
                  <p>$30,00</p>
                </div>
              </div>
            </Card>
            <h1 className="mt-5 choose-payment">
              <span className="d-none d-md-inline-block">Choose a</span> Payment
              Method
            </h1>
            <Card className="payment-method mt-4 pt-5 pb-4">
              <div className="row justify-content-center">
                <div className="d-flex">
                  <Link to="#" className="btn btn-payment">
                    <img src={Google} alt="Google" width="74" />
                  </Link>
                  <Link to="#" className="btn btn-payment">
                    <img src={Visa} alt="Visa" width="80" />
                  </Link>
                  <Link to="#" className="btn btn-payment">
                    <img src={GoPay} alt="GoPay" width="106" />
                  </Link>
                  <Link to="#" className="btn btn-payment d-none d-md-block">
                    <img src={Paypal} alt="Paypal" width="31" />
                  </Link>
                </div>
                <div className="d-flex">
                  <Link to="#" className="btn btn-payment d-md-none">
                    <img src={Paypal} alt="Paypal" width="31" />
                  </Link>
                  <Link to="#" className="btn btn-payment">
                    <img src={Dana} alt="Dana" width="108" />
                  </Link>
                  <Link to="#" className="btn btn-payment d-none d-md-block">
                    <img src={BCA} alt="BCA" width="85" />
                  </Link>
                  <Link to="#" className="btn btn-payment d-none d-md-block">
                    <img src={BRI} alt="BRI" width="45" />
                  </Link>
                  <Link to="#" className="btn btn-payment">
                    <img src={Ovo} alt="Ovo" width="92" />
                  </Link>
                </div>
              </div>
              <div className="d-flex ml-3 ml-md-0 justify-content-center mt-2 mt-md-3 mb-2 mb-md-4">
                <hr />
                <p className="or">or</p>
                <hr />
              </div>
              <div className="row ml-2 ml-md-0 justify-content-center">
                <p className="pay">
                  Pay via cash. <span>See how it work</span>
                </p>
              </div>
            </Card>
          </div>
          <div className="col-lg-12 col-xl-4 mt-5 mt-xl-0">
            <h1 className="personal-info-heading">Personal Info</h1>
            <div className="card personal-info p-4 mt-4">
              <form className="mt-4">
                <div className="form-group">
                  <InputForm
                    type="text"
                    name="full-name"
                    placeholder="Jonas El Rodriguez"
                    label="Full Name"
                  />
                </div>
                <div className="form-group">
                  <InputForm
                    type="email"
                    name="email"
                    placeholder="jonasrodri123@gmail.com"
                    label="Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone_number">Phone Number</label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text payment-page">+62</div>
                    </div>
                    <input
                      type="number"
                      name="phone_number"
                      id="phone_number"
                      className="form-control phone-number"
                      placeholder="81445687121"
                    />
                  </div>
                </div>
              </form>
              <div className="custom-alert d-flex align-items-center">
                <img src={Alert} alt="AlertWarning" className="alert-img" />
                <span className="ml-4">Fill your data correctly.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 ml-auto">
          <div className="col-lg-12 pl-0 col-xl-8 d-flex justify-content-between">
            <Button className="btn btn-previous d-none d-md-block">
              Previous step
            </Button>
            <Button className="btn btn-order mx-auto mx-md-0">
              Pay your order
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
