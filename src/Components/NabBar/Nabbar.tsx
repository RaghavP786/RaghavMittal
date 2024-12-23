import { XMarkIcon } from "@heroicons/react/16/solid";
import { useNavbar } from "../../context/NavbarContext";

const Nabbar = () => {
  const { clicked, handleClick } = useNavbar();

  return (
    <div
      className="bg-black bg-opacity-30 fixed top-[2%] mx-auto z-10"
      style={{ minWidth: "100%", height: "7%", color: "white" }}
      onClick={() => handleClick()}
    >
      <div className="h-full flex gap-7 justify-between items-center">
        <h1 className="cursor-pointer	font-custom text-[2.3rem] ml-10 h-full aspect-square text-center">
          {clicked ? "RAGHAV" : "RM"}
        </h1>
        <div
          className=" cursor-pointer mr-11 h-full rounded-full aspect-square text-[2rem] font-bold text-center"
          style={{ background: "white", color: "black" }}
        >
          {clicked ? <XMarkIcon /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Nabbar;
