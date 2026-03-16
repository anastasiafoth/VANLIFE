import { useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [vans, setVans] = useState([]);

  const typeFilter = searchParams.get("type");

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  return (
    <div className="text--dark">
      <h1>Explore our van options</h1>
      <div className="filter">
        <ul>
          <li className="van-type">
            <Link to="?type=simple">Simple</Link>
          </li>
          <li className="van-type">
            <Link to="?type=luxury">Luxury</Link>
          </li>
          <li className="van-type">
            <Link to="?type=rugged">Rugged</Link>
          </li>
        </ul>
        <Link to="." className="clean-link">
          Clear filters
        </Link>
      </div>
      <div className="cards">
        {displayedVans.map((van) => (
          <div key={van.id} className="card">
            <Link to={`/vans/${van.id}`} className="van-card">
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
    </div>
  );
}
