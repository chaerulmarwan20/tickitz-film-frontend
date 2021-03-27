import React from "react";
import { useHistory } from "react-router-dom";
import "../assets/css/sign-up.css";

import Main from "../parts/Signup";

export default function Signup() {
  const history = useHistory();

  if (localStorage.getItem("IsLogin") === "true") {
    history.goBack();
  }

  return (
    <main>
      <Main></Main>
    </main>
  );
}
