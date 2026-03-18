import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../src/api";

export default function HostVans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
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

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <div className="text--dark">
      <h1>Your listed vans</h1>
      <div className="cards">
        {vans.length > 0 ? hostVansElements : <h2>Loading...</h2>}
      </div>
    </div>
  );
}
