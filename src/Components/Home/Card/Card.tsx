import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";
interface Props {
  id: number;
  height: string;
  colorClass: string;
  imgSrc: string;
  heading: string;
  desc: string;
  imgSmall: boolean;
  btn1: string;
  btn2: string;
  islg: boolean;
}
const Card = ({
  id,
  colorClass,
  imgSrc,
  heading,
  desc,
  imgSmall,
  btn1,
  btn2,
  islg,
}: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  function handleClick() {
    if (id == 4) {
      window.open(
        "https://www.figma.com/proto/ytLbo5ECa2XU2LlhEEvSjI/Untitled?page-id=0%3A1&node-id=0-736&starting-point-node-id=0%3A736",
        "_blank"
      );
    } else if (id == 5) {
      window.open(
        "https://www.figma.com/proto/YNWzCKCD1C7ePGi3yNLKCG/Case-Study-nutritionbylovneet?page-id=117%3A28&type=design&node-id=171-2842&viewport=3074%2C-284%2C0.26&t=RCHhXted5K24M1k9-1&scaling=contain&starting-point-node-id=171%3A2842",
        "_blank"
      );
    } else {
      navigate(`/project/${id}`);
    }
  }
  return (
    <>
      <div
        className={`box1 w-[47vw]  ${
          islg ? "large" : "small"
        } ${colorClass} p-0 m-0 group overflow-hidden z-10`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div
          className={`info flex flex-col items-center relative ${
            islg ? "top-[80.5%]" : "top-[32.5%]"
          } ${
            !islg && isHovered
              ? "group-hover:animate-heading-up"
              : "animate-heading-down"
          }`}
        >
          <h1
            className="text-[5.5vw] font-poppins font-bold min-w-[65%] max-w-[75%] text-center"
            style={{ color: "white" }}
          >
            {heading}
          </h1>
        </div>
        <div
          className={`info flex flex-col items-center relative top-[30%] ${
            !islg && isHovered
              ? "group-hover:animate-desc-down"
              : "animate-desc-up"
          }`}
        >
          <span
            className={`${
              islg ? "text-[2.4vw] px-5" : "text-[1.42vw]"
            } font-poppins font-light min-w-[65%]`}
            style={{ color: "white" }}
          >
            {desc}
          </span>
        </div>
        <div
          className={`w-[94%] m-auto ${
            islg && id != 5 ? "lg-btns" : "sm-btns"
          } ${id == 5 ? "custom-btns  " : ""} flex justify-between
          

          ${
            !islg
              ? isHovered
                ? "group-hover:animate-btn-down"
                : "animate-btn-up"
              : id != 5
              ? isHovered
                ? "group-hover:animate-lg-btn-down"
                : "animate-lg-btn-up"
              : isHovered
              ? "group-hover:animate-cus-lg-btn-down"
              : "animate-cus-lg-btn-up"
          } 
          
          `}
        >
          <div
            className="px-4 py-3 font-montserrat"
            style={{
              background: "rgba(43, 43, 43, 0.48)",
              color: "white",
              fontWeight: "400",
              letterSpacing: "4px",
              borderRadius: "8px",
            }}
          >
            {btn1}
          </div>
          <div
            className="px-4 py-3 font-montserrat"
            style={{
              background: "rgba(43, 43, 43, 0.48)",
              color: "white",
              fontWeight: "400",
              letterSpacing: "4px",
              borderRadius: "8px",
            }}
          >
            {btn2}
          </div>
        </div>
        <div
          className={`img-wrappper ${imgSmall ? "w-[35%]" : "w-[90%]"} ${
            imgSmall ? "h-[77%]" : "h-[77%]"
          } relative top-[100%] m-auto ${
            !islg && isHovered
              ? "group-hover:animate-slide-up"
              : "animate-slide-down"
          }`}
        >
          <img className="w-[100%] h-[100%]" src={imgSrc} alt="" />
        </div>
      </div>
      {/* <div className='max-h-[5vh] max-w-[800px]' style={{background : "black", color:"white"}}>
          <h2 className='font-united'>PAST PLAYFULL PORTFOLIO</h2>
          <p>My previously designed portfoliowith some cool interactions</p>
        </div> */}
    </>
  );
};
export default Card;
