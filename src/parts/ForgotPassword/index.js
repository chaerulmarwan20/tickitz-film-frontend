import { React, Fragment, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { confirm, activate, reset } from "../../configs/redux/actions/user";

import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Aside from "../../components/Aside";
import Input from "../../components/Input";
import Button from "../../components/Button";

import Logo1 from "../../assets/img/tickitz-sign-in.png";
import Logo2 from "../../assets/img/Tickitz-mobile-sign-in.png";
import Eye from "../../assets/img/eye.png";

export default function Index() {
  const useQuery = () => new URLSearchParams(useLocation().search);

  const query = useQuery();
  let email = query.get("email");
  let token = query.get("token");

  const history = useHistory();

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.user);

  const [type, setType] = useState("password");
  const [step, setStep] = useState("fill");

  let validate;

  if (step === "fill" || step === "activate") {
    validate = {
      email: Yup.string().email("Invalid email format").required("Required!"),
    };
  } else if (step === "reset" || step === "done") {
    validate = {
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
    };
  }

  const action = (params) => {
    if (step === "fill") {
      dispatch(confirm(params))
        .then((res) => {
          localStorage.setItem("email", params.email);
          formik.resetForm();
          setStep("activate");
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
    } else if (step === "activate") {
      if (params.email !== localStorage.getItem("email")) {
        Swal.fire({
          title: "Error!",
          text: "Email do not match!",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      } else {
        dispatch(activate(params))
          .then((res) => {
            localStorage.removeItem("email");
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
      }
    } else if (step === "reset") {
      if (email !== null && token !== null) {
        dispatch(reset(email, token, params))
          .then((res) => {
            formik.resetForm();
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
      } else {
        Swal.fire({
          title: "Error!",
          text: "Something wrong",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object(validate),
    onSubmit: (values) => {
      action(values);
    },
  });

  const handleToggle = () => {
    if (type === "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  const handleClickLogo = () => {
    history.push("/");
  };

  useEffect(() => {
    if (email !== null && token !== null) {
      setStep("reset");
    }
  }, [dispatch, email, token]);

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <Fragment>
      <Section className="forgot-password">
        <img src={Logo1} alt="Tickitz" />
        <h1 className="mb-3">Lets reset your password</h1>
        <p className="mb-5">
          To be able to use your account again, please
          <br />
          complete the following steps.
        </p>
        <Row>
          <Col className="d-flex">
            <span className={`one ${step === "fill" ? "main" : ""}`}>1</span>
            <p className="ml-5 mt-2">Fill your complete email</p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <span className={`two ${step === "activate" ? "main" : ""}`}>
              2
            </span>
            <p className="ml-5 mt-2">Send link</p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <span className={`three ${step === "reset" ? "main" : ""}`}>3</span>
            <p className="ml-5 mt-2">Enter your new password</p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex">
            <span className={`four ${step === "done" ? "main" : ""}`}>4</span>
            <p className="ml-5 mt-2">Done</p>
          </Col>
        </Row>
      </Section>
      <Aside className="forgot-password">
        <img
          src={Logo2}
          alt="Tickitz"
          style={{ cursor: "pointer" }}
          onClick={() => handleClickLogo()}
          className="logo"
        />
        <h1 className="d-none d-lg-block">
          {step === "fill"
            ? "Fill your complete email"
            : step === "activate"
            ? "Send link"
            : step === "reset"
            ? "Enter your new password"
            : "Done"}
        </h1>
        <h1 className="d-lg-none">Forgot password</h1>
        <p>
          {step === "fill"
            ? "confirm your email"
            : step === "activate"
            ? "we'll send a link to your email shortly"
            : step === "reset"
            ? "reset password is almost complete"
            : "reset password has been completed"}
        </p>
        <form onSubmit={formik.handleSubmit}>
          {(step === "fill" || step === "activate") && (
            <>
              <Input
                label="Email"
                type="text"
                name="email"
                placeholder={`${
                  step === "fill"
                    ? "Write your email"
                    : step === "activate"
                    ? "Write your email again"
                    : ""
                }`}
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
            </>
          )}
          {(step === "reset" || step === "done") && (
            <>
              <div
                className={`password-container ${
                  formik.errors.email && formik.touched.email && "mt-3"
                }`}
              >
                <Input
                  label="New Password"
                  type={type}
                  name="password"
                  placeholder="Write new password"
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
            </>
          )}
          <br />
          {step === "fill" ? (
            <Button
              type="submit"
              className={`btn-activate ${
                formik.errors.email && formik.touched.email && "mt-5"
              }`}
            >
              {!loading ? "Confirm now" : "Please wait..."}
            </Button>
          ) : step === "activate" ? (
            <Button
              type="submit"
              className={`btn-activate ${
                formik.errors.email && formik.touched.email && "mt-5"
              }`}
            >
              {!loading ? "Send link now" : "Please wait..."}
            </Button>
          ) : step === "reset" ? (
            <Button
              type="submit"
              className={`btn-activate ${
                formik.errors.password && formik.touched.password && "mt-5"
              }`}
            >
              {!loading ? "Reset now" : "Please wait..."}
            </Button>
          ) : (
            <Button
              type="submit"
              className="btn-activate"
              onClick={() => history.push("/sign-in")}
            >
              Log in
            </Button>
          )}
        </form>
      </Aside>
    </Fragment>
  );
}
