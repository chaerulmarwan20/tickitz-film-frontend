import { React, Fragment } from "react";
import "../assets/css/payment-page.css";

import Navbar from "../components/Navbar";
import PaymentDetail from "../parts/PaymentPage/PaymentDetail";
import Footer from "../components/Footer";

export default function PaymentPage() {
  return (
    <Fragment>
      <Navbar isPayment></Navbar>
      <nav class="navbar pt-4 fixed-top pl-1 total-payment d-flex d-md-none justify-content-between">
        <div class="container">
          <h2>Total Payment</h2>
          <p>$30.00</p>
        </div>
      </nav>
      <PaymentDetail></PaymentDetail>
      <Footer className="pt-5"></Footer>
    </Fragment>
  );
}
