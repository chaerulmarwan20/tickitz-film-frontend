import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUpcomingMovies } from "../../configs/redux/actions/homePage";

import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import Section from "../../components/Section";
import Card from "../../components/Card";

export default function UpcomingMovies() {
  const ImgUrl = process.env.REACT_APP_API_IMG;

  const [month, setMonth] = useState([
    {
      index: "01",
      name: "January",
      active: false,
    },
    {
      index: "02",
      name: "February",
      active: false,
    },
    {
      index: "03",
      name: "March",
      active: false,
    },
    {
      index: "04",
      name: "April",
      active: false,
    },
    {
      index: "05",
      name: "May",
      active: false,
    },
    {
      index: "06",
      name: "June",
      active: false,
    },
    {
      index: "07",
      name: "July",
      active: true,
    },
    {
      index: "08",
      name: "August",
      active: false,
    },
    {
      index: "09",
      name: "September",
      active: false,
    },
    {
      index: "10",
      name: "October",
      active: false,
    },
    {
      index: "11",
      name: "November",
      active: false,
    },
    {
      index: "12",
      name: "December",
      active: false,
    },
  ]);
  const [date, setDate] = useState("07");
  const [empty, setEmpty] = useState(false);

  const dispatch = useDispatch();
  const { upcomingMovies } = useSelector((state) => state.homePage);

  const handleClick = (params) => {
    setMonth(
      month.map((item, index) => {
        return {
          index: item.index,
          name: item.name,
          active: item.index === params ? true : false,
        };
      })
    );
    setDate(params);
  };

  useEffect(() => {
    dispatch(getUpcomingMovies(date))
      .then((res) => {
        setEmpty(false);
      })
      .catch((err) => {
        setEmpty(true);
      });
  }, [dispatch, date, month]);

  return (
    <Section className="upcoming-movies">
      <Container>
        <Row>
          <Col className="col-12 d-flex justify-content-between align-items-center">
            <h1 className="upcoming">Upcoming Movies</h1>
            <Link to="/all-movies-upcoming">view all</Link>
          </Col>
        </Row>
        <div className="mt-4 container-btn-month">
          {month.map((item, index) => {
            return (
              <Link
                to="#"
                key={index}
                className={`btn btn-month ${item.active && "main"}`}
                onClick={() => handleClick(item.index)}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <Row className="pl-2 pl-lg-0">
          <Col className="col-12 px-0 container-upcoming-movie">
            {empty === false &&
              upcomingMovies.map((data, index) => {
                return (
                  <Card key={index}>
                    <div className="card-upcoming-movie">
                      <img
                        src={`${ImgUrl}${data.image}`}
                        alt="ImageUpcomingMovie"
                      />
                      <p>{data.title}</p>
                      <span>{data.genre}</span>
                      <Link
                        to={`movie-detail/${data.id}`}
                        className="btn btn-details"
                      >
                        Details
                      </Link>
                    </div>
                  </Card>
                );
              })}
            {empty === true && (
              <h6 className="empty text-center">
                There are no films that will air this month
              </h6>
            )}
          </Col>
        </Row>
      </Container>
    </Section>
  );
}
