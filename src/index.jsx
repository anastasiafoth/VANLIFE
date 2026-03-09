import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";

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

function Home() {
  return (
    <>
      <div className="main-content">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>

        <button className="btn-orange">Find your van</button>
      </div>

      <footer>Ⓒ 2026 #VANLIFE</footer>
    </>
  );
}

function About() {
  return (
    <>
      <div className="main-content">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>

        <h3>Your destination is waiting. Your van is ready.</h3>

        <button className="btn-black">Explore our vans</button>
      </div>
      <footer>Ⓒ 2026 #VANLIFE</footer>
    </>
  );
}

function Vans() {
  return <h1>vans</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
