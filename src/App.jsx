import { Navbar } from "./components/navbar/Navbar";
import { LandingPage } from "./components/LandingPage";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div>
      <div className="bg-dark-shade text-light-shade wavy-border-bottom">
        <div className="max-w-screen-xl mx-auto px-fluid-s-xl">
          <Navbar />
          <div className=" py-fluid-s-xl">
            <LandingPage />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-fluid-s-xl my-fluid-s-xl">
        <Projects />
      </div>
    </div>
  );
}

export default App;
