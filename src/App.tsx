import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/navbar";
import { Home } from "./pages/home/home";
import "./App.css";
import { Resume } from "./pages/resume/resume";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
