import { React, Fragment } from "react";
import "../assets/css/profile-page.css";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Profile from "../parts/ProfilePage/Profile";
import Footer from "../components/Footer";

export default function ProfilePage() {
  return (
    <Fragment>
      <Navbar isProfile></Navbar>
      <nav className="navbar pt-4 fixed-top pb-3 details-order d-block d-lg-none">
        <div className="container justify-content-around nav-details">
          <Link to="#" className="active">
            Details Account
          </Link>
          <Link to="#">Order History</Link>
        </div>
      </nav>
      <Profile></Profile>
      <Footer className="pt-5 mt-5 mt-md-4"></Footer>
    </Fragment>
  );
}
