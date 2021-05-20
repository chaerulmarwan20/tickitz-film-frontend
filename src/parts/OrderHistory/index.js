import { React, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { animateScroll as scroll } from "react-scroll";
import Swal from "sweetalert2";
import { getUser } from "../../configs/redux/actions/user";
import axiosApiInstance from "../../helpers/axios";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Button from "../../components/Button";
import ProfileInfo from "./components/ProfileInfo";
import Breadcrumbs from "./components/Breadcrumbs";

export default function Order() {
  const Url = process.env.REACT_APP_API_URL;
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const history = useHistory();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [transactions, setTransactions] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [order, setOrder] = useState("ASC");
  const [sort, setSort] = useState("id");
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPage, setTotalPage] = useState(null);
  const [limit, setLimit] = useState(5);
  const [paginate, setPaginate] = useState(1);

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

  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };

  const handleClickOrder = (params) => {
    setOrder(params);
  };

  const handleChangeLimit = (event) => {
    if (page > 1) {
      setPage(1);
    }
    setLimit(event.target.value);
  };

  const handleClickPaginate = (params) => {
    setPage(params);
  };

  const handleDetails = (id) => {
    history.push("/ticket-result", { idTicket: id });
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
    if (user.id !== undefined) {
      axiosApiInstance
        .get(
          `${Url}/transactions/users/${user.id}?order=${order}&sortBy=${sort}&page=${page}&perPage=${limit}`
        )
        .then((res) => {
          setCurrentPage(res.data.currentPage);
          setTotalPage(res.data.totalPage);
          setPaginate(res.data.totalPage < 6 ? res.data.totalPage : 5);
          setEmpty(false);
          setTransactions(res.data.data);
        })
        .catch((err) => {
          setEmpty(true);
        });
    }
  }, [page, limit, totalPage, Url, order, sort, user.id]);

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <Section className="order-history">
      <Container>
        <Row>
          <ProfileInfo
            user={user.fullName}
            img={user.image}
            moviegoers={user.moviegoers}
          ></ProfileInfo>
          <Col className="col-lg-7 col-xl-8">
            <Breadcrumbs></Breadcrumbs>
            <Container>
              {empty === false &&
                transactions.map((data, index) => {
                  return (
                    <Row
                      key={index}
                      className="detail-order justify-content-between flex-column flex-md-row align-items-start align-items-md-center mt-0 mt-md-4 mb-4 mb-md-0 py-4"
                    >
                      <div className="left pl-4 pl-md-5 order-1 order-md-0">
                        <p className="m-0">
                          {setDate(data.dateTransactions)} -{" "}
                          {setTime(data.time)}
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
                          onClick={() => handleDetails(data.id)}
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
              {empty === true && (
                <h6 className="empty mt-0 mt-md-5 text-center">
                  You don't have any transactions.
                </h6>
              )}
              <Row className="pl-2 pl-lg-0 mt-5 paginate">
                <Col className="col-12 px-0">
                  {empty === false && (
                    <>
                      <div className="d-flex justify-content-center">
                        <ul className="pagination-custom">
                          {Array.from(Array(paginate).keys()).map(
                            (data, index) => {
                              return (
                                <li key={index}>
                                  <button
                                    className={`${
                                      currentPage >= 5 &&
                                      currentPage < totalPage
                                        ? data + (currentPage - 3) ===
                                            currentPage && "page-active"
                                        : currentPage >= 5 &&
                                          currentPage === totalPage
                                        ? data + (currentPage - 3) - 1 ===
                                            currentPage && "page-active"
                                        : data + 1 === currentPage &&
                                          "page-active"
                                    }`}
                                    onClick={() =>
                                      handleClickPaginate(
                                        `${
                                          currentPage >= 5 &&
                                          currentPage < totalPage
                                            ? data + (currentPage - 3)
                                            : currentPage >= 5 &&
                                              currentPage === totalPage
                                            ? data + (currentPage - 3) - 1
                                            : data + 1
                                        }`
                                      )
                                    }
                                  >
                                    {currentPage >= 5 && currentPage < totalPage
                                      ? data + (currentPage - 3)
                                      : currentPage >= 5 &&
                                        currentPage === totalPage
                                      ? data + (currentPage - 3) - 1
                                      : data + 1}
                                  </button>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                      <div className="d-flex flex-column flex-md-row justify-content-md-center align-items-center mt-1 mt-md-3">
                        <div className="btn-container d-flex">
                          <button
                            type="button"
                            className={`btn btn-order mr-3 d-flex justify-content-center align-items-center ${
                              order === "ASC" ? "active" : ""
                            }`}
                            onClick={() => handleClickOrder("ASC")}
                          >
                            Ascending
                          </button>
                          <button
                            type="button"
                            className={`btn btn-order mr-3 d-flex justify-content-center align-items-center ${
                              order === "DESC" ? "active" : ""
                            }`}
                            onClick={() => handleClickOrder("DESC")}
                          >
                            Descending
                          </button>
                        </div>
                        <div className="select-container d-flex flex-column flex-md-row mt-3 mt-md-0">
                          <select
                            className="custom-select mr-3"
                            onChange={handleChangeSort}
                          >
                            <option value="id">Sort by id</option>
                            <option value="dateTransactions">
                              Sort by date
                            </option>
                            <option value="movieTitle">Sort by title</option>
                            <option value="cinema">Sort by cinema</option>
                          </select>
                          <select
                            className="custom-select mt-3 mt-md-0"
                            onChange={handleChangeLimit}
                          >
                            <option value="5">Limit 5</option>
                            <option value="10">Limit 10</option>
                            <option value="15">Limit 15</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
