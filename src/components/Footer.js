import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

import Logo from "../assets/img/Tickitz 2.png";
import Ebv from "../assets/img/ebv.id.png";
import CineOne from "../assets/img/CineOne21 2.png";
import Hiflix from "../assets/img/hiflix.png";
import Facebook from "../assets/img/ic-facebook.png";
import Instagram from "../assets/img/ic-instagram.png";
import Twitter from "../assets/img/ic-twitter.png";
import Youtube from "../assets/img/ic-youtube.png";

export default function Footer(props) {
  const menuFooter = ["Cinemas", "Movies List", "My Ticket", "Notification"];
  const sponsor = [Ebv, CineOne, Hiflix];
  const social = [
    {
      src: Facebook,
      class: "facebook",
      span: "Tickitz Cinema id",
    },
    {
      src: Instagram,
      class: "instagram",
      span: "tickitz.id",
    },
    {
      src: Twitter,
      class: "twitter",
      span: "tickitz.id",
    },
    {
      src: Youtube,
      class: "youtube",
      span: "Tickitz Cinema id",
    },
  ];

  return (
    <footer className={props.className}>
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
              {menuFooter.map((data, index) => {
                return (
                  <Link
                    key={index}
                    className={`nav-link ${index === 0 ? "mt-md-0" : ""}`}
                    to="#"
                  >
                    {data}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-4 mb-md-0 pl-0">
            <p className="our-sponsor nav-link">Our Sponsor</p>
            <nav className="nav sponsor flex-row flex-md-column align-items-center align-items-md-start mt-1 mt-md-0">
              {sponsor.map((data, index) => {
                return (
                  <Link key={index} className="nav-link" to="#">
                    <img src={data} alt="Sponsor" />
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12 mb-4 mb-md-0 pl-0">
            <p className="follow-us nav-link">Follow Us</p>
            <nav className="nav follow-us flex-row flex-md-column mt-1 mt-md-0">
              {social.map((data, index) => {
                return (
                  <Link
                    key={index}
                    className="nav-link d-flex align-items-center"
                    to="#"
                  >
                    <img src={data.src} className={data.class} alt="Social" />
                    <span>{data.span}</span>
                  </Link>
                );
              })}
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

Footer.propTypes = {
  className: propTypes.string,
};
