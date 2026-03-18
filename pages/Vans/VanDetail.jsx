import { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getVans } from "../../src/api";

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = useState(null);
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans(params.id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [params.id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  const search = location.state?.search || "";
  const backButtonText = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {backButtonText} vans</span>
      </Link>

      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <p className={`van-type ${van.type} selected`}>
            {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
          </p>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <Link className="link-button" to="/">
            Rent this van
          </Link>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
