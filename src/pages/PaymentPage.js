import { React, Fragment } from "react";
import { Helmet } from "react-helmet";
import Rupiah from "../helpers/rupiah";

import "../assets/css/payment-page.css";

import Nav from "../components/Nav";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import PaymentDetail from "../parts/PaymentPage";
import Footer from "../components/Footer";

export default function PaymentPage(props) {
  const total = props.location.state.total;

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tickitz Film - Payment</title>
      </Helmet>
      <Navbar isPayment></Navbar>
      <Nav className="navbar pt-4 fixed-top pl-1 total-payment d-flex d-md-none justify-content-between">
        <Container>
          <h2>Total Payment</h2>
          <p>{Rupiah(total)}</p>
        </Container>
      </Nav>
      <PaymentDetail></PaymentDetail>
      <Footer className="pt-5"></Footer>
    </Fragment>
  );
}
