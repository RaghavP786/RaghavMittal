import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin (1).png";
import dribble from "../../assets/dribbble.png";
const Footer = () => {
  return (
    <>
      <div
        className="relative  top-[-16%] w-full"
        style={{
          border: "0.8px solid rgba(255, 255, 255, 1)",
        }}
      ></div>
      <div
        className="relative top-[-7%]  h-[9rem]  w-full flex flex-col items-center gap-3 footer-bottom"
        style={{ background: "black", color: "white" }}
      >
        <h1
          className="w-[80%] footer-text text-[2.37rem] font-custom"
          style={{
            margin: "0 auto",
            whiteSpace: "nowrap",
            textAlign: "justify",
          }}
        >
          Connect: Work, Advice, Coffee, Sneaker Talks.
        </h1>
        <p className="font-montserrat font-light text-[1.6rem]">get in touch</p>
      </div>
      <div
        className="relative top-[-3%] flex justify-center"
        style={{ background: "black" }}
      >
        <div className="w-[23%] max-h-[10%] mt-5 flex justify-between items-center">
          <a className="max-h-[100%]">
            <img className="max-h-[100%]" src={dribble} alt="" />
          </a>
          <a className="max-h-[100%]">
            <img className="max-h-[100%]" src={linkedin} alt="" />
          </a>
          <a className="h-[100%]">
            <img className="max-h-[100%]" src={instagram} alt="" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;