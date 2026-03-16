import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { van } = useOutletContext();

  return (
    <p className="host-van-price">
      <span>${van.price.toFixed(2)}</span>/day
    </p>
  );
}
