import { React, Fragment } from "react";
import { Helmet } from "react-helmet";

import "../assets/css/order-page.css";

import Navbar from "../components/Navbar";
import Movie from "../parts/OrderPage";
import Footer from "../components/Footer";

export default function OrderPage() {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tickitz Film - Order</title>
      </Helmet>
      <Navbar></Navbar>
      <Movie></Movie>
      <Footer className="pt-5 mt-5 mt-md-4"></Footer>
    </Fragment>
  );
}
