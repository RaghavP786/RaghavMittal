import Landing from "./Landing/Landing";
import Nabbar from "../NabBar/Nabbar";
import NabbarPage from "../NabBar/NabbarPage";
import { useState } from "react";
const Home = () => {
  const [clicked, setClicked] = useState(false);
  function handleClick(): void {
    setClicked((clicked: boolean) => !clicked);
  }
  return (
    <>
      <Nabbar handleClick={handleClick} clicked={clicked} />
      {clicked ? <NabbarPage /> : <Landing />}
    </>
  );
};

export default Home;
