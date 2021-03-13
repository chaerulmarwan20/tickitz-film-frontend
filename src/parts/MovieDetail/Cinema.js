import React from "react";
import { Link } from "react-router-dom";

import Section from "../../components/Section";
import Button from "../../components/Button";

import Ebv from "../../assets/img/ebv.id-cinema.png";
import CineOne from "../../assets/img/CineOne21-cinema.png";
import Hiflix from "../../assets/img/hiflix-cinema.png";

export default function Date() {
  return (
    <Section className="cinema">
      <div className="container">
        <div className="row container-cinema justify-content-center mb-5">
          <div className="col-12 col-lg-5 d-flex justify-content-center d-xl-block col-xl-4 mt-2">
            <div className="card cinema-card">
              <div className="row flex-column flex-sm-row pt-3">
                <div className="col d-flex justify-content-center align-items-center mt-2 mt-sm-0">
                  <img src={Ebv} alt="Ebv" className="ebv" />
                </div>
                <div className="col d-flex flex-column pl-1 mt-3 mt-sm-0">
                  <h2>ebv.id</h2>
                  <p>
                    Whatever street No.12, South{" "}
                    <br className="d-block d-sm-none" /> Purwokerto
                  </p>
                </div>
              </div>
              <hr className="mx-auto" />
              <div className="row">
                <div className="col">
                  <nav className="nav pl-3 flex-row">
                    <p className="nav-link" href="#">
                      08:30am
                    </p>
                    <p className="nav-link" href="#">
                      10:30pm
                    </p>
                    <p className="nav-link empty" href="#">
                      12:00pm
                    </p>
                    <p className="nav-link" href="#">
                      02:00pm
                    </p>
                    <p className="nav-link" href="#">
                      04:30pm
                    </p>
                    <p className="nav-link empty" href="#">
                      07:00pm
                    </p>
                    <p className="nav-link" href="#">
                      08:30pm
                    </p>
                  </nav>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col px-5 d-flex justify-content-between align-items-center">
                  <h3>Price</h3>
                  <p className="price">$10.00/seat</p>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col pr-5 pl-3 pl-sm-2 d-flex justify-content-around align-items-center">
                  <Button type="button" className="btn book-now">
                    Book now
                  </Button>
                  <Link to="#" className="add-cart">
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 d-flex justify-content-center d-xl-block col-xl-4 mt-2">
            <div className="card cinema-card d-none d-sm-block">
              <div className="row flex-column flex-sm-row pt-3">
                <div className="col d-flex justify-content-center align-items-center mt-2 mt-sm-0">
                  <img src={CineOne} alt="Cineone" className="cineone" />
                </div>
                <div className="col d-flex flex-column pl-1 mt-3 mt-sm-0">
                  <h2>CineOne21</h2>
                  <p>
                    Downcare street No. 21, East{" "}
                    <br className="d-block d-sm-none" /> Purwokerto
                  </p>
                </div>
              </div>
              <hr className="mx-auto" />
              <div className="row">
                <div className="col">
                  <nav className="nav pl-3 flex-row">
                    <p className="nav-link empty" href="#">
                      08:30am
                    </p>
                    <p className="nav-link" href="#">
                      10:00am
                    </p>
                    <p className="nav-link" href="#">
                      12:00pm
                    </p>
                    <p className="nav-link activated" href="#">
                      02:00pm
                    </p>
                    <p className="nav-link" href="#">
                      04:00pm
                    </p>
                    <p className="nav-link" href="#">
                      06:00pm
                    </p>
                    <p className="nav-link empty" href="#">
                      08:00pm
                    </p>
                  </nav>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col px-5 d-flex justify-content-between align-items-center">
                  <h3>Price</h3>
                  <p className="price">$10.00/seat</p>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col pr-5 pl-3 pl-sm-2 d-flex justify-content-around align-items-center">
                  <Button type="button" className="btn book-now">
                    Book now
                  </Button>
                  <Link to="#" className="add-cart">
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 d-flex justify-content-center d-xl-block col-xl-4 mt-2">
            <div className="card cinema-card d-none d-sm-block">
              <div className="row flex-column flex-sm-row pt-3">
                <div className="col d-flex justify-content-center align-items-center mt-2 mt-sm-0">
                  <img src={Hiflix} alt="Hiflix" className="hiflix" />
                </div>
                <div className="col d-flex flex-column pl-1 mt-3 mt-sm-0">
                  <h2>hiflix Cinema</h2>
                  <p>
                    Colonel street No. 2, East{" "}
                    <br className="d-block d-sm-none" /> Purwokerto
                  </p>
                </div>
              </div>
              <hr className="mx-auto" />
              <div className="row">
                <div className="col">
                  <nav className="nav pl-3 flex-row">
                    <p className="nav-link" href="#">
                      08:30am
                    </p>
                    <p className="nav-link" href="#">
                      10:00am
                    </p>
                    <p className="nav-link" href="#">
                      12:00pm
                    </p>
                    <p className="nav-link empty" href="#">
                      02:00pm
                    </p>
                    <p className="nav-link" href="#">
                      04:00pm
                    </p>
                    <p className="nav-link empty" href="#">
                      06:00pm
                    </p>
                    <p className="nav-link" href="#">
                      08:00pm
                    </p>
                  </nav>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col px-5 d-flex justify-content-between align-items-center">
                  <h3>Price</h3>
                  <p className="price">$10.00/seat</p>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col pr-5 pl-3 pl-sm-2 d-flex justify-content-around align-items-center">
                  <Button type="button" className="btn book-now">
                    Book now
                  </Button>
                  <Link to="#" className="add-cart">
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 d-flex justify-content-center d-xl-block col-xl-4 mt-2">
            <div className="card cinema-card">
              <div className="row flex-column flex-sm-row pt-3">
                <div className="col d-flex justify-content-center align-items-center mt-2 mt-sm-0">
                  <img src={Ebv} alt="Ebv" className="ebv" />
                </div>
                <div className="col d-flex flex-column pl-1 mt-3 mt-sm-0">
                  <h2>ebv.id</h2>
                  <p>
                    Whatever street No. 12, South{" "}
                    <br className="d-block d-sm-none" /> Purwokerto
                  </p>
                </div>
              </div>
              <hr className="mx-auto" />
              <div className="row">
                <div className="col">
                  <nav className="nav pl-3 flex-row">
                    <p className="nav-link" href="#">
                      08:30am
                    </p>
                    <p className="nav-link" href="#">
                      10:00am
                    </p>
                    <p className="nav-link empty" href="#">
                      12:00pm
                    </p>
                    <p className="nav-link" href="#">
                      02:00pm
                    </p>
                    <p className="nav-link" href="#">
                      04:00pm
                    </p>
                    <p className="nav-link empty" href="#">
                      06:00pm
                    </p>
                    <p className="nav-link" href="#">
                      08:00pm
                    </p>
                  </nav>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col px-5 d-flex justify-content-between align-items-center">
                  <h3>Price</h3>
                  <p className="price">$10.00/seat</p>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col pr-5 pl-3 pl-sm-2 d-flex justify-content-around align-items-center">
                  <Button type="button" className="btn book-now">
                    Book now
                  </Button>
                  <Link to="#" className="add-cart">
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 d-flex justify-content-center d-xl-block col-xl-4 mt-2">
            <div className="card cinema-card d-none d-sm-block">
              <div className="row flex-column flex-sm-row pt-3">
                <div className="col d-flex justify-content-center align-items-center mt-2 mt-sm-0">
                  <img src={CineOne} alt="Cineone" className="cineone" />
                </div>
                <div className="col d-flex flex-column pl-1 mt-3 mt-sm-0">
                  <h2>CineOne21</h2>
                  <p>
                    Downcare street No. 21, East{" "}
                    <br className="d-block d-sm-none" /> Purwokerto
                  </p>
                </div>
              </div>
              <hr className="mx-auto" />
              <div className="row">
                <div className="col">
                  <nav className="nav pl-3 flex-row">
                    <p className="nav-link empty" href="#">
                      08:30am
                    </p>
                    <p className="nav-link" href="#">
                      10:00am
                    </p>
                    <p className="nav-link" href="#">
                      12:00pm
                    </p>
                    <p className="nav-link" href="#">
                      02:00pm
                    </p>
                    <p className="nav-link" href="#">
                      04:00pm
                    </p>
                    <p className="nav-link" href="#">
                      06:00pm
                    </p>
                    <p className="nav-link empty" href="#">
                      08:00pm
                    </p>
                  </nav>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col px-5 d-flex justify-content-between align-items-center">
                  <h3>Price</h3>
                  <p className="price">$10.00/seat</p>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col pr-5 pl-3 pl-sm-2 d-flex justify-content-around align-items-center">
                  <Button type="button" className="btn book-now">
                    Book now
                  </Button>
                  <Link to="#" className="add-cart">
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 d-flex justify-content-center d-xl-block col-xl-4 mt-2">
            <div className="card cinema-card d-none d-sm-block">
              <div className="row flex-column flex-sm-row pt-3">
                <div className="col d-flex justify-content-center align-items-center mt-2 mt-sm-0">
                  <img src={Hiflix} alt="Hiflix" className="hiflix" />
                </div>
                <div className="col d-flex flex-column pl-1 mt-3 mt-sm-0">
                  <h2>hiflix Cinema</h2>
                  <p>
                    Colonel street No. 2, East{" "}
                    <br className="d-block d-sm-none" /> Purwokerto
                  </p>
                </div>
              </div>
              <hr className="mx-auto" />
              <div className="row">
                <div className="col">
                  <nav className="nav pl-3 flex-row">
                    <p className="nav-link" href="#">
                      08:30am
                    </p>
                    <p className="nav-link" href="#">
                      10:00am
                    </p>
                    <p className="nav-link" href="#">
                      12:00pm
                    </p>
                    <p className="nav-link empty" href="#">
                      02:00pm
                    </p>
                    <p className="nav-link" href="#">
                      04:00pm
                    </p>
                    <p className="nav-link empty" href="#">
                      06:00pm
                    </p>
                    <p className="nav-link" href="#">
                      08:00pm
                    </p>
                  </nav>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col px-5 d-flex justify-content-between align-items-center">
                  <h3>Price</h3>
                  <p className="price">$10.00/seat</p>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col pr-5 pl-3 pl-sm-2 d-flex justify-content-around align-items-center">
                  <Button type="button" className="btn book-now">
                    Book now
                  </Button>
                  <Link to="#" className="add-cart">
                    Add Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <nav>
              <ul className="pagination-custom">
                <li>
                  <Link to="#" className="page-active">
                    1
                  </Link>
                </li>
                <li>
                  <Link to="#">2</Link>
                </li>
                <li>
                  <Link to="#">3</Link>
                </li>
                <li>
                  <Link to="#">4</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </Section>
  );
}
