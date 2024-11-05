import React from "react";

import Img1 from "../../../assets/P3/banner-1.png";
import Img2 from "../../../assets/P3/banner-2.png";

const Vance = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col justify-between">
        {/* //animating the veance is remaining here */}
        <div
          className="w-full h-[14%]"
          style={{
            background: "linear-gradient(180deg, #111315 -40.1%, #30353C 100%)",
            borderRadius: "4px",
          }}
        ></div>
        <div
          className="w-full h-[6.6%] flex justify-center items-center"
          style={{
            background: "#61D990",
            borderRadius: "32px",
            color: " #222222",
          }}
        >
          <p className="text-[0.8rem] font-semibold">Join waitlist</p>
        </div>
        <div className="w-full h-[36%]">
          <img className="w-full h-full" src={Img1} alt="" />
        </div>
        <div className="w-full h-[36%]">
          <img className="w-full h-full" src={Img2} alt="" />
        </div>
      </div>
    </>
  );
};

export default Vance;
