import { React, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import Container from "../../components/Container";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Input from "../../components/Input";

export default function JoinMember() {
  const Url = process.env.REACT_APP_API_URL;
  const [data, setData] = useState({
    email: "",
  });

  const handleFormChange = (event) => {
    const dataNew = { ...data };
    dataNew[event.target.name] = event.target.value;
    setData(dataNew);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    putData();
  };

  const putData = () => {
    axios
      .put(`${Url}/users/moviegoers/`, data)
      .then((res) => {
        setData({
          email: "",
        });
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
  };

  return (
    <Section className="join-member">
      <Container>
        <div className="jumbotron py-5">
          <p>Be the vanguard of the</p>
          <h1>Moviegoers</h1>
          <form className="form-inline join-now">
            <Input
              type="text"
              name="email"
              value={data.email}
              placeholder="Type your email"
              onChange={handleFormChange}
            />
            <Button
              className="btn btn-join-now"
              type="submit"
              onClick={handleSubmit}
            >
              Join now
            </Button>
          </form>
          <p className="text-join-now">
            By joining you as a Tickitz member,
            <br />
            we will always send you the <br /> latest updates via email .
          </p>
        </div>
      </Container>
    </Section>
  );
}
