import { Link } from "react-router-dom";
import { useNavbar } from "../../../context/NavbarContext";
const VerticalNabbar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { handleClick } = useNavbar();
  return (
    <>
      <div
        className="cursor-pointer	w-[5.6%] h-full flex flex-col justify-between p-4"
        style={{
          background:
            "linear-gradient(112.83deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 110.84%)",
          borderRadius: "12px",
        }}
      >
        {/* circle button */}
        <div
          className=" rounded-full aspect-square text-[2rem] font-bold text-center"
          style={{ background: "rgba(255, 255, 255, 0.64)" }}
          onClick={() => handleClick()}
        ></div>
        <Link
          className="cursor-pointer transform -rotate-90 mb-1 font-custom text-[2.9rem] opacity-[64%]"
          style={{ color: "rgba(255, 255, 255, 1)" }}
          to="/"
        >
          HOME
        </Link>
      </div>
    </>
  );
};

export default VerticalNabbar;
