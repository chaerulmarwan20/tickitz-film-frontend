import React from "react";
import Barcode from "react-barcode";
import style from "./ticket-result.module.css";

import Image from "../../assets/img/Tickitz-white.png";

export class Ticket extends React.PureComponent {
  render() {
    const barCodeOptions = {
      width: 0.7,
      height: 40,
      format: "CODE128",
      displayValue: false,
      background: "transparent",
      lineColor: "#000000",
      margin: 0,
      marginTop: undefined,
      marginBottom: undefined,
      marginLeft: undefined,
      marginRight: undefined,
    };

    return (
      <div>
        <div className={[style["admit-one"], ["mt-5"]].join(" ")}>
          <div
            className={[
              style["left"],
              ["d-flex justify-content-between align-items-center px-5"],
            ].join(" ")}
          >
            <div className={style["image"]}>
              <img src={Image} alt="Tickitz" width="125" />
            </div>
            <h2 className={[style["heading-two"], ["mt-2"]].join(" ")}>
              Admit One
            </h2>
          </div>
          <div
            className={[
              style["right"],
              ["d-flex justify-content-center align-items-center"],
            ].join(" ")}
          >
            <div className={style["image"]}>
              <img src={Image} alt="Tickitz" width="125" />
            </div>
          </div>
        </div>
        <div className={[style["tickets"], ["mt-0"]].join(" ")}>
          <div className={[style["left"], ["px-5 py-4"]].join(" ")}>
            <div className="d-flex flex-column">
              <h3 className={style["heading-three"]}>Movie</h3>
              <p className={style["paragraf"]}>{this.props.movie}</p>
            </div>
            <div className="row">
              <div className="col">
                <h3 className={style["heading-three"]}>Date</h3>
                <p className={style["paragraf"]}>{this.props.date}</p>
              </div>
              {this.props.time !== undefined && (
                <div className="col">
                  <h3 className={style["heading-three"]}>Time</h3>
                  <p className={style["paragraf"]}>{this.props.time}</p>
                </div>
              )}
              <div className="col">
                <h3 className={style["heading-three"]}>Category</h3>
                <p className={style["paragraf"]}>{this.props.category}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3 className={style["heading-three"]}>Count</h3>
                <p className={style["paragraf"]}>{this.props.qty}</p>
              </div>
              <div className="col">
                <h3 className={style["heading-three"]}>Seats</h3>
                <p className={style["paragraf"]}>{this.props.seat}</p>
              </div>
              <div className="col">
                <h3 className={style["heading-three"]}>Price</h3>
                <p className={style["price"]}>{this.props.total}</p>
              </div>
            </div>
          </div>
          <div className={[style["right"], ["py-4"]].join(" ")}>
            <div className="d-flex flex-row ml-3">
              <div className="d-flex flex-column">
                <h3 className={style["heading-three"]}>Movie</h3>
                <p className={style["paragraf"]}>{this.props.movie}</p>
              </div>
              <div className={[style["bitmap"], ["d-flex"]].join(" ")}>
                <Barcode
                  {...barCodeOptions}
                  value={`${this.props.id}`}
                  alt="barcode"
                />
                <Barcode
                  {...barCodeOptions}
                  value={`${this.props.id}`}
                  alt="barcode"
                />
                <Barcode
                  {...barCodeOptions}
                  value={`${this.props.id}`}
                  alt="barcode"
                />
                <Barcode
                  {...barCodeOptions}
                  value={`${this.props.id}`}
                  alt="barcode"
                />
                <Barcode
                  {...barCodeOptions}
                  value={`${this.props.id}`}
                  alt="barcode"
                />
                <Barcode
                  {...barCodeOptions}
                  value={`${this.props.id}`}
                  alt="barcode"
                />
                <Barcode
                  {...barCodeOptions}
                  value={`${this.props.id}`}
                  alt="barcode"
                />
                <Barcode
                  {...barCodeOptions}
                  value={`${this.props.id}`}
                  alt="barcode"
                />
              </div>
            </div>
            <div className="d-flex ml-3">
              <div className="d-flex flex-column px-0">
                <div className={style["one"]}>
                  <h3 className={style["heading-three"]}>Date</h3>
                  <p className={style["paragraf"]}>{this.props.date}</p>
                </div>
                <div className={style["two"]}>
                  <h3 className={style["heading-three"]}>Count</h3>
                  <p className={style["paragraf"]}>{this.props.qty}</p>
                </div>
              </div>
              <div className="d-flex flex-column ml-4 ml-xl-5 px-0">
                {this.props.time !== undefined && (
                  <div className={style["three"]}>
                    <h3 className={style["heading-three"]}>Time</h3>
                    <p className={style["paragraf"]}>{this.props.time}</p>
                  </div>
                )}
                <div className={style["four"]}>
                  <h3 className={style["heading-three"]}>Seats</h3>
                  <p className={style["paragraf"]}>{this.props.seat}</p>
                </div>
                <div className={style["five"]}>
                  <h3 className={style["heading-three"]}>Category</h3>
                  <p className={style["paragraf"]}>{this.props.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
