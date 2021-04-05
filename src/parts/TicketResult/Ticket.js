import React from "react";

import Row from "../../components/Row";
import Logo from "./components/Logo";
import MovieTitle from "./components/MovieTitle";
import TicketDetail from "./components/TicketDetail";
import TicketDetailBitmap from "./components/TicketDetailBitmap";
import Bitmap from "./components/Bitmap";

export class Ticket extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="admit-one mt-5">
          <div className="left d-flex justify-content-between align-items-center px-5">
            <Logo></Logo>
            <h2 className="mt-2">Admit One</h2>
          </div>
          <div className="right d-flex justify-content-center align-items-center">
            <Logo></Logo>
          </div>
        </div>
        <div className="tickets mt-0">
          <div className="left px-5 py-4">
            <MovieTitle heading="Movie" title={this.props.movie}></MovieTitle>
            <Row>
              <TicketDetail
                heading="Date"
                title={this.props.date}
              ></TicketDetail>
              {this.props.time !== undefined && (
                <TicketDetail
                  heading="Time"
                  title={this.props.time}
                ></TicketDetail>
              )}
              <TicketDetail
                heading="Category"
                title={this.props.category}
              ></TicketDetail>
            </Row>
            <Row>
              <TicketDetail
                heading="Count"
                title={this.props.qty}
              ></TicketDetail>
              <TicketDetail
                heading="Seats"
                title={this.props.seat}
              ></TicketDetail>
              <TicketDetail
                heading="Price"
                title={this.props.total}
                className="price"
              ></TicketDetail>
            </Row>
          </div>
          <div className="right py-4">
            <div className="d-flex flex-row ml-3">
              <MovieTitle heading="Movie" title={this.props.movie}></MovieTitle>
              <div className="d-flex flex-column bitmap">
                <Bitmap></Bitmap>
              </div>
            </div>
            <div className="d-flex ml-3">
              <div className="d-flex flex-column px-0">
                <TicketDetailBitmap
                  className="one"
                  heading="Date"
                  title={this.props.date}
                ></TicketDetailBitmap>
                <TicketDetailBitmap
                  className="two"
                  heading="Count"
                  title={this.props.qty}
                ></TicketDetailBitmap>
              </div>
              <div className="d-flex flex-column ml-4 ml-xl-5 px-0">
                {this.props.time !== undefined && (
                  <TicketDetailBitmap
                    className="one"
                    heading="Time"
                    title={this.props.time}
                  ></TicketDetailBitmap>
                )}

                <TicketDetailBitmap
                  className="two"
                  heading="Seats"
                  title={this.props.seat}
                ></TicketDetailBitmap>
                <TicketDetailBitmap
                  className="three"
                  heading="Category"
                  title={this.props.category}
                ></TicketDetailBitmap>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
