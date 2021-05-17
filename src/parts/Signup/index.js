import { React, Fragment, useState, useEffect } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signUp, verify } from "../../configs/redux/actions/user";

import Aside from "../../components/Aside";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";

import Logo1 from "../../assets/img/tickitz-sign-in.png";
import Logo2 from "../../assets/img/Tickitz-mobile-sign-in.png";
import Eye from "../../assets/img/eye.png";

export default function Index() {
  const history = useHistory();

  const useQuery = () => new URLSearchParams(useLocation().search);

  const query = useQuery();
  let email = query.get("email");
  let token = query.get("token");

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.user);

  const [checked, setChecked] = useState(false);
  const [step, setStep] = useState("fill");
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
      dispatch(signUp(values))
        .then((res) => {
          formik.resetForm();
          Swal.fire({
            title: "Success!",
            text: res,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#5f2eea",
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

  const handleChecked = () => {
    if (checked === true) {
      setChecked(false);
    } else {
      setChecked(true);
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

  useEffect(() => {
    if (email !== null && token !== null) {
      dispatch(verify(email, token))
        .then((res) => {
          setChecked(false);
          setStep("done");
          Swal.fire({
            title: "Success!",
            text: res,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#5f2eea",
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
    }
  }, [dispatch, email, token]);

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <Fragment>
      <Section className="sign-up">
        <img src={Logo1} alt="Tickitz" className="logo-sign-up" />
        <h1 className="mb-3 mt-3">Lets build your account</h1>
        <p className="mb-5">
          To be a loyal moviegoer and access all of features,
          <br />
          your details are required.
        </p>
        <Row>
          <Col className="d-flex">
            <span className={`one ${step === "fill" ? "main" : ""}`}>1</span>
            <p className={`ml-5 mt-2`}>Fill your additional details</p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <span className={`two ${step === "activate" ? "main" : ""}`}>
              2
            </span>
            <p className={`ml-5 mt-2`}>Activate your account</p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <span className={`three ${step === "done" ? "main" : ""}`}>3</span>
            <p className={`ml-5 mt-2`}>Done</p>
          </Col>
        </Row>
      </Section>
      <Aside className="sign-up">
        <img
          src={Logo2}
          alt="Tickitz"
          className="tickitz"
          style={{ cursor: "pointer" }}
          onClick={() => handleClickLogo()}
        />
        <h1 className="my-5 d-none d-lg-block">
          {step === "fill"
            ? "Fill your additional details"
            : step === "activate"
            ? "Activate your account"
            : "Done"}
        </h1>
        <h1 className="d-lg-none mt-2">
          {step === "fill"
            ? "Sign Up"
            : step === "activate"
            ? "Activate"
            : "Done"}
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <Input
            label="Email"
            type="text"
            name="email"
            placeholder="Write your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className={`${
              formik.errors.email && formik.touched.email
                ? "error mb-0"
                : "mb-5"
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
          <div className="d-flex checkbox mt-4 mb-3 mb-lg-0">
            <Input
              type="checkbox"
              name="agree"
              label="I agree to terms & conditions"
              onChange={handleChecked}
              checked={checked}
            />
            <br />
          </div>
          <Button
            type="submit"
            className={`btn-join mt-0 mt-lg-4 ${
              checked === true ? "pointer" : "no-drop"
            }`}
            disabled={checked === true ? false : true}
          >
            {!loading ? "Join for free now" : "Please wait..."}
          </Button>
        </form>
        <p className="login">
          Do you already have an account? <Link to="/sign-in">Log in</Link>
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
    </Fragment>
  );
}
