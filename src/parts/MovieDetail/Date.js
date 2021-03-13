import React from "react";
import Section from "../../components/Section";

export default function Date() {
  return (
    <Section className="date">
      <div className="container">
        <div className="row mb-2 mb-md-4">
          <div className="col-12">
            <h2 className="text-center">Showtimes and Tickets</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <form className="form-inline d-flex justify-content-center">
              <input type="date" className="form-control" value="2021-07-21" />
              <select className="custom-select">
                <option value="Purwokerto" selected>
                  Purwokerto
                </option>
                <option value="Jakarta">Jakarta</option>
                <option value="Bandung">Bandung</option>
                <option value="Surabaya">Surabaya</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
