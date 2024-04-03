import React, { useContext, useEffect } from "react";
import StationsCard from "../../../common/components/StationsCard";
import { StationContext } from "../../../context/stationsContext";
import { sendRequest } from "../../../tools/request/request";
import { UserContext } from "../../../context/userContext";

const Recommendations = () => {
  const { stations } = useContext(StationContext);
  const { user } = useContext(UserContext);

  const checkRecommendations = (loc) => {
    const stationCountry = loc.split(",")[0];
    const userCountry = user.location.split(",")[0];

    if (stationCountry.startsWith(userCountry)) return true;
  };

  return (
    <section
      id="recommended-stations"
      className="flex column p recomendations-section gap cairo-text"
    >
      <h2>Nearest Stations to you</h2>
      <div className="stations-container flex column gap w-full">
        {user
          ? stations.map(
              (station, i) =>
                checkRecommendations(station.location) &&
                i <= 3 && <StationsCard station={station} key={i} />
            )
          : stations.map(
              (station, i) =>
                i <= 3 && <StationsCard station={station} key={i} />
            )}
      </div>
    </section>
  );
};

export default Recommendations;
