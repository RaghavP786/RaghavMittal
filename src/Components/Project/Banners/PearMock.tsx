import React from "react";

import BannerLogo from "../../../assets/P2/banner-logo.png";
import Banner1 from "../../../assets/P2/banner-1.png";
import Banner2 from "../../../assets/P2/banner-2.png";
const PearMock = () => {
  return (
    <>
      <div
        className="h-full flex flex-col justify-between gap-5"
        style={{ background: "black" }}
      >
        <div
          className="w-full h-[5%] flex justify-center items-center"
          style={{
            background: "white",
            borderRadius: "22px",
            color: "#000000A3",
          }}
        >
          <div className="w-[70%] h-[60%] flex justify-center gap-2">
            <div className="flex w-[15%] h-full">
              <img className="h-full w-full" src={BannerLogo} alt="" />
            </div>
            <div className="inline-flex leading-none font-monserrat font-bold text-[0.85rem] text-center">
              PEARMOCK
            </div>
          </div>
        </div>
        <div className="w-full h-[56%]">
          <img className="h-full w-full" src={Banner1} alt="" />
        </div>
        <div className="w-full h-[37%]">
          <img className="h-full w-full" src={Banner2} alt="" />
        </div>
      </div>
    </>
  );
};

export default PearMock;
