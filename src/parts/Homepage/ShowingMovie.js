import React from "react";
import { Link } from "react-router-dom";

import Section from "../../components/Section";

import Image1 from "../../assets/img/image-showing-1.png";
import Image2 from "../../assets/img/image-showing-2.png";
import Image3 from "../../assets/img/image-showing-3.png";

export default function ShowingMovie() {
  return (
    <Section className="showing-movie">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <h1 className="now-showing">Now Showing</h1>
            <Link to="#">view all</Link>
          </div>
        </div>
        <div className="row mt-5 pl-2 pl-lg-0">
          <div className="col-12 px-0 now-showing-movie">
            <div className="card">
              <div className="image-card">
                <img src={Image1} alt="ImageCard" />
              </div>
            </div>
            <div className="card">
              <div className="image-card">
                <img src={Image2} alt="ImageCard" />
              </div>
            </div>
            <div className="card">
              <div className="image-card">
                <img src={Image3} alt="ImageCard" />
              </div>
            </div>
            <div className="card">
              <div className="image-card">
                <img src={Image1} alt="ImageCard" />
              </div>
            </div>
            <div className="card">
              <div className="image-card">
                <img src={Image2} alt="ImageCard" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
