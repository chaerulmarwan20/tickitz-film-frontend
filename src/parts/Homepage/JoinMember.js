import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { moviegoers } from "../../configs/redux/actions/user";

import Container from "../../components/Container";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function JoinMember() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Required!"),
    }),
    onSubmit: (values) => {
      dispatch(moviegoers(values))
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
          if (err.message === "Your account has become moviegoers") {
            Swal.fire({
              title: "Info!",
              text: err.message,
              icon: "info",
              confirmButtonText: "Ok",
              confirmButtonColor: "#5f2eea",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: err.message,
              icon: "error",
              confirmButtonText: "Ok",
              confirmButtonColor: "#5f2eea",
            });
          }
        });
    },
  });

  return (
    <Section className="join-member">
      <Container>
        <div className="jumbotron py-5">
          <p>Be the vanguard of the</p>
          <h1>Moviegoers</h1>
          <form className="form-inline join-now" onSubmit={formik.handleSubmit}>
            <div className="d-flex flex-column">
              <Input
                type="text"
                name="email"
                placeholder="Type your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                className={`${
                  formik.errors.email && formik.touched.email && "error"
                }`}
              />
              {formik.errors.email && formik.touched.email && (
                <small className="error mt-1">{formik.errors.email}</small>
              )}
            </div>
            <Button
              className={`btn btn-join-now ${
                formik.errors.email && formik.touched.email && "mt-4"
              }`}
              type="submit"
            >
              Join now
            </Button>
          </form>
          <p className="text-join-now">
            By joining you as a Tickitz member, <br className="d-block" />
            you will get points every time you purchase a ticket.
          </p>
        </div>
      </Container>
    </Section>
  );
}
