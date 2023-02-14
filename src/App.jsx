import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="max-w-screen-xl mx-4 xl:mx-auto">
      <Navbar />
      <LandingPage />
      <Projects />
    </div>
  );
}

export default App;
