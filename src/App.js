import "./App.css";
import Home from "./components/sections/home";
import About from "./components/sections/about";
import Project from "./components/sections/projects";
import Experience from "./components/sections/experience";
import Footer from "./components/sections/footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Project />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
