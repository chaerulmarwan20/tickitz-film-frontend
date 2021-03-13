import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/Tickitz 2.png";
import Ebv from "../../assets/img/ebv.id.png";
import CineOne from "../../assets/img/CineOne21 2.png";
import Hiflix from "../../assets/img/hiflix.png";
import Facebook from "../../assets/img/ic-facebook.png";
import Instagram from "../../assets/img/ic-instagram.png";
import Twitter from "../../assets/img/ic-twitter.png";
import Youtube from "../../assets/img/ic-youtube.png";

export default function Footer() {
  return (
    <footer className="pt-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-md-0">
            <img src={Logo} className="logo" alt="Tickitz" />
            <p>
              Stop waiting in line. Buy tickets
              <br />
              conveniently, watch movies quietly.
            </p>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 mb-4 mb-md-0 pl-0">
            <p className="explore nav-link">Explore</p>
            <nav className="nav explore flex-row flex-md-column mt-1 mt-md-0">
              <Link className="nav-link mt-md-0 " to="#">
                Cinemas
              </Link>
              <Link className="nav-link" to="#">
                Movies List
              </Link>
              <Link className="nav-link" to="#">
                My Ticket
              </Link>
              <Link className="nav-link" to="#">
                Notification
              </Link>
            </nav>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-md-0 pl-0">
            <p className="our-sponsor nav-link">Our Sponsor</p>
            <nav className="nav sponsor flex-row flex-md-column align-items-center align-items-md-start mt-1 mt-md-0">
              <Link className="nav-link" to="#">
                <img src={Ebv} alt="Ebv" />
              </Link>
              <Link className="nav-link" to="#">
                <img src={CineOne} alt="CineOne" />
              </Link>
              <Link className="nav-link" to="#">
                <img src={Hiflix} alt="Hiflix" />
              </Link>
            </nav>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 mb-4 mb-md-0 pl-0">
            <p className="follow-us nav-link">Follow Us</p>
            <nav className="nav follow-us flex-row flex-md-column mt-1 mt-md-0">
              <Link className="nav-link d-flex align-items-center" to="#">
                <img src={Facebook} className="facebook" alt="Social" />
                <span>Tickitz Cinema id</span>
              </Link>
              <Link className="nav-link d-flex align-items-center" to="#">
                <img src={Instagram} className="instagram" alt="Social" />
                <span>tickitz.id</span>
              </Link>
              <Link className="nav-link d-flex align-items-center" to="#">
                <img src={Twitter} className="twitter" alt="Social" />
                <span>tickitz.id</span>
              </Link>
              <Link className="nav-link d-flex align-items-center" to="#">
                <img src={Youtube} className="youtube" alt="Social" />
                <span>Tickitz Cinema id</span>
              </Link>
            </nav>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col d-flex align-items-center justify-content-start justify-content-md-center">
            <p className="copyright">© 2021 Tickitz. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
