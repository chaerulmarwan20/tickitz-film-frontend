import { React, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import Aside from "../../components/Aside";
import Input from "../../components/Input";
import Button from "../../components/Button";

import Logo from "../../assets/img/Tickitz-mobile-sign-in.png";

export default function Sidebar() {
  const Url = process.env.REACT_APP_API_URL;
  const [data, setData] = useState({
    firstName: "firstName",
    lastName: "lastName",
    phoneNumber: "000000000000",
    username: "username",
    email: "",
    password: "",
    role: 2,
  });

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postData();
  };

  const postData = () => {
    axios
      .post(`${Url}/users/`, data)
      .then((res) => {
        setData({
          email: "",
          password: "",
        });
        Swal.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      });
  };

  return (
    <Aside className="sign-up">
      <img src={Logo} alt="Tickitz" />
      <h1 className="my-5 d-none d-lg-block">Fill your additional details</h1>
      <h1 className="d-lg-none mt-2">Sign Up</h1>
      <form>
        <Input
          label="Email"
          type="email"
          name="email"
          value={data.email}
          placeholder="Write your email"
          onChange={handleFormChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={data.password}
          placeholder="Write your password"
          onChange={handleFormChange}
        />
        <div className="d-flex checkbox mt-0">
          <Input
            type="checkbox"
            name="agree"
            label="I agree to terms & conditions"
          />
          <br />
        </div>
        <Button
          type="submit"
          className="btn-join mt-0 mt-lg-4"
          onClick={handleSubmit}
        >
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
