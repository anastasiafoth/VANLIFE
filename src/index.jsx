import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Home from "../components/Home.jsx";
import About from "../components/About.jsx";
import Vans from "../components/Vans.jsx";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">#VANLIFE</Link>
        <div className="nav-links">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
