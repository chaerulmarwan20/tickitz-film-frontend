import { React, Fragment } from "react";
import { Link } from "react-router-dom";

import Row from "../../../components/Row";
import Col from "../../../components/Col";
import Card from "../../../components/Card";

import Lines from "../../../assets/img/Graph lines.png";

export default function Chart() {
  return (
    <Fragment>
      <Col className="col-lg-5 col-xl-4">
        <Card className="chart p-4">
          <h2>Avengers: End Game</h2>
          <div className="link mt-1 d-flex justify-content-around">
            <Link className="active" to="#">
              Weekly
            </Link>
            <Link to="#">Monthly</Link>
            <Link to="#">Yearly</Link>
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
            <Link className="active" to="#">
              Weekly
            </Link>
            <Link to="#">Monthly</Link>
            <Link to="#">Yearly</Link>
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
            <Link className="active" to="#">
              Weekly
            </Link>
            <Link to="#">Monthly</Link>
            <Link to="#">Yearly</Link>
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
            <Link className="active" to="#">
              Weekly
            </Link>
            <Link to="#">Monthly</Link>
            <Link to="#">Yearly</Link>
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
            <Link className="active" to="#">
              Weekly
            </Link>
            <Link to="#">Monthly</Link>
            <Link to="#">Yearly</Link>
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
            <Link className="active" to="#">
              Weekly
            </Link>
            <Link to="#">Monthly</Link>
            <Link to="#">Yearly</Link>
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
