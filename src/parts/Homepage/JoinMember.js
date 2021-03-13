import React from "react";

import Section from "../../components/Section";
import Button from "../../components/Button";
import InputForm from "../../components/InputForm";

export default function JoinMember() {
  return (
    <Section className="join-member">
      <div className="container">
        <div className="jumbotron py-5">
          <p>Be the vanguard of the</p>
          <h1>Moviegoers</h1>
          <form className="form-inline join-now">
            <InputForm type="text" placeholder="Type your email" />
            <Button className="btn btn-join-now" type="submit">
              Join now
            </Button>
          </form>
          <p className="text-join-now">
            By joining you as a Tickitz member,
            <br />
            we will always send you the <br /> latest updates via email .
          </p>
        </div>
      </div>
    </Section>
  );
}
