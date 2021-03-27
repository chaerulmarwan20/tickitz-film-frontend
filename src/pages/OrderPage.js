import { React, Fragment } from "react";
import { useHistory } from "react-router-dom";

import "../assets/css/order-page.css";

import Navbar from "../components/Navbar";
import Movie from "../parts/OrderPage";
import Footer from "../components/Footer";

export default function OrderPage() {
  const history = useHistory();

  if (localStorage.getItem("IsLogin") !== "true") {
    history.goBack();
  }

  return (
    <Fragment>
      <Navbar></Navbar>
      <Movie></Movie>
      <Footer className="pt-5 mt-5 mt-md-4"></Footer>
    </Fragment>
  );
}
