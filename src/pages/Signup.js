import React from "react";
import { Helmet } from "react-helmet";

import "../assets/css/sign-up.css";

import Main from "../parts/Signup";

export default function Signup() {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tickitz Film - Sign Up</title>
      </Helmet>
      <Main></Main>
    </main>
  );
}
