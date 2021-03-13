import React from "react";
import { Link } from "react-router-dom";

import Section from "../../components/Section";

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
            <div className="card">
              <div className="card-upcoming-movie">
                <img src={Image1} alt="ImageUpcomingMovie" />
                <p>Black Widow</p>
                <span>Action, Adventure, Sci-Fi</span>
                <Link to="#" className="btn btn-details">
                  Details
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-upcoming-movie">
                <img src={Image2} alt="ImageUpcomingMovie" />
                <p>The Witches</p>
                <span>Adventure, Comedy</span>
                <Link to="#" className="btn btn-details">
                  Details
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-upcoming-movie">
                <img src={Image3} alt="ImageUpcomingMovie" />
                <p>Tenet</p>
                <span>Action, Sci-Fi</span>
                <Link to="#" className="btn btn-details">
                  Details
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-upcoming-movie">
                <img src={Image1} alt="ImageUpcomingMovie" />
                <p>Black Widow</p>
                <span>Action, Adventure, Sci-Fi</span>
                <Link to="#" className="btn btn-details">
                  Details
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-upcoming-movie">
                <img src={Image2} alt="ImageUpcomingMovie" />
                <p>The Witches</p>
                <span>Adventure, Comedy</span>
                <Link to="#" className="btn btn-details">
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
