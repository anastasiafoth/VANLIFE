import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVansElements = vans.map((van) => (
    <Link key={van.id} to={van.id} className="mini-card">
      <img src={van.imageUrl} alt={`van: ${van.name}`} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>${van.price}/day</p>
      </div>
    </Link>
  ));

  return (
    <div className="text--dark">
      <h1>Your listed vans</h1>
      <div className="cards">
        {vans.length > 0 ? (
          hostVansElements
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}
