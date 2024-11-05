import { useState } from "react";
import Nabbar from "../NabBar/Nabbar";
import NabbarPage from "../NabBar/NabbarPage";
import Profile from "./Profile/Profile";

const About = () => {
  const [clicked, setClicked] = useState(false);
  function handleClick(): void {
    setClicked((clicked: boolean) => !clicked);
  }
  return (
    <div
      className="main w-[100vw] h-[100vh] overflow-x-hidden"
      style={{ background: "black" }}
    >
      <Nabbar handleClick={handleClick} clicked={clicked} />
      {clicked ? <NabbarPage /> : <Profile />}
    </div>
  );
};

export default About;
