import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumbs() {
  return (
    <div className="breadcrumbs-custom d-none d-lg-flex align-items-center">
      <Link to="/profile-page" className="mx-5">
        Account Settings
      </Link>
      <Link to="/order-history?sortBy=date&order=asc" className="active">
        Order History
      </Link>
    </div>
  );
}
