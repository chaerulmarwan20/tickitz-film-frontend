import React from "react";
import Barcode from "react-barcode";

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
        <div className="admit-one mt-5">
          <div className="left d-flex justify-content-between align-items-center px-5">
            <div className="image">
              <img src={Image} alt="Tickitz" width="125" />
            </div>
            <h2 className="mt-2">Admit One</h2>
          </div>
          <div className="right d-flex justify-content-center align-items-center">
            <div className="image">
              <img src={Image} alt="Tickitz" width="125" />
            </div>
          </div>
        </div>
        <div className="tickets mt-0">
          <div className="left px-5 py-4">
            <div className="d-flex flex-column">
              <h3>Movie</h3>
              <p>{this.props.movie}</p>
            </div>
            <div className="row">
              <div className="col">
                <h3>Date</h3>
                <p>{this.props.date}</p>
              </div>
              {this.props.time !== undefined && (
                <div className="col">
                  <h3>Time</h3>
                  <p>{this.props.time}</p>
                </div>
              )}
              <div className="col">
                <h3>Category</h3>
                <p>{this.props.category}</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h3>Count</h3>
                <p>{this.props.qty}</p>
              </div>
              <div className="col">
                <h3>Seats</h3>
                <p>{this.props.seat}</p>
              </div>
              <div className="col">
                <h3>Price</h3>
                <p className="price">{this.props.total}</p>
              </div>
            </div>
          </div>
          <div className="right py-4">
            <div className="d-flex flex-row ml-3">
              <div className="d-flex flex-column">
                <h3>Movie</h3>
                <p>{this.props.movie}</p>
              </div>
              <div className="d-flex bitmap">
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
                <div className="one">
                  <h3>Date</h3>
                  <p>{this.props.date}</p>
                </div>
                <div className="two">
                  <h3>Count</h3>
                  <p>{this.props.qty}</p>
                </div>
              </div>
              <div className="d-flex flex-column ml-4 ml-xl-5 px-0">
                {this.props.time !== undefined && (
                  <div className="one">
                    <h3>Time</h3>
                    <p>{this.props.time}</p>
                  </div>
                )}
                <div className="two">
                  <h3>Seats</h3>
                  <p>{this.props.seat}</p>
                </div>
                <div className="three">
                  <h3>Category</h3>
                  <p>{this.props.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
