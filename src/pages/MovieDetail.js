import { React, Fragment } from "react";

import "../assets/css/movie-detail.css";

import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Hero from "../parts/MovieDetail/Hero";
import Synopsis from "../parts/MovieDetail/Synopsis";
import Date from "../parts/MovieDetail/Date";
import Cinema from "../parts/MovieDetail/Cinema";
import Footer from "../components/Footer";

export default function MovieDetail(props) {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Hero></Hero>
      <Container>
        <hr className="d-block d-lg-none mb-5" />
      </Container>
      <Synopsis></Synopsis>
      <Date></Date>
      <Cinema></Cinema>
      <Footer className="movie-detail pt-5"></Footer>
    </Fragment>
  );
}
