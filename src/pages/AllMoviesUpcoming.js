import { React, Fragment } from "react";
import { Helmet } from "react-helmet";

import "../assets/css/all-movies.css";

import Navbar from "../components/Navbar";
import Main from "../parts/AllMoviesUpcoming";
import Footer from "../components/Footer";

export default function AllMoviesUpcoming() {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tickitz Film - Upcoming Movies</title>
      </Helmet>
      <Navbar isHomepage></Navbar>
      <Main></Main>
      <Footer className="homepage pt-5"></Footer>
    </Fragment>
  );
}
