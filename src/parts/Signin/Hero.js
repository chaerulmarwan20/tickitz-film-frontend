import { React, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import Section from "../../components/Section";
import Logo from "../../assets/img/tickitz-sign-in.png";

export default function Hero() {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <Section className="sign-in">
      <img src={Logo} alt="Tickitz" className="logo-sign-in" />
      <h1>wait, watch, wow!</h1>
    </Section>
  );
}
