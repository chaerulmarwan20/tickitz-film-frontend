import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumbs() {
  return (
    <div className="breadcrumbs-custom d-none d-lg-flex align-items-center">
      <Link to="/profile-page" className="mx-5 active">
        Account Settings
      </Link>
      <Link to="/order-history/1">Order History</Link>
    </div>
  );
}
