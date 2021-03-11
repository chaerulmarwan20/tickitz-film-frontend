import React from "react";

import Section from "../../components/Section";
import Logo from "../../assets/img/tickitz-sign-in.png";

export default function Hero() {
  const stepResetPassword = [
    {
      number: 1,
      class: "one",
      text: "Fill your complete email",
    },
    {
      number: 2,
      class: "two",
      text: "Activate your email",
    },
    {
      number: 3,
      class: "three",
      text: "Enter your new password",
    },
    {
      number: 4,
      class: "four",
      text: "Done",
    },
  ];

  return (
    <Section className="forgot-password">
      <img src={Logo} alt="Tickitz" />
      <h1 className="mb-3">Lets reset your password</h1>
      <p className="mb-5">
        To be able to use your account again, please
        <br />
        complete the following steps.
      </p>
      {stepResetPassword.map((data, index) => {
        return (
          <div key={index} className="row">
            <div className="col d-flex">
              <span className={data.class}>{data.number}</span>
              <p className={`ml-5 mt-2 ${data.number === 1 ? "main" : ""}`}>
                {data.text}
              </p>
            </div>
          </div>
        );
      })}
    </Section>
  );
}
