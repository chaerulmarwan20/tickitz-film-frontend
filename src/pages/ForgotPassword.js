import React from "react";
import { useHistory } from "react-router-dom";

import "../assets/css/forgot-password.css";

import Hero from "../parts/ForgotPassword/Hero";
import Sidebar from "../parts/ForgotPassword/Sidebar";

export default function ForgotPassword() {
  const history = useHistory();

  if (localStorage.getItem("IsLogin") === "true") {
    history.goBack();
  }

  return (
    <main>
      <Hero></Hero>
      <Sidebar></Sidebar>
    </main>
  );
}
