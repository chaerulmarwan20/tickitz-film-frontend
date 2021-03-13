import React from "react";
import { Link } from "react-router-dom";

import Nav from "../../components/Nav";

import Logo from "../../assets/img/Tickitz 1.png";
import Icon from "../../assets/img/ic_dropdown.png";
import Search from "../../assets/img/ic-search.png";
import User from "../../assets/img/Ellipse 11.png";

export default function Navbar() {
  return (
    <Nav className="navbar payment navbar-expand-lg navbar-light bg-white fixed-top pt-3">
      <div className="container">
        <Link className="navbar-brand" to="/homepage">
          <img src={Logo} alt="Tickitz" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex mr-auto">
            <form className="d-block d-lg-none form-inline mb-4 mt-5 form-search payment">
              <input
                className="form-control"
                type="text"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>
            <li className="nav-item">
              <Link className="nav-link my-2 my-lg-0" to="#">
                Movies <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link my-2 my-lg-0" to="#">
                Cinemas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link my-2 my-lg-0" to="#">
                Buy Ticket
              </Link>
            </li>
            <li className="nav-item dropdown d-block d-lg-none">
              <Link
                className="nav-link mt-4 mb-2 my-lg-0"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Location <img src={Icon} width="18px" alt="Icon" />
              </Link>
              <div
                className="dropdown-menu mb-3"
                aria-labelledby="navbarDropdown"
              >
                <Link className="dropdown-item" to="#">
                  Jakarta
                </Link>
                <Link className="dropdown-item" to="#">
                  Bandung
                </Link>
                <Link className="dropdown-item" to="#">
                  Surabaya
                </Link>
              </div>
            </li>
            <div className="row d-block d-lg-none mt-5 mb-2">
              <div className="col d-flex align-items-center justify-content-center">
                <p className="copyright-nav">
                  © 2021 Tickitz. All Rights Reserved.
                </p>
              </div>
            </div>
          </ul>
          <div className="dropdown d-none d-lg-block">
            <Link
              className="nav-link"
              to="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Location <img src={Icon} width="18px" alt="Icon" />
            </Link>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link className="dropdown-item" to="#">
                Jakarta
              </Link>
              <Link className="dropdown-item" to="#">
                Bandung
              </Link>
              <Link className="dropdown-item" to="#">
                Surabaya
              </Link>
            </div>
          </div>
          <img
            src={Search}
            className="ic-search d-none d-lg-block mx-5"
            alt="Search"
          />
          <img
            src={User}
            className="rounded-circle d-none d-lg-block img-user"
            alt="User"
          />
        </div>
      </div>
    </Nav>
  );
}
