import React from "react";

import Section from "../../components/Section";
import Logo from "../../assets/img/tickitz-sign-in.png";

export default function Hero() {
  return (
    <Section className="sign-in">
      <img src={Logo} alt="Tickitz" className="logo-sign-in" />
      <h1>wait, watch, wow!</h1>
    </Section>
  );
}
