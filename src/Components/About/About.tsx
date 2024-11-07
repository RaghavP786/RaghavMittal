import Nabbar from "../NabBar/Nabbar";
import NabbarPage from "../NabBar/NabbarPage";
import Profile from "./Profile/Profile";
import { useNavbar } from "../../context/NavbarContext";
const About = () => {
  const { clicked } = useNavbar();
  return (
    <div
      className="main w-[100vw] h-[100vh] overflow-x-hidden"
      style={{ background: "black" }}
    >
      <Nabbar />
      {clicked ? <NabbarPage /> : <Profile />}
    </div>
  );
};

export default About;
