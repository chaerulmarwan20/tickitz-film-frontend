import { React, Fragment } from "react";
import "../assets/css/style.css";

import Navbar from "../components/Navbar";
import Hero from "../parts/Homepage/Hero";
import ShowingMovie from "../parts/Homepage/ShowingMovie";
import UpcomingMovies from "../parts/Homepage/UpcomingMovies";
import JoinMember from "../parts/Homepage/JoinMember";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <Fragment>
      <Navbar isHomepage></Navbar>
      <Hero></Hero>
      <ShowingMovie></ShowingMovie>
      <UpcomingMovies></UpcomingMovies>
      <JoinMember></JoinMember>
      <Footer className="homepage pt-5"></Footer>
    </Fragment>
  );
}
