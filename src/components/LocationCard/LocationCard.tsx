import { FC, PropsWithChildren } from "react";
import { TLocation } from "../../types/location";

interface ILocationCardProps {
  location: TLocation;
}

const LocationCard: FC<PropsWithChildren<ILocationCardProps>> = ({
  location,
}) => {
  return (
    <div>
      <div>Name: {location.name}</div>
      <div>Type: {location.type}</div>
      <div>Dimension: {location.dimension}</div>
    </div>
  );
};

export default LocationCard;
