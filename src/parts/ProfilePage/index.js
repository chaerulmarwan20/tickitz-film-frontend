import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserUpdate, update } from "../../configs/redux/actions/user";
import Swal from "sweetalert2";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Input from "../../components/Input";
import ProfileInfo from "./components/ProfileInfo";
import Breadcrumbs from "./components/Breadcrumbs";

export default function Profile() {
  const dispatch = useDispatch();

  const [auth, setAuth] = useState({
    password: "",
    confirmPassword: "",
  });
  const [data, setData] = useState({
    user: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      password: "",
    },
  });

  const handleFormChange = (event) => {
    const authNew = { ...auth };
    const userNew = { ...data.user };
    authNew[event.target.name] = event.target.value;
    userNew[event.target.name] = event.target.value;
    setAuth(authNew);
    setData({
      user: userNew,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (auth.password === auth.confirmPassword) {
      dispatch(update(data.user))
        .then((res) => {
          Swal.fire({
            title: "Success!",
            text: res,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#5f2eea",
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(getUserUpdate()).then((res) => {
                setData({
                  user: res,
                });
                setAuth({
                  password: "",
                  confirmPassword: "",
                });
              });
            } else {
              dispatch(getUserUpdate()).then((res) => {
                setData({
                  user: res,
                });
                setAuth({
                  password: "",
                  confirmPassword: "",
                });
              });
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

  useEffect(() => {
    dispatch(getUserUpdate()).then((res) => {
      setData({
        user: res,
      });
    });
  }, [dispatch]);

  return (
    <Section className="profile">
      <Container>
        <Row>
          <ProfileInfo
            user={data.user.fullName}
            img={data.user.image ? data.user.image : "images/avatar.png"}
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
                        value={data.user.firstName}
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
                        value={data.user.lastName}
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
                        value={data.user.email}
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
                          value={data.user.phoneNumber}
                          placeholder="81445687121"
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>
                  </Col>
                </Row>
              </form>
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
                        value={auth.password}
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
                        value={auth.confirmPassword}
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
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
