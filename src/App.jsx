import { useRef } from "react";

import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div ref={homeRef} className="mx-auto max-w-screen-xl px-fluid-s-xl">
      <Navbar
        homeRef={homeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <div className="my-fluid-xl-3xl">
        <LandingPage />
      </div>
      <hr className="mx-auto my-fluid-xl-3xl w-2/3 border-dashed border-[#7e9496]" />
      <Projects ref={projectsRef} />
      <hr className="my-fluid-xl-3xl mx-auto w-2/3 border-dashed border-[#7e9496]" />
      <Contact ref={contactRef} />
      <hr className="mx-auto mt-fluid-xl-3xl border-[#7e9496]" />
      <Navbar
        homeRef={homeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
    </div>
  );
}

export default App;
