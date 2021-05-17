import { React, Fragment } from "react";
import { Helmet } from "react-helmet";

import "../assets/css/movie-detail.css";

import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Hero from "../parts/MovieDetail/Hero";
import Synopsis from "../parts/MovieDetail/Synopsis";
import Cinema from "../parts/MovieDetail/Cinema";
import Footer from "../components/Footer";

export default function MovieDetail() {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tickitz Film - Movie Detail</title>
      </Helmet>
      <Navbar></Navbar>
      <Hero></Hero>
      <Container>
        <hr className="d-block d-lg-none mb-5" />
      </Container>
      <Synopsis></Synopsis>
      <Cinema></Cinema>
      <Footer className="movie-detail pt-5"></Footer>
    </Fragment>
  );
}
