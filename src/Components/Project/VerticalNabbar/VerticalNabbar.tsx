const VerticalNabbar = () => {
  return (
    <>
      <div
        className="w-[5.6%] h-full flex flex-col justify-between p-4"
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
        ></div>
        <div
          className="transform -rotate-90 mb-1 font-custom text-[2.9rem] opacity-[64%]"
          style={{ color: "rgba(255, 255, 255, 1)" }}
        >
          HOME
        </div>
      </div>
    </>
  );
};

export default VerticalNabbar;
