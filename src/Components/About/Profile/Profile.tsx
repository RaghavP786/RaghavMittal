import profile from "../../../assets/Profie/profile-img.png";
import Footer from "../../Footer/Footer";
const Profile = () => {
  return (
    <>
      <div
        className="w-full h-full flex flex-col items-center"
        style={{ background: "black", color: "white" }}
      >
        <div className="mt-28 flex flex-col items-center">
          <h1 className="font-custom text-[2.5rem]">RAGHAV MITTAL</h1>
          <p
            className="font-montserrat text-[1.3rem]"
            style={{ letterSpacing: "7px", color: "#979797" }}
          >
            Born Taurus
          </p>
        </div>
        <div className="w-[80%] flex justify-between mx-14 pb-10 mt-10">
          <div className="w-[40%]">
            <img className="w-full h-full" src={profile} alt="" />
          </div>
          <div className="w-[55%] flex items-center">
            <div className="h-[90%] flex flex-col justify-between">
              <h1 className="font-custom text-[2.5rem]">HI AGAIN... !</h1>
              <p className="font-montserrat text-[1.3rem] font-normal">
                I am <strong>Raghav Mittal</strong>, a design enthusiast from
                Indian Institute of Technology, Roorkee (IN).{" "}
              </p>
              <p className="font-montserrat text-[1.3rem] font-normal">
                I started my design journey in 2021 with Adobe Illustrator and
                after some time got my hands on <strong>Figma</strong>, after
                which there was no going back.{" "}
              </p>
              <p className="font-montserrat text-[1.3rem] font-normal">
                When not designing, I am either exploring{" "}
                <strong>Mechanical Physics</strong> or ‘sneakers of the week’ on
                the Nike app. Yes, I am a big physics enthusiast, an even bigger
                sneakerhead and the biggest
                <strong>automobile</strong> enthusiast.
              </p>
              <p className="font-montserrat text-[1.3rem] font-normal">
                To know the{" "}
                <strong>“achievement, experience and academic”</strong> me,
                press the top right button whilst to connect, scroll down.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full mt-28 pb-5 ">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Profile;
