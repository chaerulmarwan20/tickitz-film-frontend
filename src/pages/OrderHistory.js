import { React, Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import "../assets/css/order-history.css";

import Nav from "../components/Nav";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Order from "../parts/OrderHistory";
import Footer from "../components/Footer";

export default function OrderHistory() {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tickitz Film - Order History</title>
      </Helmet>
      <Navbar isProfile></Navbar>
      <Nav className="navbar pt-4 fixed-top pb-3 details-order d-block d-lg-none">
        <Container className="justify-content-around nav-details">
          <Link to="/profile-page">Details Account</Link>
          <Link to="/order-history?sortBy=date&order=asc" className="active">
            Order History
          </Link>
        </Container>
      </Nav>
      <Order></Order>
      <Footer className="pt-5 mt-5 mt-md-4"></Footer>
    </Fragment>
  );
}
