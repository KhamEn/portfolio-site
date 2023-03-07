import { Navbar } from "./components/navbar/Navbar";
import { LandingPage } from "./components/LandingPage";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div id="home" className="mx-auto max-w-screen-xl px-fluid-s-xl">
      <Navbar />
      <div className="my-fluid-xl-3xl">
        <LandingPage />
      </div>
      <hr className="mx-auto my-fluid-xl-3xl w-2/3 border-dashed border-[#7e9496]" />
      <Projects />
      <hr className="my-fluid-xl-3xl mx-auto w-2/3 border-dashed border-[#7e9496]" />
      <Contact />
      <hr className="mx-auto mt-fluid-xl-3xl border-dashed border-[#7e9496]" />
      <Navbar />
    </div>
  );
}

export default App;
