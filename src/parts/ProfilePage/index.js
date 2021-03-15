import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Input from "../../components/Input";

import User from "../../assets/img/user.png";
import Star from "../../assets/img/star.png";

export default function Profile() {
  const Url = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  const [data, setData] = useState({
    user: [],
    form: {
      firstName: "",
      lastName: "",
      fullName: "",
      phoneNumber: "",
      username: "username",
      email: "",
      password: "",
      role: 2,
    },
  });

  const putData = () => {
    axios
      .put(`${Url}/users/${id}`, data.form)
      .then((res) => {
        Swal.fire({
          title: "Success!",
          text: res.data.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.response.data.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  const deleteData = () => {
    Swal.fire({
      title: "Are you sure about deleting this file?",
      showDenyButton: true,
      confirmButtonText: `Delete It!`,
      confirmButtonColor: "#ea2e57",
      denyButtonText: "Cancel",
      denyButtonColor: `#5f2eea`,
      focusDeny: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${Url}/users/${id}`)
          .then((res) => {
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
      } else if (result.isDenied) {
        Swal.fire({
          title: "Delete canceled",
          text: "",
          icon: "info",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      }
    });
  };

  const handleFormChange = (event) => {
    const formNew = { ...data.form };
    formNew[event.target.name] = event.target.value;
    setData({
      form: formNew,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    putData();
  };

  const handleRemove = (event) => {
    event.preventDefault();
    deleteData();
  };

  useEffect(() => {
    axios.get(`${Url}/users/${id}`).then((res) => {
      setData({
        user: res.data.data,
      });
    });
  }, []);

  useEffect(() => {
    axios.get(`${Url}/users/${id}`).then((res) => {
      setData({
        user: res.data.data,
      });
    });
  }, [data.form]);

  return (
    <Section className="profile">
      <Container>
        <Row>
          <Col className="col-lg-5 col-xl-4">
            <div className="info d-block pt-4">
              <Row className="px-5">
                <Col className="pl-0">
                  <h1>Info</h1>
                </Col>
                <Col className="d-flex align-items-center justify-content-end pr-0 ml-auto dot">
                  <div className="d-flex">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Col>
              </Row>
              {data.user.map((item, index) => {
                return (
                  <Row key={index} className="flex-column px-5 mt-4">
                    <Col className="d-flex justify-content-center">
                      <img
                        src={User}
                        width="136"
                        className="rounded-circle"
                        alt="User"
                      />
                    </Col>
                    <Col className="d-flex justify-content-center text-center mt-2">
                      <h2>{item.fullName}</h2>
                    </Col>
                    <Col className="d-flex justify-content-center text-center">
                      <p>Moviegoers</p>
                    </Col>
                  </Row>
                );
              })}
              <hr className="mt-4" />
              <Row className="mx-5 mt-4">
                <div className="col">
                  <h3 className="mb-4">Loyalty Points</h3>
                  <div className="moviegoers pl-3 pt-3">
                    <div></div>
                    <div></div>
                    <h4>Moviegoers</h4>
                    <p className="mt-4">
                      320 <span>points</span>
                    </p>
                    <img src={Star} width="51" alt="Star" />
                  </div>
                  <h5 className="mt-4 text-center">
                    180 points become a master
                  </h5>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: ` 45%` }}
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </Row>
            </div>
          </Col>
          <Col className="col-lg-7 col-xl-8">
            <div className="breadcrumbs-custom d-none d-lg-flex align-items-center">
              <Link to="/profile-page" className="mx-5 active">
                Account Settings
              </Link>
              <Link to="/order-history">Order History</Link>
            </div>
            <h6 className="d-block d-lg-none mt-4">Account Settings</h6>
            <div className="details-information mt-4 py-5 px-4">
              <p>Details Information</p>
              <hr />
              {data.user.map((item, index) => {
                return (
                  <form key={index} className="mt-5">
                    <Row>
                      <Col className="col-xl-6 d-none d-lg-block">
                        <div className="form-group">
                          <Input
                            label="First Name"
                            type="text"
                            name="firstName"
                            value={item.firstName}
                            placeholder="Jonas"
                            onChange={handleFormChange}
                          />
                        </div>
                      </Col>
                      <Col className="col-xl-6 d-none d-lg-block">
                        <div className="form-group">
                          <Input
                            label="Last Name"
                            type="text"
                            name="lastName"
                            value={item.lastName}
                            placeholder="El Rodriguez"
                            onChange={handleFormChange}
                          />
                        </div>
                      </Col>
                      <Col className="col-xl-6 d-block d-lg-none">
                        <div className="form-group">
                          <Input
                            label="Full Name"
                            type="text"
                            name="fullName"
                            value={item.fullName}
                            placeholder="Jonas El Rodriguez"
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
                            value={item.email}
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
                              value={item.phoneNumber}
                              placeholder="81445687121"
                              onChange={handleFormChange}
                            />
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </form>
                );
              })}
            </div>
            <div className="account-privacy mt-4 py-5 px-4">
              <p>Account and Privacy</p>
              <hr />
              <form className="mt-5">
                <Row>
                  <Col className="col-xl-6">
                    <div className="form-group">
                      <Input
                        label="New Password"
                        type="password"
                        name="password"
                        placeholder="Write your password"
                        onChange={handleFormChange}
                      />
                    </div>
                  </Col>
                  <Col className="col-xl-6">
                    <div className="form-group">
                      <Input
                        label="Confirm Password"
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        onChange={handleFormChange}
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
              <Button
                type="button"
                className="btn btn-delete ml-1 mt-5 mb-5"
                onClick={handleRemove}
              >
                Delete
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
