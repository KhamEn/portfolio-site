import { Navbar } from "./components/navbar/Navbar";
import { LandingPage } from "./components/LandingPage";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto px-fluid-s-xl">
      <Navbar />

      <div className=" my-fluid-s-xl">
        <LandingPage />
      </div>

      <hr className="border-dashed" />

      <div className=" my-fluid-s-xl">
        <Projects />
      </div>
    </div>
  );
}

export default App;
