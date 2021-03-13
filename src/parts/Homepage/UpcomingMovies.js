import React from "react";
import { Link } from "react-router-dom";

import Section from "../../components/Section";
import Card from "../../components/Card";

import Image1 from "../../assets/img/image-upcoming-1.png";
import Image2 from "../../assets/img/image-upcoming-2.png";
import Image3 from "../../assets/img/image-upcoming-3.png";

export default function UpcomingMovies() {
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

  const cardUpcoming = [
    {
      src: Image1,
      title: "Black Widow",
      genre: "Action, Adventure, Sci-Fi",
    },
    {
      src: Image2,
      title: "The Witches",
      genre: "Adventure, Comedy",
    },
    {
      src: Image3,
      title: "Tenet",
      genre: "Action, Sci-Fi",
    },
    {
      src: Image1,
      title: "Black Widow",
      genre: "Action, Adventure, Sci-Fi",
    },
    {
      src: Image2,
      title: "The Witches",
      genre: "Adventure, Comedy",
    },
  ];

  return (
    <Section className="upcoming-movies">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h1 className="upcoming">Upcoming Movies</h1>
            <Link to="#">view all</Link>
          </div>
        </div>
        <div className="mt-4 container-btn-month">
          {month.map((item, index) => {
            return (
              <Link
                to="#"
                key={index}
                className={`btn btn-month ${index === 0 ? "main" : ""}`}
              >
                {item}
              </Link>
            );
          })}
        </div>
        <div className="row pl-2 pl-lg-0">
          <div className="col-12 px-0 container-upcoming-movie">
            {cardUpcoming.map((data, index) => {
              return (
                <Card key={index}>
                  <div className="card-upcoming-movie">
                    <img src={data.src} alt="ImageUpcomingMovie" />
                    <p>{data.title}</p>
                    <span>{data.genre}</span>
                    <Link to="#" className="btn btn-details">
                      Details
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
