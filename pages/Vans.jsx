import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  return (
    <div className="text--dark">
      <h1>Explore our van options</h1>
      <div className="filter">
        <ul>
          <li className="van-type">
            <Link to="/vans/simple">Simple</Link>
          </li>
          <li className="van-type">
            <Link to="/vans/luxury">Luxury</Link>
          </li>
          <li className="van-type">
            <Link to="/vans/rugged">Rugged</Link>
          </li>
        </ul>
        <Link to="/vans" className="clean-link">
          Clear filters
        </Link>
      </div>
      <div className="cards">
        {vans.map((van) => (
          <div className="card">
            <Link key={van.id} to={`/vans/${van.id}`} className="van-card">
              <img src={van.imageUrl} alt={`van: ${van.name}`} />
              <div className="van-info-price">
                <div className="van-info">
                  <h3>{van.name}</h3>
                  <p className={`van-type ${van.type}`}>
                    {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
                  </p>
                </div>
                <div className="day-price">
                  <h3>${van.price}</h3>
                  <p>/day</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <footer>Ⓒ 2026 #VANLIFE</footer>
    </div>
  );
}
