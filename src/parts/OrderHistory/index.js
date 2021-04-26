import { React, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderHistory } from "../../configs/redux/actions/orderHistory";
import { getUser } from "../../configs/redux/actions/user";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Button from "../../components/Button";
import ProfileInfo from "./components/ProfileInfo";
import Breadcrumbs from "./components/Breadcrumbs";

export default function Order() {
  const history = useHistory();

  const useQuery = () => new URLSearchParams(useLocation().search);

  const query = useQuery();

  const sortBy = query.get("sortBy");
  const order = query.get("order");

  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.orderHistory);
  const { user } = useSelector((state) => state.user);

  const ImgUrl = process.env.REACT_APP_API_IMG;

  const setDate = (params) => {
    const date = new Date(params);
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return `${day[date.getDay()]}, ${date.getDate()} ${
      month[date.getMonth()]
    } ${date.getFullYear()}`;
  };

  const setTime = (params) => {
    const time = params.split(":");
    return `${time[0]}:${time[1]}`;
  };

  const handleDetails = (id) => {
    history.push("/ticket-result", { idTicket: id });
  };

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (user.id !== undefined) {
      dispatch(getOrderHistory(sortBy, order, user.id));
    }
  }, [dispatch, sortBy, order, user.id]);

  return (
    <Section className="order-history">
      <Container>
        <Row>
          <ProfileInfo user={user.fullName} img={user.image}></ProfileInfo>
          <Col className="col-lg-7 col-xl-8">
            <Breadcrumbs></Breadcrumbs>
            <Container>
              {transactions.map((data, index) => {
                return (
                  <Row
                    key={index}
                    className="detail-order justify-content-between flex-column flex-md-row align-items-start align-items-md-center mt-0 mt-md-4 mb-4 mb-md-0 py-4"
                  >
                    <div className="left pl-4 pl-md-5 order-1 order-md-0">
                      <p className="m-0">
                        {setDate(data.dateTransactions)} - {setTime(data.time)}
                      </p>
                      <h3 className="mt-1">{data.movieTitle}</h3>
                    </div>
                    <div className="right pr-0 pr-md-5 pl-4 pl-md-0 order-0 order-md-1 mb-4 mb-md-0">
                      <img
                        src={`${ImgUrl}${data.imageCinema}`}
                        alt="Cinema"
                        width="122"
                      />
                    </div>
                    <hr className="mt-4 mb-4 order-2" />
                    <div className="pl-4 pl-md-5 pb-2 order-3">
                      <Button
                        className={`btn ml-2 ml-sm-0 ${
                          data.status === "SUCCESS"
                            ? "btn-ticket"
                            : data.status === "PENDING"
                            ? "btn-ticket"
                            : "btn-ticket-canceled"
                        }`}
                      >
                        {`${
                          data.status === "SUCCESS"
                            ? "Ticket in active"
                            : data.status === "PENDING"
                            ? "Ticket in active"
                            : "Ticket in cancel"
                        }`}
                      </Button>
                    </div>
                    <div className="pr-0 pr-md-5 pb-2 order-4 d-none d-md-block">
                      <select
                        className="custom-select"
                        onChange={() => handleDetails(data.id)}
                      >
                        <option value="Show Details">Show Details</option>
                        <option value="Go to details">Go to details</option>
                      </select>
                    </div>
                  </Row>
                );
              })}
            </Container>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
