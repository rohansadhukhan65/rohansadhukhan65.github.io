import { BrowserRouter, Routes, Route } from "react-router";
import { Suspense, lazy, useState, useEffect } from "react";
import PublicLayout from "./Layout/PublicLayout.tsx";
import LoadingScreen from "./components/common/LoadingScreen.tsx";

const Home = lazy(() => import("./pages/Home.tsx"));
const About = lazy(() => import("./pages/About.tsx"));
const Projects = lazy(() => import("./pages/Projects.tsx"));
const WorkExperience = lazy(() => import("./pages/WrokExperience.tsx"));

const Router: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Minimum loading time of 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        {loading ? (
          <LoadingScreen />
        ) : (
          <Routes>
            <Route path="/" element={<PublicLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="work-experience" element={<WorkExperience />} />
            </Route>
          </Routes>
        )}
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
