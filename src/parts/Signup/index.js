import { React, Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import Aside from "../../components/Aside";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";

import Logo1 from "../../assets/img/tickitz-sign-in.png";
import Logo2 from "../../assets/img/Tickitz-mobile-sign-in.png";

export default function Index() {
  const useQuery = () => new URLSearchParams(useLocation().search);

  const query = useQuery();
  let email = query.get("email");
  let token = query.get("token");

  const Url = process.env.REACT_APP_API_URL;

  const [data, setData] = useState({
    firstName: "firstName",
    lastName: "lastName",
    phoneNumber: "000000000000",
    username: "username",
    email: "",
    password: "",
  });
  const [checked, setChecked] = useState(false);
  const [step, setStep] = useState("fill");

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
          firstName: "firstName",
          lastName: "lastName",
          phoneNumber: "000000000000",
          username: "username",
          email: "",
          password: "",
        });
        setChecked(false);
        setStep("activate");
        Swal.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      })
      .catch((err) => {
        setChecked(false);
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      });
  };

  const handleChecked = () => {
    if (checked === true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  useEffect(() => {
    if (email !== null && token !== null) {
      axios
        .get(`${Url}/users/auth/verify/?email=${email}&token=${token}`)
        .then((res) => {
          setChecked(false);
          setStep("done");
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
    }
  }, [Url, email, token]);

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
        <img src={Logo2} alt="Tickitz" className="tickitz" />
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
            onClick={handleSubmit}
            disabled={checked === true ? false : true}
          >
            Join for free now
          </Button>
        </form>
        <p className="forgot-password">
          Do you already have an account? <Link to="/sign-in">Log in</Link>
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
    </Fragment>
  );
}
