import { React, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import Aside from "../../components/Aside";
import Input from "../../components/Input";
import Button from "../../components/Button";

import Logo from "../../assets/img/Tickitz-mobile-sign-in.png";

export default function Sidebar() {
  const Url = process.env.REACT_APP_API_URL;
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    PostData();
  };

  const history = useHistory();
  const PostData = () => {
    axios
      .post(`${Url}/users/auth/login`, data)
      .then((res) => {
        localStorage.setItem("id", res.data.data.id);
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("image", res.data.data.image);
        localStorage.setItem("IsLogin", true);
        Swal.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        }).then((result) => {
          if (result.isConfirmed) {
            history.push("/");
          }
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
        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Write your password"
          onChange={handleFormChange}
        />
        <Button type="submit" className="btn-sign-in" onClick={handleSubmit}>
          Sign In
        </Button>
      </form>
      <p className="forgot-password">
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
