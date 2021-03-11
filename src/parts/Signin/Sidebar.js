import React from "react";
import { Link } from "react-router-dom";

import Aside from "../../components/Aside";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";

import Logo from "../../assets/img/Tickitz-mobile-sign-in.png";

export default function Sidebar() {
  return (
    <Aside className="sign-in">
      <img src={Logo} alt="Tickitz" />
      <h1>Sign In</h1>
      <p>
        Sign in with your data that you entered during <br /> your registration
      </p>
      <form>
        <InputForm
          for="email"
          textLabel="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Write your email"
        />
        <InputForm
          for="password"
          textLabel="Password"
          type="password"
          id="password"
          name="password"
          placeholder="Write your password"
        />
        <Button type="submit" className="btn-sign-in">
          Sign In
        </Button>
      </form>
      <p class="forgot-password">
        Forgot your password? <Link to="/forgot-password">Reset now</Link>
      </p>
      <p className="or">Or</p>
      <div className="btn-group">
        <Button type="button" className="btn-google">
          <span>Google</span>
        </Button>
        <Button type="button" className="btn-facebook">
          <span>Facebook</span>
        </Button>
      </div>
    </Aside>
  );
}
