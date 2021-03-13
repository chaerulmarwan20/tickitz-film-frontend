import React from "react";
import { Link } from "react-router-dom";

import Aside from "../../components/Aside";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";

import Logo from "../../assets/img/Tickitz-mobile-sign-in.png";

export default function Sidebar() {
  return (
    <Aside className="sign-up">
      <img src={Logo} alt="Tickitz" />
      <h1 className="my-5 d-none d-lg-block">Fill your additional details</h1>
      <h1 className="d-lg-none mt-2">Sign Up</h1>
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
        <div className="d-flex checkbox mt-0">
          <input type="checkbox" className="ml-1" name="agree" id="agree" />
          <label htmlFor="agree" className="ml-3">
            I agree to terms & conditions
          </label>
          <br />
        </div>
        <Button type="submit" className="btn-join mt-0 mt-lg-4">
          Join for free now
        </Button>
      </form>
      <p className="forgot-password">
        Do you already have an account? <Link to="/">Log in</Link>
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
