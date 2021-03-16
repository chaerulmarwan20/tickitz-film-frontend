import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Button from "../../components/Button";
import Select from "../../components/Select";
import ProfileInfo from "./components/ProfileInfo";
import Breadcrumbs from "./components/Breadcrumbs";

import CineOne from "../../assets/img/CineOne21 2.png";
import Ebv from "../../assets/img/ebv.id 2.png";
import Hiflix from "../../assets/img/hiflix 2.png";

export default function Order() {
  const Url = process.env.REACT_APP_API_URL;
  const { id } = useParams();

  const [data, setData] = useState({
    user: {
      fullName: "",
    },
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
    axios.get(`${Url}/transactions/${id}`).then((res) => {
      setTransactions({
        item: res.data.data,
      });
    });
  }, []);

  useEffect(() => {
    axios.get(`${Url}/users/${id}`).then((res) => {
      setData({
        user: res.data.data[0],
      });
    });
  }, []);

  return (
    <Section className="order-history">
      <Container>
        <Row>
          <ProfileInfo data={data.user.fullName}></ProfileInfo>
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
                        src={
                          data.idCinema === 1
                            ? Hiflix
                            : data.idCinema === 2
                            ? Ebv
                            : CineOne
                        }
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
