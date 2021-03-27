import { React, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Select from "../../components/Select";
import ProfileInfo from "./components/ProfileInfo";
import Breadcrumbs from "./components/Breadcrumbs";

export default function Order() {
  const useQuery = () => new URLSearchParams(useLocation().search);

  const query = useQuery();

  const sortBy = query.get("sortBy");
  const order = query.get("order");

  const Url = process.env.REACT_APP_API_URL;
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  const [data, setData] = useState({
    user: {},
  });
  const [transactions, setTransactions] = useState({
    item: [],
  });

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
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return `${day[date.getDay()]}, ${date.getDate()} ${
      month[date.getMonth()]
    } ${date.getFullYear()}`;
  };

  const setTime = (params) => {
    let time = params.split(":");
    return `${time[0]}:${time[1]}`;
  };

  const deleteData = (id) => {
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
          .delete(`${Url}/transactions/${id}`)
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

  const handleRemove = (id) => {
    deleteData(id);
  };

  useEffect(() => {
    axios
      .get(`${Url}/transactions/users/${id}?sortBy=${sortBy}&order=${order}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTransactions({
          item: res.data.data,
        });
      });
  }, [Url, id, token, sortBy, order, transactions.item]);

  useEffect(() => {
    axios
      .get(`${Url}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setData({
          user: res.data.data[0],
        });
      });
  }, [Url, id, token]);

  return (
    <Section className="order-history">
      <Container>
        <Row>
          <ProfileInfo
            user={data.user.fullName}
            img={data.user.image ? data.user.image : "images/avatar.png"}
          ></ProfileInfo>
          <Col className="col-lg-7 col-xl-8">
            <Breadcrumbs></Breadcrumbs>
            <Container>
              {transactions.item.map((data, index) => {
                return (
                  <Row
                    key={index}
                    className="detail-order justify-content-between flex-column flex-md-row align-items-start align-items-md-center mt-0 mt-md-4 mb-4 mb-md-0 py-4"
                  >
                    <div className="left pl-4 pl-md-5 order-1 order-md-0">
                      <p className="m-0">
                        {setDate(data.date)} - {setTime(data.time)}
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
                            ? "btn-ticket-used"
                            : "btn-ticket-canceled"
                        }`}
                      >
                        {`${
                          data.status === "SUCCESS"
                            ? "Ticket in active"
                            : data.status === "PENDING"
                            ? "Ticket in not active"
                            : "Ticket in cancel"
                        }`}
                      </Button>
                    </div>
                    <div className="pr-0 pr-md-5 pb-2 order-4 d-none d-md-block">
                      <Select
                        onChange={(e) =>
                          e.target.value === "Delete" && handleRemove(data.id)
                        }
                        option={["Show Details", "Delete"]}
                      ></Select>
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
