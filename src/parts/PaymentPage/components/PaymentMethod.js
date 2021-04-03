import { React, Fragment } from "react";
import { Link } from "react-router-dom";

import Google from "../../../assets/img/logos_google-pay.png";
import Visa from "../../../assets/img/logos_visa.png";
import GoPay from "../../../assets/img/Logo GoPay (SVG-240p) - FileVector69 1.png";
import Paypal from "../../../assets/img/logos_paypal.png";
import Dana from "../../../assets/img/Logo DANA (PNG-240p) - FileVector69 1.png";
import BCA from "../../../assets/img/Bank BCA Logo (SVG-240p) - FileVector69 1.png";
import BRI from "../../../assets/img/Bank BRI (Bank Rakyat Indonesia) Logo (SVG-240p) - FileVector69 1.png";
import Ovo from "../../../assets/img/ovo.png";

export default function PaymentMethod() {
  return (
    <Fragment>
      <div className="d-flex">
        <Link to="#" className="btn btn-payment">
          <img src={Google} alt="Google" width="74" />
        </Link>
        <Link to="#" className="btn btn-payment">
          <img src={Visa} alt="Visa" width="80" />
        </Link>
        <Link to="#" className="btn btn-payment">
          <img src={GoPay} alt="GoPay" width="106" />
        </Link>
        <Link to="#" className="btn btn-payment d-none d-md-flex">
          <img src={Paypal} alt="Paypal" width="31" />
        </Link>
      </div>
      <div className="d-flex">
        <Link to="#" className="btn btn-payment d-md-none">
          <img src={Paypal} alt="Paypal" width="31" />
        </Link>
        <Link to="#" className="btn btn-payment">
          <img src={Dana} alt="Dana" width="108" />
        </Link>
        <Link to="#" className="btn btn-payment d-none d-md-flex">
          <img src={BCA} alt="BCA" width="85" />
        </Link>
        <Link to="#" className="btn btn-payment d-none d-md-flex">
          <img src={BRI} alt="BRI" width="45" />
        </Link>
        <Link to="#" className="btn btn-payment">
          <img src={Ovo} alt="Ovo" width="92" />
        </Link>
      </div>
    </Fragment>
  );
}
