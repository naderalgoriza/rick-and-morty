import { useQuery } from "@apollo/client";
import { FC } from "react";
import { Skeleton } from "antd";
import EpisodeCard from "../../components/EpisodeCard/EpisodeCard";
import Pagination from "../../components/Pagination/Pagination";
import { GET_EPISODES } from "../../gql/queries/episodes";
import { GetEpisodesModel } from "../../types/queryModels";

const Episodes: FC = () => {
  const { loading, error, data, refetch } = useQuery<GetEpisodesModel>(
    GET_EPISODES,
    {
      variables: { page: 1 },
    }
  );

  const generateSkeletons = () => {
    const skeletons = [];
    for (let i = 0; i < 20; i++) {
      skeletons.push(
        <Skeleton.Button
          key={i}
          active={true}
          size={"large"}
          shape={"round"}
          block={true}
          style={{
            height: "100px",
            borderRadius: "6px",
          }}
        />
      );
    }

    return skeletons;
  };

  const skeletons = generateSkeletons();

  const onPageChange = (page: number, pageSize: number) => {
    refetch({ page });
  };

  return (
    <div>
      <h1>All Episodes</h1>

      <div className="cards-container">
        {!loading && !error
          ? data?.episodes.results.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))
          : skeletons}
      </div>

      <div className="mt-20 text-center">
        <Pagination
          onPageChange={onPageChange}
          totalRecords={data?.episodes.info.count}
        />
      </div>
    </div>
  );
};

export default Episodes;
