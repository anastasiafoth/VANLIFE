import { useState, useEffect } from "react";
import { useParams, NavLink, Link, Outlet } from "react-router-dom";
import { getHostVans } from "../../src/api";

export default function HostVanDetail() {
  const params = useParams();
  const [currentVan, setCurrentVan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(params);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans(params.id);
        setCurrentVan(data);
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

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="van-detail-container">
        {currentVan ? (
          <div className="host">
            <div className="header-info">
              <img src={currentVan.imageUrl} className="host-van-detail-img" />
              <div className="info">
                <p className={`van-type ${currentVan.type}`}>
                  {currentVan.type.charAt(0).toUpperCase() +
                    currentVan.type.slice(1)}
                </p>
                <h2>{currentVan.name}</h2>
                <p className="van-price">
                  <span>${currentVan.price}</span>/day
                </p>
              </div>
            </div>
            <nav>
              <div className="nav-links">
                <NavLink
                  to="."
                  end
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  Details
                </NavLink>
                <NavLink
                  to="pricing"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="photos"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  Photos
                </NavLink>
              </div>
            </nav>
            <Outlet context={{ currentVan }} />
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
