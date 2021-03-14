import React from "react";

import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Logo from "../../assets/img/tickitz-sign-in.png";

export default function Hero() {
  const stepSignUp = [
    {
      number: 1,
      class: "one",
      text: "Fill your additional details",
    },
    {
      number: 2,
      class: "two",
      text: "Activate your account",
    },
    {
      number: 3,
      class: "three",
      text: "Done",
    },
  ];

  return (
    <Section className="sign-up">
      <img src={Logo} alt="Tickitz" className="logo-sign-up" />
      <h1 className="mb-3 mt-3">Lets build your account</h1>
      <p className="mb-5">
        To be a loyal moviegoer and access all of features,
        <br />
        your details are required.
      </p>
      {stepSignUp.map((data, index) => {
        return (
          <Row key={index}>
            <Col className="d-flex">
              <span className={data.class}>{data.number}</span>
              <p className={`ml-5 mt-2 ${data.number === 1 ? "main" : ""}`}>
                {data.text}
              </p>
            </Col>
          </Row>
        );
      })}
    </Section>
  );
}
