import { React, Fragment } from "react";
import "../assets/css/payment-page.css";
import { useHistory } from "react-router-dom";

import Nav from "../components/Nav";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import PaymentDetail from "../parts/PaymentPage";
import Footer from "../components/Footer";

export default function PaymentPage() {
  const history = useHistory();

  if (localStorage.getItem("IsLogin") !== "true") {
    history.goBack();
  }

  return (
    <Fragment>
      <Navbar isPayment></Navbar>
      <Nav className="navbar pt-4 fixed-top pl-1 total-payment d-flex d-md-none justify-content-between">
        <Container>
          <h2>Total Payment</h2>
          <p>$30.00</p>
        </Container>
      </Nav>
      <PaymentDetail></PaymentDetail>
      <Footer className="pt-5"></Footer>
    </Fragment>
  );
}
