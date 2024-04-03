import React, { useContext, useEffect } from "react";
import StationsCard from "../../../common/components/StationsCard";
import { StationContext } from "../../../context/stationsContext";
import { sendRequest } from "../../../tools/request/request";
import { UserContext } from "../../../context/userContext";

const Recommendations = () => {
  const { stations, setStations } = useContext(StationContext);
  const { user } = useContext(UserContext);
  const getStations = async () => {
    const res = await sendRequest("GET", "/stations");
    const data = await res.data;
    setStations(data);
  };

  useEffect(() => {
    getStations();
  }, []);

  const checkRecommendations = (loc) => {
    const stationCountry = loc.split(",")[0];
    const userCountry = user.location.split(",")[0];

    if (stationCountry == userCountry || stationCountry == userCountry)
      return true;
  };

  return (
    <section
      id="recommended-stations"
      className="flex column p recomendations-section gap cairo-text"
    >
      <h2>Nearest Stations to you</h2>
      <div className="stations-container flex column gap w-full">
        {stations.map(
          (station, i) =>
            checkRecommendations(station.location) && (
              <StationsCard station={station} key={i} />
            )
        )}
      </div>
    </section>
  );
};

export default Recommendations;
