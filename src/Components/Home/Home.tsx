import Landing from "./Landing/Landing";
import Nabbar from "../NabBar/Nabbar";
import NabbarPage from "../NabBar/NabbarPage";
import { useNavbar } from "../../context/NavbarContext";
const Home = () => {
  const { clicked } = useNavbar();

  return (
    <>
      <Nabbar />
      {clicked ? <NabbarPage /> : <Landing />}
    </>
  );
};

export default Home;
