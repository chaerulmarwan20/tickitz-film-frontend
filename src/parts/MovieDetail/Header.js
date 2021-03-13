import React from "react";

import MovieHeader from "../../assets/img/movie-header.png";

export default function Header() {
  return (
    <header className="movies-details mb-5">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-start">
            <div className="card movie-header">
              <img src={MovieHeader} alt="MovieHeader" />
            </div>
          </div>
          <div className="col-12 movie col-lg-7 mt-5 mt-lg-0 pl-0">
            <div className="d-flex flex-column text-center text-lg-left mb-3">
              <h1>Spider-Man: Homecoming</h1>
              <p className="genre">Adventure, Action, Sci-Fi</p>
            </div>
            <div className="row flex-row flex-lg-column ml-auto ml-lg-n3 movie-detail">
              <div className="col-6 col-lg-12">
                <h2>Release Date</h2>
                <p>June 28, 2017</p>
              </div>
              <div className="col-6 col-lg-12">
                <h2>Duration</h2>
                <p>
                  2 h<span>ou</span>rs 13 min<span>utes</span>
                </p>
              </div>
              <div className="col-6 col-lg-12">
                <h2>Directed by</h2>
                <p>Jon Watss</p>
              </div>
              <div className="col-6 col-lg-12">
                <h2>Casts</h2>
                <p>
                  Tom Holland, <span>Michael Keaton,</span> Robert Downey Jr.,{" "}
                  <span className="d-none">etc.</span>
                  <span>...</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
