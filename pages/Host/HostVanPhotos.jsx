import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();
  return (
    <div className="van-photos">
      <img
        src={currentVan.imageUrl}
        alt={`${currentVan.name} photo`}
        className="host-van-img"
      />
    </div>
  );
}
