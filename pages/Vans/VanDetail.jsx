import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function VanDetail() {
    const params = useParams()
    const [van, setVan] = useState(null);
    
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
          .then((res) => res.json())
          .then((data) => setVan(data.vans));
    }, [params.id]);

    return (
      <div className="van-detail-container">
        {van ? (
          <div className="van-detail">
            <img src={van.imageUrl} />
            <p className={`van-type ${van.type}`}>
              {van.type.charAt(0).toUpperCase() + van.type.slice(1)}
            </p>
            <h2>{van.name}</h2>
            <p className="van-price">
              <span>${van.price}</span>/day
            </p>
            <p>{van.description}</p>
            <Link className="link-button-rent" to="/">
              Rent this van
            </Link>
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    );
}
