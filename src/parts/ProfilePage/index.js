import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { update, getUser } from "../../configs/redux/actions/user";
import Swal from "sweetalert2";
import axios from "axios";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ProfileInfo from "./components/ProfileInfo";
import Breadcrumbs from "./components/Breadcrumbs";

import Eye from "../../assets/img/eye.png";

export default function Profile() {
  const Url = process.env.REACT_APP_API_URL;

  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  const [auth, setAuth] = useState({
    password: "",
    confirmPassword: "",
  });
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [dataImage, setDataImage] = useState({
    image: {},
  });
  const [select, setSelect] = useState("No choosen");
  const [status, setStatus] = useState(false);
  const [typePassword, setTypePassword] = useState("password");
  const [typeConfirmPassword, setTypeConfirmPassword] = useState("password");

  const handleTogglePassword = () => {
    if (typePassword === "text") {
      setTypePassword("password");
    } else {
      setTypePassword("text");
    }
  };

  const handleToggleConfirmPassword = () => {
    if (typeConfirmPassword === "text") {
      setTypeConfirmPassword("password");
    } else {
      setTypeConfirmPassword("text");
    }
  };

  const handleFormChange = (event) => {
    const authNew = { ...auth };
    const userNew = { ...data };
    authNew[event.target.name] = event.target.value;
    userNew[event.target.name] = event.target.value;
    setAuth(authNew);
    setData(userNew);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("image", dataImage.image);
    setStatus(true);
    setSelect("No Choosen");
    if (auth.password === auth.confirmPassword) {
      dispatch(update(formData))
        .then((res) => {
          Swal.fire({
            title: "Success!",
            text: res,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#5f2eea",
          }).then(() => {
            axios
              .get(`${Url}/users/${id}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              })
              .then((res) => {
                dispatch(getUser());
                setData(res.data.data[0]);
                setAuth({
                  password: "",
                  confirmPassword: "",
                });
              });
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
        text: "Password do not match",
        icon: "error",
        confirmButtonText: "Ok",
        confirmButtonColor: "#5f2eea",
      });
    }
  };

  const handleChangeImage = (file, name) => {
    setSelect(name);
    setDataImage({
      image: file,
    });
  };

  useEffect(() => {
    axios
      .get(`${Url}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData(res.data.data[0]);
      });
  }, [Url, id, token]);

  return (
    <Section className="profile">
      <Container>
        <Row>
          <ProfileInfo
            user={data.fullName}
            img={data.image ? data.image : "images/avatar.png"}
            changeImage={handleChangeImage}
            status={status}
          ></ProfileInfo>
          <Col className="col-lg-7 col-xl-8">
            <Breadcrumbs></Breadcrumbs>
            <h6 className="d-block d-lg-none mt-4">Account Settings</h6>
            <div className="details-information mt-4 py-5 px-4">
              <p>Details Information</p>
              <hr />
              <form className="mt-5">
                <Row>
                  <Col className="col-xl-6">
                    <div className="form-group">
                      <Input
                        label="First Name"
                        type="text"
                        name="firstName"
                        value={data.firstName}
                        placeholder="Jonas"
                        onChange={handleFormChange}
                      />
                    </div>
                  </Col>
                  <Col className="col-xl-6">
                    <div className="form-group">
                      <Input
                        label="Last Name"
                        type="text"
                        name="lastName"
                        value={data.lastName}
                        placeholder="El Rodriguez"
                        onChange={handleFormChange}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-xl-6">
                    <div className="form-group">
                      <Input
                        label="E-mail"
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="jonasrodrigu123@gmail.com"
                        onChange={handleFormChange}
                      />
                    </div>
                  </Col>
                  <Col className="col-xl-6">
                    <div className="form-group">
                      <label htmlFor="phone-number">Phone Number</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div className="input-group-text profile-page">
                            +62
                          </div>
                        </div>
                        <Input
                          type="number"
                          name="phoneNumber"
                          value={data.phoneNumber}
                          placeholder="81445687121"
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
                Change image: Click your image <br /> Selected: {select}
              </form>
            </div>
            <div className="account-privacy mt-4 py-5 px-4">
              <p>Account and Privacy</p>
              <hr />
              <form className="mt-5">
                <Row>
                  <Col className="col-xl-6">
                    <div className="form-group password-container">
                      <Input
                        label="New Password"
                        type={typePassword}
                        name="password"
                        value={auth.password}
                        placeholder="Write your password"
                        onChange={handleFormChange}
                      />
                      <img
                        src={Eye}
                        alt="Eye"
                        width="20"
                        className="img-eye"
                        onClick={handleTogglePassword}
                      />
                    </div>
                  </Col>
                  <Col className="col-xl-6">
                    <div className="form-group password-container">
                      <Input
                        label="Confirm Password"
                        type={typeConfirmPassword}
                        name="confirmPassword"
                        value={auth.confirmPassword}
                        placeholder="Confirm your password"
                        onChange={handleFormChange}
                      />
                      <img
                        src={Eye}
                        alt="Eye"
                        width="20"
                        className="img-eye"
                        onClick={handleToggleConfirmPassword}
                      />
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
            <div className="text-center text-lg-left">
              <Button
                type="button"
                className="btn btn-update my-5"
                onClick={handleSubmit}
              >
                Update changes
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
