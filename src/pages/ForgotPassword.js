import React from "react";
import { Helmet } from "react-helmet";

import "../assets/css/forgot-password.css";

import Main from "../parts/ForgotPassword";

export default function ForgotPassword() {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tickitz Film - Forgot Password</title>
      </Helmet>
      <Main></Main>
    </main>
  );
}
