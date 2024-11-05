import React from "react";
import Img1 from "../../../assets/P4/hive-logo.png";
import Img2 from "../../../assets/P4/hive-frame-1.png";
import Img3 from "../../../assets/P4/hive-frame-2.png";
import Img4 from "../../../assets/P4/hive-frame-3.png";

const Hive = () => {
  return (
    <>
      <div className="h-full w-full flex flex-col justify-between">
        <div
          className="w-full h-[14%] flex justify-center items-center py-3"
          style={{
            background: "linear-gradient(180deg, #111315 -40.1%, #30353C 100%)",
            borderRadius: "4px",
          }}
        >
          <img className=" h-full" src={Img1} alt="" />
        </div>
        <div className="w-full h-[26.4%]">
          <img className="w-full h-full" src={Img2} alt="" />
        </div>
        <div className="w-full h-[26.4%]">
          <img className="w-full h-full" src={Img3} alt="" />
        </div>
        <div className="w-full h-[26.4%]">
          <img className="w-full h-full" src={Img4} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hive;
