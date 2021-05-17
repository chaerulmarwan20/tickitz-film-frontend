import { React, Fragment } from "react";
import { Helmet } from "react-helmet";

import "../assets/css/cinemas.css";

import Navbar from "../components/Navbar";
import Main from "../parts/Cinemas";
import Footer from "../components/Footer";

export default function Cinemas() {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tickitz Film - Cinemas</title>
      </Helmet>
      <Navbar isHomepage></Navbar>
      <Main></Main>
      <Footer className="homepage pt-5"></Footer>
    </Fragment>
  );
}
