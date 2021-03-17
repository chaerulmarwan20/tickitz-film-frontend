import React from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/sign-in.css";

import Hero from "../parts/Signin/Hero";
import Sidebar from "../parts/Signin/Sidebar";

export default function Signin() {
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
