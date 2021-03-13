import { React, Fragment } from "react";
import "../assets/css/movie-detail.css";

import Navbar from "../parts/MovieDetail/Navbar";
import Header from "../parts/MovieDetail/Header";
import Synopsis from "../parts/MovieDetail/Synopsis";
import Date from "../parts/MovieDetail/Date";
import Cinema from "../parts/MovieDetail/Cinema";
import Footer from "../parts/MovieDetail/Footer";

export default function MovieDetail() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Header></Header>
      <div className="container">
        <hr className="d-block d-lg-none mb-5" />
      </div>
      <Synopsis></Synopsis>
      <Date></Date>
      <Cinema></Cinema>
      <Footer></Footer>
    </Fragment>
  );
}
