import React from "react";
import { Helmet } from "react-helmet";

import "../assets/css/sign-in.css";

import Hero from "../parts/Signin/Hero";
import Sidebar from "../parts/Signin/Sidebar";

export default function Signin() {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tickitz Film - Sign In</title>
      </Helmet>
      <Hero></Hero>
      <Sidebar></Sidebar>
    </main>
  );
}
