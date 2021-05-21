import { React, Fragment, useState } from "react";
import { Link } from "react-router-dom";

import Row from "../../../components/Row";
import Col from "../../../components/Col";
import Card from "../../../components/Card";

import Lines from "../../../assets/img/Graph lines.png";

export default function Chart() {
  const [active1, setActive1] = useState(1);
  const [active2, setActive2] = useState(1);
  const [active3, setActive3] = useState(1);
  const [active4, setActive4] = useState(1);
  const [active5, setActive5] = useState(1);
  const [active6, setActive6] = useState(1);

  const handleClick1 = (params) => {
    setActive1(params);
  };

  const handleClick2 = (params) => {
    setActive2(params);
  };

  const handleClick3 = (params) => {
    setActive3(params);
  };

  const handleClick4 = (params) => {
    setActive4(params);
  };

  const handleClick5 = (params) => {
    setActive5(params);
  };

  const handleClick6 = (params) => {
    setActive6(params);
  };

  return (
    <Fragment>
      <Col className="col-lg-5 col-xl-4">
        <Card className="chart p-4">
          <h2>Avengers: End Game</h2>
          <div className="link mt-1 d-flex justify-content-around">
            <Link
              className={`${active1 === 1 && "active"}`}
              to="#"
              onClick={() => handleClick1(1)}
            >
              Weekly
            </Link>
            <Link
              className={`${active1 === 2 && "active"}`}
              to="#"
              onClick={() => handleClick1(2)}
            >
              Monthly
            </Link>
            <Link
              className={`${active1 === 3 && "active"}`}
              to="#"
              onClick={() => handleClick1(3)}
            >
              Yearly
            </Link>
          </div>
          <Row>
            <Col className="col-3 d-flex flex-column justify-content-around price">
              <span>$800</span>
              <span>$600</span>
              <span>$400</span>
              <span>$200</span>
              <span>$0</span>
            </Col>
            <Col className="col-9 lines">
              <img src={Lines} alt="Chart" width="250" />
            </Col>
            <div className="d-flex month">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </Row>
        </Card>
      </Col>
      <Col className="col-lg-5 col-xl-4 mt-4 mt-lg-0">
        <Card className="chart p-4">
          <h2>Avengers: End Game</h2>
          <div className="link mt-1 d-flex justify-content-around">
            <Link
              className={`${active2 === 1 && "active"}`}
              to="#"
              onClick={() => handleClick2(1)}
            >
              Weekly
            </Link>
            <Link
              className={`${active2 === 2 && "active"}`}
              to="#"
              onClick={() => handleClick2(2)}
            >
              Monthly
            </Link>
            <Link
              className={`${active2 === 3 && "active"}`}
              to="#"
              onClick={() => handleClick2(3)}
            >
              Yearly
            </Link>
          </div>
          <Row>
            <Col className="col-3 d-flex flex-column justify-content-around price">
              <span>$800</span>
              <span>$600</span>
              <span>$400</span>
              <span>$200</span>
              <span>$0</span>
            </Col>
            <Col className="col-9 lines">
              <img src={Lines} alt="Chart" width="250" />
            </Col>
            <div className="d-flex month">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </Row>
        </Card>
      </Col>
      <Col className="col-lg-5 col-xl-4 mt-4 mt-xl-0 d-none d-lg-block">
        <Card className="chart p-4">
          <h2>Avengers: End Game</h2>
          <div className="link mt-1 d-flex justify-content-around">
            <Link
              className={`${active3 === 1 && "active"}`}
              to="#"
              onClick={() => handleClick3(1)}
            >
              Weekly
            </Link>
            <Link
              className={`${active3 === 2 && "active"}`}
              to="#"
              onClick={() => handleClick3(2)}
            >
              Monthly
            </Link>
            <Link
              className={`${active3 === 3 && "active"}`}
              to="#"
              onClick={() => handleClick3(3)}
            >
              Yearly
            </Link>
          </div>
          <Row>
            <Col className="col-3 d-flex flex-column justify-content-around price">
              <span>$800</span>
              <span>$600</span>
              <span>$400</span>
              <span>$200</span>
              <span>$0</span>
            </Col>
            <Col className="col-9 lines">
              <img src={Lines} alt="Chart" width="250" />
            </Col>
            <div className="d-flex month">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </Row>
        </Card>
      </Col>
      <Col className="col-lg-5 col-xl-4 mt-4 d-none d-lg-block">
        <Card className="chart p-4">
          <h2>Avengers: End Game</h2>
          <div className="link mt-1 d-flex justify-content-around">
            <Link
              className={`${active4 === 1 && "active"}`}
              to="#"
              onClick={() => handleClick4(1)}
            >
              Weekly
            </Link>
            <Link
              className={`${active4 === 2 && "active"}`}
              to="#"
              onClick={() => handleClick4(2)}
            >
              Monthly
            </Link>
            <Link
              className={`${active4 === 3 && "active"}`}
              to="#"
              onClick={() => handleClick4(3)}
            >
              Yearly
            </Link>
          </div>
          <Row>
            <Col className="col-3 d-flex flex-column justify-content-around price">
              <span>$800</span>
              <span>$600</span>
              <span>$400</span>
              <span>$200</span>
              <span>$0</span>
            </Col>
            <Col className="col-9 lines">
              <img src={Lines} alt="Chart" width="250" />
            </Col>
            <div className="d-flex month">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </Row>
        </Card>
      </Col>
      <Col className="col-lg-5 col-xl-4 mt-4 d-none d-lg-block">
        <Card className="chart p-4">
          <h2>Avengers: End Game</h2>
          <div className="link mt-1 d-flex justify-content-around">
            <Link
              className={`${active5 === 1 && "active"}`}
              to="#"
              onClick={() => handleClick5(1)}
            >
              Weekly
            </Link>
            <Link
              className={`${active5 === 2 && "active"}`}
              to="#"
              onClick={() => handleClick5(2)}
            >
              Monthly
            </Link>
            <Link
              className={`${active5 === 3 && "active"}`}
              to="#"
              onClick={() => handleClick5(3)}
            >
              Yearly
            </Link>
          </div>
          <Row>
            <Col className="col-3 d-flex flex-column justify-content-around price">
              <span>$800</span>
              <span>$600</span>
              <span>$400</span>
              <span>$200</span>
              <span>$0</span>
            </Col>
            <Col className="col-9 lines">
              <img src={Lines} alt="Chart" width="250" />
            </Col>
            <div className="d-flex month">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </Row>
        </Card>
      </Col>
      <Col className="col-lg-5 col-xl-4 mt-4 d-none d-lg-block">
        <Card className="chart p-4">
          <h2>Avengers: End Game</h2>
          <div className="link mt-1 d-flex justify-content-around">
            <Link
              className={`${active6 === 1 && "active"}`}
              to="#"
              onClick={() => handleClick6(1)}
            >
              Weekly
            </Link>
            <Link
              className={`${active6 === 2 && "active"}`}
              to="#"
              onClick={() => handleClick6(2)}
            >
              Monthly
            </Link>
            <Link
              className={`${active6 === 3 && "active"}`}
              to="#"
              onClick={() => handleClick6(3)}
            >
              Yearly
            </Link>
          </div>
          <Row>
            <Col className="col-3 d-flex flex-column justify-content-around price">
              <span>$800</span>
              <span>$600</span>
              <span>$400</span>
              <span>$200</span>
              <span>$0</span>
            </Col>
            <Col className="col-9 lines">
              <img src={Lines} alt="Chart" width="250" />
            </Col>
            <div className="d-flex month">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </Row>
        </Card>
      </Col>
    </Fragment>
  );
}
