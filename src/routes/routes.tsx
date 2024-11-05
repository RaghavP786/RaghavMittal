import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import ProjectPage from "../Components/Project/ProjectPage";
import About from "../Components/About/About";
function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project/:id" element={<ProjectPage />} />
    </Routes>
  );
}

export default CustomRoutes;
