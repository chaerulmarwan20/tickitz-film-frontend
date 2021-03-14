import React from "react";

import Aside from "../../components/Aside";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Logo from "../../assets/img/Tickitz-mobile-sign-in.png";

export default function Sidebar() {
  return (
    <Aside className="forgot-password">
      <img src={Logo} alt="Tickitz" />
      <h1 className="d-none d-lg-block">Fill your complete email</h1>
      <h1 className="d-lg-none">Forgot password</h1>
      <p>we'll send a link to your email shortly</p>
      <form>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Write your email"
        />
        <Button type="submit" className="btn-activate">
          Activate now
        </Button>
      </form>
    </Aside>
  );
}
