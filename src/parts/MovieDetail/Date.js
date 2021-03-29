import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../../configs/redux/actions/location";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Input from "../../components/Input";
import Select from "../../components/Select";

export default function Date() {
  const dispatch = useDispatch();
  const { location } = useSelector((state) => state.location);

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);

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
              <Select name="location" option={location}></Select>
            </form>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
