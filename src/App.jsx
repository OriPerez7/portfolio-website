import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/root";
import Projects from "./routes/projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element= {<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
