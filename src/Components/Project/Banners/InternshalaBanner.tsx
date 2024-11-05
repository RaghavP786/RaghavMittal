import Banner1 from "../../../assets/P1/banner-1.png";
import Banner2 from "../../../assets/P1/banner-2.png";
import Banner3 from "../../../assets/P1/bannner-3.png";
const InternshalaBanner = () => {
  return (
    <>
      <div className="h-full flex flex-col justify-between gap-6">
        <div className="w-full h-[18%]">
          <img className="h-full w-full" src={Banner1} alt="" />
        </div>
        <div className="w-full h-[40%]">
          <img className="h-full w-full" src={Banner2} alt="" />
        </div>
        <div className="w-full h-[40%]">
          <img className="h-full w-full" src={Banner3} alt="" />
        </div>
      </div>
    </>
  );
};

export default InternshalaBanner;
