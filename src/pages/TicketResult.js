import { React, Fragment } from "react";
import { Helmet } from "react-helmet";

import "../assets/css/ticket-result.css";

import Navbar from "../components/Navbar";
import Ticket from "../parts/TicketResult";
import Detail from "../parts/TicketResult/Detail";
import Footer from "../components/Footer";

export default function TicketResult() {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tickitz Film - Ticket</title>
      </Helmet>
      <Navbar></Navbar>
      <Ticket></Ticket>
      <Detail></Detail>
      <Footer className="pt-5 mt-5 mt-md-4"></Footer>
    </Fragment>
  );
}
