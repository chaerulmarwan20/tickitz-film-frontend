import { React, Fragment } from "react";
import "../assets/css/order-history.css";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Order from "../parts/OrderHistory/Order";
import Footer from "../components/Footer";

export default function OrderHistory() {
  return (
    <Fragment>
      <Navbar isProfile></Navbar>
      <nav className="navbar pt-4 fixed-top pb-3 details-order d-block d-lg-none">
        <div className="container justify-content-around nav-details">
          <Link to="#">Details Account</Link>
          <Link to="#" className="active">
            Order History
          </Link>
        </div>
      </nav>
      <Order></Order>
      <Footer className="pt-5 mt-5 mt-md-4"></Footer>
    </Fragment>
  );
}
