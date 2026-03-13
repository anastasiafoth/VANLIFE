import { useState, useEffect } from "react";
import { useParams, NavLink, Link } from "react-router-dom";

export default function HostVanDetail() {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

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
        {van ? (
          <div className="host">
            <div className="header-info">
              <img src={van.imageUrl} />
              <div className="info">
                <p className={`van-type ${van.type}`}>
                  {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
                </p>
                <h2>{van.name}</h2>
                <p className="van-price">
                  <span>${van.price}</span>/day
                </p>
              </div>
            </div>
            <nav>
              <div className="nav-links">
                <NavLink
                  to="/host"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  Details
                </NavLink>
                <NavLink
                  to="/host"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  Pricing
                </NavLink>
                <NavLink
                  to="/host"
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  Photos
                </NavLink>
              </div>
            </nav>
            <p>
              <span>Name: </span>
              {van.name}
            </p>
            <p>
              <span>Category: </span>
              {van.type}
            </p>
            <p>
              <span>Description:</span>
              {van.description}
            </p>
            <p>
              <span>Visibility: </span>Public
            </p>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
