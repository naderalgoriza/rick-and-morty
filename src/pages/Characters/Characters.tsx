import { useQuery } from "@apollo/client";
import { FC } from "react";
import { Skeleton } from "antd";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Pagination from "../../components/Pagination/Pagination";
import { GET_CHARACTERS } from "../../gql/queries/characters";
import { GetCharactersModel } from "../../types/queryModels";

const Characters: FC = () => {
  const { loading, error, data, refetch } = useQuery<GetCharactersModel>(
    GET_CHARACTERS,
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
            height: "300px",
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
      <h1>All Characters</h1>

      <div className="cards-container">
        {!loading && !error
          ? data?.characters.results.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))
          : skeletons}
      </div>

      <div className="mt-20 text-center">
        <Pagination
          onPageChange={onPageChange}
          totalRecords={data?.characters.info.count}
        />
      </div>
    </div>
  );
};

export default Characters;
