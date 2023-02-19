import { useMediaQuery } from "react-responsive";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import { ProjectsMobileView } from "./components/ProjectsMobileView";
import { ProjectsDesktopView } from "./components/ProjectsDesktopView";

function App() {
  const isBigScreen = useMediaQuery({
    query: "(min-width: 900px)",
  });

  return (
    <div className="max-w-screen-lg px-4 mx-auto md:px-8 lg:px-16 2xl:max-w-screen-xl">
      <Navbar />
      <LandingPage />
      {isBigScreen ? <ProjectsDesktopView /> : <ProjectsMobileView />}
    </div>
  );
}

export default App;
