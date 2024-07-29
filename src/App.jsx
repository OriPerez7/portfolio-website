import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/root";
import About from "./routes/about";
import Projects from "./routes/projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element= {<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
