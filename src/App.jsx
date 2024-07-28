import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/root";
import Resume from "./routes/resume";
import Projects from "./routes/projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element= {<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
