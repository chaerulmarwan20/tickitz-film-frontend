import { React, Fragment } from "react";
import "../assets/css/admin-page.css";

import Navbar from "../components/Navbar";
import Main from "../parts/AdminPage";
import Footer from "../components/Footer";

export default function AdminPage() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <Main></Main>
      <Footer className="pt-5 mt-5 mt-md-4"></Footer>
    </Fragment>
  );
}
