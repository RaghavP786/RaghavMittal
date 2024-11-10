import Card from "../Card/Card";
import Footer from "../../Footer/Footer";
import img1 from "../../../assets/Project1.png";
import img2 from "../../../assets/Project2.png";
import img3 from "../../../assets/Project3.png";
import img4 from "../../../assets/Project4.png";
import img5 from "../../../assets/Project5.png";
import img6 from "../../../assets/Project6.png";
import CardDes from "../Card/CardDes";

const Landing = () => {
  return (
    <>
      <div
        className="main w-[100vw] h-[100vh] overflow-x-hidden"
        style={{ background: "black" }}
      >
        <div className="w-full h-full bg-[url('/src/assets/Frame.png')] bg-cover bg-center h-screen w-screen flex justify-center">
          <div className="content relative top-[45%] left-[1.5%] flex flex-col text-center gap-5 text-white ">
            <h1 className="z-10 text-border text-[4.45rem] font-custom text-gradient">
              I AM RAGHAV MITTAL
            </h1>
            <h1 className="relative top-[-7.7rem] left-[0.2rem] text-outline text-border text-[4.45rem] font-custom ">
              I AM RAGHAV MITTAL
            </h1>
            <span
              className="font-montserrat relative top-[-8rem] left-[-2rem] text-[1.8rem] "
              style={{ color: "white" }}
            >
              I've DIY-ed my way into being a Product Designer with a<br></br>
              soft spot for techy stuff! Now, I'm trying to "officially"{" "}
              <br></br>
              level up at IIT Roorkee.
            </span>
          </div>
        </div>
        <div className="relative top-[-190px] bg-transparent-to-black w-full h-[200px] bg-black"></div>
        <div
          className="relative top-[-190px] h-[15rem] w-full text-white font-united flex flex-col gap-5 items-center justify-center"
          style={{ background: "black", color: "white" }}
        >
          <h2 className="font-custom text-[3rem]">Featured Work</h2>
          <span
            className="text-[1.4rem] font-montserrat"
            style={{ color: "#979797" }}
          >
            With unwavering commitment, I diligently managed these projects and
            gained knowledge that help me grow more in my work.
          </span>
          <div
            className="h-[1px] w-[80px] "
            style={{ background: "white" }}
          ></div>
        </div>

        <div
          className=" relative top-[-190px] w-full flex justify-center items-center"
          style={{ background: "black" }}
        >
          <div className="grid grid-cols-2 gap-4 w-full max-w-[97%]">
            <div className="flex flex-col">
              <div>
                <Card
                  id={0}
                  height={"77.5vh"}
                  colorClass={"box1"}
                  imgSrc={img1}
                  heading={"INTERNSHALA"}
                  desc={
                    "Android app linking students to internships and training"
                  }
                  imgSmall={true}
                  btn1={"LIVE-PROJECT"}
                  btn2={"INTERNSHIP"}
                  islg={false}
                />
                <CardDes
                  heading="INTERNSHALA"
                  description="One step solution for internship and job finding."
                />
              </div>
              <div>
                <Card
                  id={4}
                  height={"77.5vh"}
                  colorClass={"box3"}
                  imgSrc={img3}
                  heading={"CALENSYNC"}
                  desc={"SOLUTION FOR EFFICIENT TIME MANAGEMENT"}
                  imgSmall={false}
                  btn1={"CASE-STUDY"}
                  btn2={"SELF-INITIATED"}
                  islg={false}
                />
                <CardDes
                  heading="CALENSYNC"
                  description="One step calendar solution for time management."
                />
              </div>

              <div>
                <Card
                  id={1}
                  height={"77.5vh"}
                  colorClass={"box2"}
                  imgSrc={img2}
                  heading={"PEARMOCK"}
                  desc={"Community platform for aspiring product managers"}
                  imgSmall={false}
                  btn1={"LIVE-PROJECT"}
                  btn2={"INTERNSHIP"}
                  islg={false}
                />
                <CardDes
                  heading="PEARMOCK"
                  description="One step solution for product managers to excel."
                />
              </div>

              <div>
                <Card
                  id={2}
                  height={"77.5vh"}
                  colorClass={"box4"}
                  imgSrc={img4}
                  heading={"VANCE"}
                  desc={"LANDING PAGE FOR VANCE’S UPCOMING FEATURE"}
                  imgSmall={false}
                  btn1={"CASE-STUDY"}
                  btn2={"SELF-INITIATED"}
                  islg={false}
                />
                <CardDes
                  heading="VANCE"
                  description="One step solution for NRI banking."
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div style={{ height: "auto" }}>
                <Card
                  id={3}
                  height={"164.95vh"}
                  colorClass={"box1-right"}
                  imgSrc={img5}
                  heading={"HOMEHIVE"}
                  desc={"Streamline. Simplify. Rent"}
                  imgSmall={false}
                  btn1={"CASE-STUDY"}
                  btn2={"SELF-INITIATED"}
                  islg={true}
                />
                <CardDes
                  heading="HOMEHIVE"
                  description="One step solution for rental property management."
                />
              </div>

              <div>
                <Card
                  id={5}
                  height={"164.95vh"}
                  colorClass={"box2-right"}
                  imgSrc={img6}
                  heading={"NUTRITION BY LOVNEET"}
                  desc={""}
                  imgSmall={false}
                  btn1={"LIVE-PROJECT"}
                  btn2={"FREE-LANCE"}
                  islg={true}
                />
                <CardDes
                  heading="Nutrition.by.Lovneet"
                  description="One step solution for all health conscious people."
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Landing;
