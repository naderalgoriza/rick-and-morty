import { useQuery } from "@apollo/client";
import { FC } from "react";
import { Skeleton } from "antd";
import LocationCard from "../../components/LocationCard/LocationCard";
import Pagination from "../../components/Pagination/Pagination";
import { GET_LOCATIONS } from "../../gql/queries/location";
import { GetLocationsModel } from "../../types/queryModels";

const Locations: FC = () => {
  const { loading, error, data, refetch } = useQuery<GetLocationsModel>(
    GET_LOCATIONS,
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
      <h1>All Locations</h1>

      <div className="cards-container">
        {!loading && !error
          ? data?.locations.results.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))
          : skeletons}
      </div>

      <div className="mt-20 text-center">
        <Pagination
          onPageChange={onPageChange}
          totalRecords={data?.locations.info.count}
        />
      </div>
    </div>
  );
};

export default Locations;
