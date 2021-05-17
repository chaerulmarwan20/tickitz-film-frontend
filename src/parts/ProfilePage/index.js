import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { update, getUser, findUser } from "../../configs/redux/actions/user";

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
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [dataImage, setDataImage] = useState({
    image: {},
  });
  const [password, setPassword] = useState("");
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

  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required!"),
      lastName: Yup.string().required("Required!"),
      email: Yup.string().email("Invalid email format").required("Required!"),
      phoneNumber: Yup.number()
        .typeError("Invalid phone number")
        .min(11, "Mininum 11 characters")
        .required("Required!"),
      password: Yup.string().min(8, "Minimum 8 characters"),
      confirmPassword: Yup.string()
        .min(8, "Minimum 8 characters")
        .oneOf([Yup.ref("password")], "Password do not match"),
    }),
    onSubmit: (values) => {
      const formData = new FormData();
      formData.append("firstName", values.firstName);
      formData.append("lastName", values.lastName);
      formData.append("phoneNumber", values.phoneNumber);
      formData.append("email", values.email);
      formData.append(
        "password",
        values.password === "" ? password : values.password
      );
      formData.append("image", dataImage.image);
      setStatus(true);
      setSelect("No Choosen");
      dispatch(update(formData, user.id))
        .then((res) => {
          formik.resetForm();
          Swal.fire({
            title: "Success!",
            text: res,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#5f2eea",
          }).then(() => {
            dispatch(findUser()).then((res) => {
              dispatch(getUser());
              const result = res;
              result.confirmPassword = "";
              setPassword(result.password);
              result.password = "";
              formik.setValues(result);
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
    },
  });

  const handleChangeImage = (file, name) => {
    setSelect(name);
    setDataImage({
      image: file,
    });
  };

  useEffect(() => {
    dispatch(getUser())
      .then((res) => {})
      .catch((err) => {
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#5f2eea",
        });
      });
  }, [dispatch]);

  useEffect(() => {
    dispatch(findUser())
      .then((res) => {
        const result = res;
        result.confirmPassword = "";
        setPassword(result.password);
        result.password = "";
        formik.setValues(result);
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
  }, [dispatch]);

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <Section className="profile">
      <Container>
        <Row>
          <ProfileInfo
            user={user.fullName}
            img={user.image}
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
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        className={`${
                          formik.errors.firstName &&
                          formik.touched.firstName &&
                          "error"
                        }`}
                        placeholder="Write First Name"
                      />
                      {formik.errors.firstName && formik.touched.firstName && (
                        <small className="error">
                          {formik.errors.firstName}
                        </small>
                      )}
                    </div>
                  </Col>
                  <Col className="col-xl-6">
                    <div className="form-group">
                      <Input
                        label="Last Name"
                        type="text"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        className={`${
                          formik.errors.lastName &&
                          formik.touched.lastName &&
                          "error"
                        }`}
                        placeholder="Write Last Name"
                      />
                      {formik.errors.lastName && formik.touched.lastName && (
                        <small className="error">
                          {formik.errors.lastName}
                        </small>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-xl-6">
                    <div className="form-group">
                      <Input
                        label="E-mail"
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className={`${
                          formik.errors.email && formik.touched.email && "error"
                        }`}
                        placeholder="Write Email"
                      />
                      {formik.errors.email && formik.touched.email && (
                        <small className="error">{formik.errors.email}</small>
                      )}
                    </div>
                  </Col>
                  <Col className="col-xl-6">
                    <div className="form-group">
                      <label htmlFor="phone-number">Phone Number</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <div
                            className={`input-group-text profile-page ${
                              formik.errors.phoneNumber &&
                              formik.touched.phoneNumber &&
                              "error"
                            }`}
                          >
                            +62
                          </div>
                        </div>
                        <Input
                          type="text"
                          name="phoneNumber"
                          value={formik.values.phoneNumber}
                          onChange={formik.handleChange}
                          className={`${
                            formik.errors.phoneNumber &&
                            formik.touched.phoneNumber &&
                            "error"
                          }`}
                          placeholder="Write Phone Number"
                        />
                      </div>
                      {formik.errors.phoneNumber &&
                        formik.touched.phoneNumber && (
                          <small className="error">
                            {formik.errors.phoneNumber}
                          </small>
                        )}
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
                    <div className="password-container">
                      <Input
                        label="New Password"
                        type={typePassword}
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        className={`${
                          formik.errors.password &&
                          formik.touched.password &&
                          "error"
                        }`}
                        placeholder="Write your password"
                      />
                      <img
                        src={Eye}
                        alt="Eye"
                        width="20"
                        className="img-eye"
                        onClick={handleTogglePassword}
                      />
                    </div>
                    {formik.errors.password && formik.touched.password && (
                      <small className="error">{formik.errors.password}</small>
                    )}
                  </Col>
                  <Col className="col-xl-6">
                    <div className="password-container mt-3 mt-xl-0">
                      <Input
                        label="Confirm Password"
                        type={typeConfirmPassword}
                        name="confirmPassword"
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        className={`${
                          formik.errors.confirmPassword &&
                          formik.touched.confirmPassword &&
                          "error"
                        }`}
                        placeholder="Confirm your password"
                      />
                      <img
                        src={Eye}
                        alt="Eye"
                        width="20"
                        className="img-eye"
                        onClick={handleToggleConfirmPassword}
                      />
                    </div>
                    {formik.errors.confirmPassword &&
                      formik.touched.confirmPassword && (
                        <small className="error">
                          {formik.errors.confirmPassword}
                        </small>
                      )}
                  </Col>
                </Row>
              </form>
            </div>
            <div className="text-center text-lg-left">
              <Button
                type="submit"
                className="btn btn-update my-5"
                onClick={formik.handleSubmit}
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
