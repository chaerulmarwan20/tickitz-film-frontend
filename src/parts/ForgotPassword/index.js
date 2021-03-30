import { React, Fragment, useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { confirm, activate, reset } from "../../configs/redux/actions/user";
import Swal from "sweetalert2";

import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Aside from "../../components/Aside";
import Input from "../../components/Input";
import Button from "../../components/Button";

import Logo1 from "../../assets/img/tickitz-sign-in.png";
import Logo2 from "../../assets/img/Tickitz-mobile-sign-in.png";

export default function Index() {
  const useQuery = () => new URLSearchParams(useLocation().search);

  const query = useQuery();
  let email = query.get("email");
  let token = query.get("token");

  const history = useHistory();

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.user);

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [step, setStep] = useState("fill");

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    dispatch(confirm(data))
      .then((res) => {
        setData({
          email: "",
          password: "",
        });
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
  };

  const handleActivate = (event) => {
    event.preventDefault();
    dispatch(activate(data))
      .then((res) => {
        setData({
          email: "",
          password: "",
        });
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
  };

  const handleReset = (event) => {
    event.preventDefault();
    if (email !== null && token !== null) {
      dispatch(reset(email, token, data))
        .then((res) => {
          setData({
            email: "",
            password: "",
          });
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
  };

  useEffect(() => {
    if (email !== null && token !== null) {
      setStep("reset");
    }
  }, [dispatch, email, token]);

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
            <p className="ml-5 mt-2">Activate your email</p>
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
        <img src={Logo2} alt="Tickitz" />
        <h1 className="d-none d-lg-block">
          {step === "fill"
            ? "Fill your complete email"
            : step === "activate"
            ? "Activate your email"
            : step === "reset"
            ? "Enter your new password"
            : "Done"}
        </h1>
        <h1 className="d-lg-none">Forgot password</h1>
        <p>
          {step === "fill"
            ? "we'll send a link to your email shortly"
            : step === "activate"
            ? "we'll send a link to your email shortly"
            : step === "reset"
            ? "reset password is almost complete"
            : "reset password has been completed"}
        </p>
        <form>
          {(step === "fill" || step === "activate") && (
            <Input
              label="Email"
              type="email"
              name="email"
              value={data.email}
              placeholder="Write your email"
              onChange={handleFormChange}
            />
          )}
          {(step === "reset" || step === "done") && (
            <Input
              label="New Password"
              type="password"
              name="password"
              value={data.password}
              placeholder="Write new password"
              onChange={handleFormChange}
            />
          )}
          {step === "fill" ? (
            <Button
              type="submit"
              className="btn-activate"
              onClick={handleConfirm}
            >
              {!loading ? "Confirm now" : "Please wait..."}
            </Button>
          ) : step === "activate" ? (
            <Button
              type="submit"
              className="btn-activate"
              onClick={handleActivate}
            >
              {!loading ? "Activate now" : "Please wait..."}
            </Button>
          ) : step === "reset" ? (
            <Button
              type="submit"
              className="btn-activate"
              onClick={handleReset}
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
