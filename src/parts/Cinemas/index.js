import { React, useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import axios from "axios";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";

export default function Index() {
  const Url = process.env.REACT_APP_API_URL;
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const [cinemas, setCinemas] = useState([]);
  const [empty, setEmpty] = useState(false);
  const [order, setOrder] = useState("ASC");
  const [sort, setSort] = useState("id");
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPage, setTotalPage] = useState(null);
  const [limit, setLimit] = useState(5);
  const [paginate, setPaginate] = useState(1);

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

  useEffect(() => {
    axios
      .get(
        `${Url}/cinemas/?order=${order}&sortBy=${sort}&page=${page}&perPage=${limit}`
      )
      .then((res) => {
        setCurrentPage(res.data.currentPage);
        setTotalPage(res.data.totalPage);
        setPaginate(res.data.totalPage < 6 ? res.data.totalPage : 5);
        setEmpty(false);
        setCinemas(res.data.data);
      })
      .catch((err) => {
        setEmpty(true);
      });
  }, [page, limit, totalPage, Url, order, sort]);

  useEffect(() => {
    scroll.scrollToTop();
  }, []);

  return (
    <Section className="cinemas">
      <Container>
        <Row>
          <Col className="col-12 d-flex justify-content-center justify-content-md-start mt-4 mt-lg-5">
            <h1 className="title">Cinemas</h1>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          {empty === true && (
            <h4 className="empty text-center mt-5">Movie not found</h4>
          )}
          {empty === false &&
            cinemas.map((data, index) => {
              return (
                <Col
                  className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
                  key={index}
                >
                  <div className="card bg-light mb-3">
                    <div
                      className="card-header p-3 d-flex justify-content-center align-items-center"
                      style={{ minHeight: "100px", maxHeight: "100px" }}
                    >
                      <img
                        src={`${ImgUrl}${data.image}`}
                        width={150}
                        alt="Cinemas"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{data.name}</h5>
                      <p className="card-text">{data.description}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
        </Row>
        <Row className="pl-2 pl-lg-0 mt-4">
          <Col className="col-12 px-0">
            {empty === false && (
              <>
                <div className="d-flex justify-content-center">
                  <ul className="pagination-custom">
                    {Array.from(Array(paginate).keys()).map((data, index) => {
                      return (
                        <li key={index}>
                          <button
                            className={`${
                              currentPage >= 5 && currentPage < totalPage
                                ? data + (currentPage - 3) === currentPage &&
                                  "page-active"
                                : currentPage >= 5 && currentPage === totalPage
                                ? data + (currentPage - 3) - 1 ===
                                    currentPage && "page-active"
                                : data + 1 === currentPage && "page-active"
                            }`}
                            onClick={() =>
                              handleClickPaginate(
                                `${
                                  currentPage >= 5 && currentPage < totalPage
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
                              : currentPage >= 5 && currentPage === totalPage
                              ? data + (currentPage - 3) - 1
                              : data + 1}
                          </button>
                        </li>
                      );
                    })}
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
                      <option value="name">Sort by name</option>
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
    </Section>
  );
}
