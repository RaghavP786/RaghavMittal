import { useEffect } from "react";
import data from "../../static/data.ts";
import { useParams, useNavigate } from "react-router-dom";

import InternshalaBanner from "./Banners/InternshalaBanner";
import PearMock from "./Banners/PearMock";
import Vance from "./Banners/Vance";
import Hive from "./Banners/Hive.js";
import VerticalNabbar from "./VerticalNabbar/VerticalNabbar.tsx";
import { useNavbar } from "../../context/NavbarContext.tsx";
import NabbarPage from "../NabBar/NabbarPage.tsx";
import Nabbar from "../NabBar/Nabbar.tsx";
const Project = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const index: number = Number(id);
  useEffect(() => {
    if (!id || isNaN(index) || index < 0 || index >= data.length) {
      // Navigate to the home page if ID is invalid
      console.log(id);
      // navigate("/", { replace: true });
      window.location.href = "/";
    }
  }, [id, index, navigate, data.length]);

  const content = data[index];

  return (
    <>
      <div
        className="main w-[100vw] h-[100vh] overflow-x-hidden flex justify-center items-center"
        style={{ background: "black", color: "white" }}
      >
        <div
          className="w-[94%] h-[87.5%] flex justify-between gap-[1.6%]"
          style={{ background: "black" }}
        >
          {/* nabbar */}
          <VerticalNabbar />
          {/* 2nd bar */}
          <div
            className="w-[23.4%] h-full flex justify-center"
            style={{
              background:
                "linear-gradient(180deg, #30353C -40.1%, #111315 100%)",
              borderRadius: "12px",
            }}
          >
            <div className="w-[79%] overflow-y-hidden mt-7">
              <img className="w-full h-full" src={content?.mainImg} alt="" />
            </div>
          </div>
          {/* 3rd container */}
          <div className="w-[68%] h-full">
            <div className="w-full h-full flex flex-col items-center justify-between">
              {/* top bar  */}
              <div
                className="w-[99%] h-[13.5%] flex px-4  flex justify-between overflow-hidden"
                style={{
                  background:
                    "linear-gradient(180deg, #111315 -40.1%, #30353C 100%)",
                  borderRadius: "12px",
                }}
              >
                {/* heading container */}
                <div className="w-[84%] h-full font-custom py-2 ">
                  <h1 className="text-[1.5rem]">{content.bar.heading}</h1>
                  <div
                    className="w-[80%] opacity-[50%] mt-1 mb-2"
                    style={{
                      border: "1px solid rgba(255, 255, 255, 1)",
                    }}
                  ></div>
                  <p className="text_label-1 text-[0.3rem]">
                    {content.bar.subHeading}
                  </p>
                </div>
                {/* 3bar     */}
                <div className="w-[15%]">
                  <div
                    className="relative ml-10 top-[-40px] w-[50%] h-[200%] flex justify-evenly"
                    style={{ transform: "rotate(30deg)" }}
                  >
                    <div
                      style={{
                        borderRight: `3.5px dashed ${content.lineColor}`,
                      }}
                    ></div>
                    <div
                      style={{
                        borderLeft: `3.5px dashed ${content.lineColor}`,
                      }}
                    ></div>
                    <div
                      style={{
                        borderLeft: `3.5px dashed ${content.lineColor}`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              {/* bottom bar */}
              <div
                className="w-[100%] h-[83.5%] flex justify-between"
                style={{
                  borderRadius: "12px",
                }}
              >
                <div className="w-[35.8%] h-full flex flex-col justify-between">
                  <div
                    className="w-full h-[73.8%] overflow-hidden"
                    style={{
                      borderRadius: "12px",
                      border: `${content.border}`,
                    }}
                  >
                    <img
                      className="h-full object-cover"
                      src={content.Img1}
                      alt=""
                    />
                  </div>
                  <div
                    className="w-full h-[23.3%] flex justify-between py-5 px-4"
                    style={{
                      borderRadius: "12px",
                      background:
                        "linear-gradient(180deg, #111315 -40.1%, #30353C 100%)",
                    }}
                  >
                    <h1 className="w-[50%] font-montserrat font-bold text-[1.8rem] leading-[42px]">
                      TARGET AUDIENCE
                    </h1>
                    <ul className="w-[35%] flex flex-col justify-evenly font-montserrat font-light text-[0.7rem] list-disc">
                      {content?.targetAudience?.map((data, idx) => (
                        <li key={idx}>{data}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div
                  className="w-[32.8%] h-full flex justify-center items-center "
                  style={{
                    background: "rgba(233, 233, 233, 1)",
                    color: "black",
                    borderRadius: "12px",
                  }}
                >
                  <div className="relative w-[90%] h-[90%]">
                    <div>
                      <h1 className="font-regular text-[1rem] subHeader_label">
                        PROBLEM STATAEMENT
                      </h1>
                      <div
                        className="text_label font-[300] mt-1"
                        dangerouslySetInnerHTML={{ __html: content.problem }}
                      />
                    </div>
                    <div>
                      <h1 className="font-regular text-[1rem] subHeader_label mt-1">
                        My Role
                      </h1>
                      <p className="text_label font-[300] mt-1">
                        {content.role}
                      </p>
                    </div>
                    <div>
                      <h1 className="font-regular text-[1rem] subHeader_label mt-1">
                        Design Process
                      </h1>
                      <ul className="list-disc text_label font-[300] mt-1 ml-3">
                        {content?.process?.map((content, idx) => (
                          <li className="" key={idx}>
                            {content}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div
                      className={`absolute bottom-[3%] w-full ${
                        content.Img2 === null ? "" : "h-[20%]"
                      }`}
                    >
                      {content.Img2 && (
                        <img
                          className="w-full h-full"
                          src={content.Img2}
                          alt=""
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div
                  className="w-[14.5%] h-full "
                  style={{ borderRadius: "12px" }}
                >
                  {id == "0" && <InternshalaBanner />}
                  {id == "1" && <PearMock />}
                  {id == "2" && <Vance />}
                  {id == "3" && <Hive />}
                </div>
                {/* this is dynamic section  */}
                <div
                  className="relative w-[11%] h-full"
                  style={{ borderRadius: "12px" }}
                >
                  <div
                    className="ml-[-0.1rem] mr-[0.2rem] absolute bottom-[0.7%] p-3 rounded-md text-[0.9rem] font-montserrat font-bold"
                    style={{
                      background: "#1E1E1E",
                      color: `${content.lineColor}`,
                    }}
                  >
                    view full design file
                  </div>
                  <img
                    className="w-full h-full object-cover"
                    src={content.Img3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProjectPage = () => {
  const { clicked } = useNavbar();
  return (
    <>
      {clicked ? (
        <>
          <Nabbar />
          <NabbarPage />
        </>
      ) : (
        <Project />
      )}
    </>
  );
};

export default ProjectPage;
