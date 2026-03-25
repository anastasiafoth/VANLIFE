import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { currentVan } = useOutletContext();

  return (
    <p className="host-van-price">
      <span>${currentVan.price.toFixed(2)}</span>/day
    </p>
  );
}
