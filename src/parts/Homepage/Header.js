import React from "react";

import Image1 from "../../assets/img/image-1.png";
import Image2 from "../../assets/img/image-2.png";
import Image3 from "../../assets/img/image-3.png";

export default function Header() {
  const cardMovie = [Image1, Image2, Image3];

  return (
    <header className="homepage">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-12 col-lg-6">
            <p className="mt-1 mt-md-3 mt-lg-5">
              Nearest Cinema, Newest Movie,
            </p>
            <h1>Find out now!</h1>
          </div>
          <div className="col-12 col-sm-12 mt-5 mt-lg-0 col-lg-6 d-flex justify-content-center container-card">
            {cardMovie.map((data, index) => {
              return (
                <div key={index} className="card-movie">
                  <img src={data} className="card-img-top" alt="CardImage" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
