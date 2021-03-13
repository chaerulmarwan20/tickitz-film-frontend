import { React, Fragment } from "react";
import "../assets/css/style.css";

import Navbar from "../parts/Homepage/Navbar";
import Header from "../parts/Homepage/Header";
import ShowingMovie from "../parts/Homepage/ShowingMovie";
import UpcomingMovies from "../parts/Homepage/UpcomingMovies";
import JoinMember from "../parts/Homepage/JoinMember";
import Footer from "../parts/Homepage/Footer";

export default function Homepage() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Header></Header>
      <ShowingMovie></ShowingMovie>
      <UpcomingMovies></UpcomingMovies>
      <JoinMember></JoinMember>
      <Footer></Footer>
    </Fragment>
  );
}
