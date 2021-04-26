import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../configs/redux/actions/user";
import Swal from "sweetalert2";

import Aside from "../../components/Aside";
import Input from "../../components/Input";
import Button from "../../components/Button";

import Logo from "../../assets/img/Tickitz-mobile-sign-in.png";
import Eye from "../../assets/img/eye.png";

export default function Sidebar() {
  const history = useHistory();

  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [type, setType] = useState("password");

  const handleToggle = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(data))
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: res,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        }).then((result) => {
          if (result.isConfirmed) {
            history.push("/");
          } else {
            history.push("/");
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      });
  };

  const handleClickAuth = () => {
    Swal.fire({
      title: "Info!",
      text: "This feature is coming soon",
      icon: "info",
      confirmButtonText: "Ok",
      confirmButtonColor: "#5f2eea",
    });
  };

  return (
    <Aside className="sign-in">
      <img src={Logo} alt="Tickitz" />
      <h1>Sign In</h1>
      <p>
        Sign in with your data that you entered during <br /> your registration
      </p>
      <form>
        <Input
          label="Email"
          type="email"
          name="email"
          placeholder="Write your email"
          onChange={handleFormChange}
        />
        <div className="password-container">
          <Input
            label="Password"
            type={type}
            name="password"
            placeholder="Write your password"
            onChange={handleFormChange}
          />
          <img
            src={Eye}
            alt="Eye"
            width="20"
            className="img-eye"
            onClick={handleToggle}
          />
        </div>
        <Button type="submit" className="btn-sign-in" onClick={handleSubmit}>
          Sign In
        </Button>
      </form>
      <p className="forgot-password">
        Forgot your password? <Link to="/forgot-password">Reset now</Link>
      </p>
      <p className="or">Or</p>
      <div className="btn-group">
        <Button
          type="button"
          className="btn-google"
          onClick={() => handleClickAuth()}
        >
          <span>Google</span>
        </Button>
        <Button
          type="button"
          className="btn-facebook"
          onClick={() => handleClickAuth()}
        >
          <span>Facebook</span>
        </Button>
      </div>
    </Aside>
  );
}
