import { React, Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet";

import { getUser } from "../configs/redux/actions/user";

import "../assets/css/admin-page.css";

import Navbar from "../components/Navbar";
import Main from "../parts/AdminPage";
import Footer from "../components/Footer";

export default function AdminPage() {
  const history = useHistory();

  const dispatch = useDispatch();

  const { role } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
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
          <title>Tickitz Film - Admin</title>
        </Helmet>
        <Navbar></Navbar>
        <Main></Main>
        <Footer className="pt-5 mt-5 mt-md-4"></Footer>
      </Fragment>
    )
  );
}
