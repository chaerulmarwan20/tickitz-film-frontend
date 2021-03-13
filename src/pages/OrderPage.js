import { React, Fragment } from "react";
import "../assets/css/order-page.css";

import Navbar from "../parts/OrderPage/Navbar";
import Movie from "../parts/OrderPage/Movie";
import Footer from "../parts/OrderPage/Footer";

export default function OrderPage() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Movie></Movie>
      <Footer></Footer>
    </Fragment>
  );
}
