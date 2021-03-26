import React from "react";
import Select from "../../../components/Select";
import Ebv from "../../../assets/img/ebv.id 2.png";
import Hiflix from "../../../assets/img/hiflix 2.png";
import CineOne from "../../../assets/img/CineOne21 2.png";

export default function PremiereLocation() {
  return (
    <div className="location py-5 px-4 mt-4">
      <div className="d-flex justify-content-center justify-content-xl-start">
        <Select
          option={["Purwokerto", "Jakarta", "Bandung", "Surabaya"]}
        ></Select>
      </div>
      <div className="image-cinemas d-flex justify-content-center justify-content-xl-between align-items-center mt-4">
        <div className="not-active d-flex justify-content-center align-items-center mr-4 mr-xl-0">
          <div>
            <img src={Ebv} alt="Ebv" width="80" />
          </div>
        </div>
        <div className="not-active d-flex justify-content-center align-items-center mr-4 mr-xl-0">
          <div>
            <img src={Hiflix} alt="Hiflix" width="80" />
          </div>
        </div>
        <div className="not-active d-flex justify-content-center align-items-center mr-4 mr-xl-0">
          <div>
            <img src={CineOne} alt="CineOne" width="80" />
          </div>
        </div>
      </div>
      <div className="image-cinemas d-flex justify-content-center justify-content-xl-between align-items-center">
        <div className="not-active d-flex justify-content-center align-items-center mr-4 mr-xl-0">
          <div>
            <img src={Ebv} alt="Ebv" width="80" />
          </div>
        </div>
        <div className="active d-flex justify-content-center align-items-center mr-4 mr-xl-0">
          <div>
            <img src={Hiflix} alt="Hiflix" width="80" />
          </div>
        </div>
        <div className="not-active d-flex justify-content-center align-items-center mr-4 mr-xl-0">
          <div>
            <img src={CineOne} alt="CineOne" width="80" />
          </div>
        </div>
      </div>
      <div className="image-cinemas d-none d-lg-flex justify-content-center justify-content-xl-between align-items-center">
        <div className="not-active d-flex justify-content-center align-items-center mr-4 mr-xl-0">
          <div>
            <img src={Ebv} alt="Ebv" width="80" />
          </div>
        </div>
        <div className="not-active d-flex justify-content-center align-items-center mr-4 mr-xl-0">
          <div>
            <img src={Hiflix} alt="Hiflix" width="80" />
          </div>
        </div>
        <div className="not-active d-flex justify-content-center align-items-center mr-4 mr-xl-0">
          <div>
            <img src={CineOne} alt="CineOne" width="80" />
          </div>
        </div>
      </div>
    </div>
  );
}
