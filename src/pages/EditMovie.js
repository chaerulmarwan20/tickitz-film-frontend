import { React, Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

import { getUser } from "../configs/redux/actions/user";

import "../assets/css/edit-movie.css";

import Navbar from "../components/Navbar";
import Main from "../parts/EditMovie";
import Footer from "../components/Footer";

export default function EditMovie() {
  const history = useHistory();

  const dispatch = useDispatch();

  const { role } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser())
      .then((res) => {})
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      });
  }, [dispatch]);

  if (role !== null) {
    if (role !== 1) {
      history.goBack();
    }
  }

  return (
    role === 1 && (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Tickitz Film - Edit Movie</title>
        </Helmet>
        <Navbar></Navbar>
        <Main></Main>
        <Footer className="pt-5 mt-5 mt-md-4"></Footer>
      </Fragment>
    )
  );
}
