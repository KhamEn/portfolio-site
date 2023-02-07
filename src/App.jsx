import { Navbar } from "./components/Navbar";
import { LandingPage } from "./components/LandingPage";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="mx-4 mt-8">
        <LandingPage />
      </main>
    </div>
  );
}

export default App;
