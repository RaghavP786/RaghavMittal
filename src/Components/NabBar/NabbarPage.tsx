import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
type HoverIndex = number | null;

const NabbarPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState<HoverIndex>(null);
  const navigate = useNavigate();
  // Handle mouse enter and leave events with proper types
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const handleClick = (name: string) => {
    name = name.toLowerCase();
    navigate(`/${name}`);
  };
  return (
    <div
      className="h-screen w-screen "
      style={{ background: "#0F0F0F", color: "rgba(255, 255, 255, 0.64)" }}
    >
      <div className="w-[100%] h-[55%] max-h-[55%] flex border-b-2 border-bars">
        {["HOME", "ABOUT", "RESUME", "EXTRAS"].map((item, index) => (
          <div
            key={index}
            className={`${
              index == 0 ? "ml-[2.5%]" : ""
            } inline-flex items-end text-[3rem] font-montserrat font-bold h-full w-[24.5%] border-l-2 border-bars leading-none`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(item)}
          >
            {item}
          </div>
        ))}
        {/* <div className="ml-[2.5%] inline-flex items-end text-[3rem] font-montserrat font-bold h-full w-[24.5%] border-l-2 border-bars leading-none">
          HOME
        </div>
        <div className="inline-flex text-[3rem] items-end font-montserrat font-bold h-full w-[24.5%] border-l-2 border-bars leading-none hover-target">
          <a>ABOUT</a>
        </div>
        <div className="inline-flex items-end text-[3rem] font-montserrat font-bold h-full w-[24.5%] border-l-2 border-bars leading-none hover-target">
          <a>RESUME</a>
        </div>
        <div className="inline-flex items-end text-[3rem] font-montserrat font-bold h-full w-[24.5%] border-l-2 border-bars leading-none hover-target">
          <a>EXTRAS</a>
        </div> */}
      </div>

      <div className="w-[100%] h-[45%] max-h-[45%] flex background-change">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`${
              index == 0 ? "ml-[2.5%]" : ""
            } h-full w-[24.5%] border-l-2 border-bars ${
              hoveredIndex === index ? `hovered-background-${index + 1}` : ""
            }`}
          ></div>
        ))}
        {/* <div className="ml-[2.5%] h-full w-[24.5%] border-l-2 border-bars"></div>
        <div className="h-full w-[24.5%] border-l-2 border-bars"></div>
        <div className="h-full w-[24.5%] border-l-2 border-bars"></div>
        <div className="h-full w-[24.5%] border-l-2 border-bars"></div> */}
      </div>
    </div>
  );
};

export default NabbarPage;
