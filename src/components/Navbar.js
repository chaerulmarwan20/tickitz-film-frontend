import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

import InputForm from "./InputForm";
import Button from "./Button";

import Logo from "../assets/img/Tickitz 1.png";
import Icon from "../assets/img/ic_dropdown.png";
import Search from "../assets/img/ic-search.png";
import User from "../assets/img/Ellipse 11.png";

export default function Navbar(props) {
  const menu = ["Movies", "Cinemas", "Buy Ticket"];
  const location = ["Jakarta", "Bandung", "Surabaya"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/homepage">
          <img src={Logo} alt="Tickitz" />
        </Link>
        <Button
          className="navbar-toggler"
          type="button"
          toggle="collapse"
          target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex mr-auto">
            <form
              className={`d-block d-lg-none form-inline mb-4 mt-3 form-search ${
                props.isPayment ? "payment" : ""
              } ${props.isProfile ? "profile" : ""}`}
            >
              <InputForm
                className="form-control"
                type="text"
                placeholder="Search..."
              />
            </form>
            {menu.map((data, index) => {
              return (
                <li key={index} className="nav-item">
                  <Link className="nav-link my-2 my-lg-0" to="#">
                    {data}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item dropdown d-block d-lg-none">
              <Link
                className="nav-link mt-4 mb-2 my-lg-0"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                Location <img src={Icon} width="18px" alt="Icon" />
              </Link>
              <div
                className="dropdown-menu mb-3"
                aria-labelledby="navbarDropdown"
              >
                {location.map((data, index) => {
                  return (
                    <Link key={index} className="dropdown-item" to="#">
                      {data}
                    </Link>
                  );
                })}
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
            >
              Location <img src={Icon} width="18px" alt="Icon" />
            </Link>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {location.map((data, index) => {
                return (
                  <Link key={index} className="dropdown-item" to="#">
                    {data}
                  </Link>
                );
              })}
            </div>
          </div>
          <img
            src={Search}
            className="ic-search d-none d-lg-block mx-5"
            alt="Search"
          />
          {props.isHomepage ? (
            <Link className="btn btn-sign-up d-none d-lg-block" to="#">
              Sign Up
            </Link>
          ) : (
            <img
              src={User}
              className="rounded-circle d-none d-lg-block img-user"
              alt="User"
            />
          )}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  isHomepage: propTypes.bool,
  isPayment: propTypes.bool,
  isProfile: propTypes.bool,
};
