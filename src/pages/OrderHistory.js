import { React, Fragment } from "react";
import "../assets/css/order-history.css";
import { Link, useHistory } from "react-router-dom";

import Nav from "../components/Nav";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Order from "../parts/OrderHistory";
import Footer from "../components/Footer";

export default function OrderHistory() {
  const history = useHistory();

  if (localStorage.getItem("IsLogin") !== "true") {
    history.goBack();
  }

  return (
    <Fragment>
      <Navbar isProfile></Navbar>
      <Nav className="navbar pt-4 fixed-top pb-3 details-order d-block d-lg-none">
        <Container className="justify-content-around nav-details">
          <Link to="/profile-page">Details Account</Link>
          <Link to="/order-history" className="active">
            Order History
          </Link>
        </Container>
      </Nav>
      <Order></Order>
      <Footer className="pt-5 mt-5 mt-md-4"></Footer>
    </Fragment>
  );
}
