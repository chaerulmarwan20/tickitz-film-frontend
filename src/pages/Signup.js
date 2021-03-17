import React from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/sign-up.css";

import Hero from "../parts/Signup/Hero";
import Sidebar from "../parts/Signup/Sidebar";

export default function Signup() {
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
