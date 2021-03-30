import { React, Fragment } from "react";
import { useHistory } from "react-router-dom";

import "../assets/css/admin-page.css";

import Navbar from "../components/Navbar";
import Main from "../parts/AdminPage";
import Footer from "../components/Footer";

export default function AdminPage() {
  const history = useHistory();

  const role = localStorage.getItem("role");

  if (parseInt(role) !== 1) {
    history.goBack();
  }

  return (
    <Fragment>
      <Navbar></Navbar>
      <Main></Main>
      <Footer className="pt-5 mt-5 mt-md-4"></Footer>
    </Fragment>
  );
}
