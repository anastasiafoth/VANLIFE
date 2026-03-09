import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <img src="/image 54.png"></img>
      <div className="main-content text--dark">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>

        <div className="block">
          <h2>Your destination is waiting. Your van is ready.</h2>

          <Link className="link-button" to="/vans">
            Explore our vans
          </Link>
        </div>
      </div>
      <footer>Ⓒ 2026 #VANLIFE</footer>
    </>
  );
}
