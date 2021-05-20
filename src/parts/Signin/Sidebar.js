import { React, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../configs/redux/actions/user";

import Aside from "../../components/Aside";
import Input from "../../components/Input";
import Button from "../../components/Button";

import Logo from "../../assets/img/Tickitz-mobile-sign-in.png";
import Eye from "../../assets/img/eye.png";

export default function Sidebar() {
  const history = useHistory();

  const dispatch = useDispatch();

  const [type, setType] = useState("password");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(login(values))
        .then((res) => {
          formik.resetForm();
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
            text: err.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#5f2eea",
          });
        });
    },
  });

  const handleToggle = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
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

  const handleClickLogo = () => {
    history.push("/");
  };

  return (
    <Aside className="sign-in">
      <img
        src={Logo}
        alt="Tickitz"
        style={{ cursor: "pointer" }}
        onClick={() => handleClickLogo()}
      />
      <h1>Sign In</h1>
      <p>
        Sign in with your data that you entered during <br /> your registration
      </p>
      <form onSubmit={formik.handleSubmit}>
        <Input
          label="Email"
          type="text"
          name="email"
          placeholder="Write your email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className={`${
            formik.errors.email && formik.touched.email ? "error mb-0" : "mb-5"
          }`}
        />
        {formik.errors.email && formik.touched.email && (
          <small className="error">{formik.errors.email}</small>
        )}
        <div
          className={`password-container ${
            formik.errors.email && formik.touched.email && "mt-3"
          }`}
        >
          <Input
            label="Password"
            type={type}
            name="password"
            placeholder="Write your password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className={`${
              formik.errors.password && formik.touched.password
                ? "error mb-0"
                : "mb-5"
            }`}
          />
          <img
            src={Eye}
            alt="Eye"
            width="20"
            className="img-eye"
            onClick={handleToggle}
          />
        </div>
        {formik.errors.password && formik.touched.password && (
          <small className="error">{formik.errors.password}</small>
        )}
        <br />
        <Button
          type="submit"
          className={`btn-sign-in ${
            formik.errors.password && formik.touched.password && "mt-4"
          }`}
        >
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
