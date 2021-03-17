import { React, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Input from "../../components/Input";
import Select from "../../components/Select";

export default function Date() {
  const Url = process.env.REACT_APP_API_URL;
  const [state, setState] = useState({
    location: [],
  });

  useEffect(() => {
    axios.get(`${Url}/cities`).then((res) => {
      setState({
        location: res.data.data,
      });
    });
  }, []);

  return (
    <Section className="date">
      <Container>
        <Row className="mb-2 mb-md-4">
          <Col className="col-12">
            <h2 className="text-center">Showtimes and Tickets</h2>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 d-flex justify-content-center">
            <form className="form-inline d-flex justify-content-center">
              <Input type="date" name="date" value="2021-07-21" />
              <Select name="location" option={state.location}></Select>
            </form>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
