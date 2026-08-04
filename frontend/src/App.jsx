import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Landing/Hero";
import Features from "./components/Features";
import DashboardPreview from "./components/Dashboard/DashboardPreview";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <DashboardPreview />
      <Features />
    </div>
  );
}

export default App;