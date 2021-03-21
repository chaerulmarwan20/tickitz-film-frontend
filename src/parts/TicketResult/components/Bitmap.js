import { React, Fragment } from "react";
import Bitmap1 from "../../../assets/img/Bitmap Copy 7.png";
import Bitmap2 from "../../../assets/img/Bitmap Copy 8.png";
import Bitmap3 from "../../../assets/img/Bitmap Copy 9.png";
import Bitmap4 from "../../../assets/img/Bitmap Copy 10.png";

export default function Bitmap() {
  return (
    <Fragment>
      <img src={Bitmap4} alt="Bitmap" width="56" />
      <img src={Bitmap3} alt="Bitmap" width="56" />
      <img src={Bitmap2} alt="Bitmap" width="56" />
      <img src={Bitmap1} alt="Bitmap" width="56" />
      <img src={Bitmap1} alt="Bitmap" width="56" />
    </Fragment>
  );
}
