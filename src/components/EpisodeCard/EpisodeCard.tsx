import { FC, PropsWithChildren } from "react";
import { TEpisode } from "../../types/episode";

interface IEpisodeCardProps {
  episode: TEpisode;
}

const EpisodeCard: FC<PropsWithChildren<IEpisodeCardProps>> = ({ episode }) => {
  return (
    <div>
      <div>{episode.name}</div>
      <div>{episode.episode}</div>
      <div>{episode.air_date}</div>
    </div>
  );
};

export default EpisodeCard;
