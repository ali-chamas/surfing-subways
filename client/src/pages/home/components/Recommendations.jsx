import React from "react";
import StationsCard from "../../../common/components/StationsCard";

const Recommendations = () => {
  const stations = [
    {
      id: 1,
      title: "station 1",
      image:
        "https://images.unsplash.com/photo-1556695736-d287caebc48e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 3.5,
      location: "Beirut,Lebanon",
      facilitites: ["restroom", "coffee shop"],
    },
    {
      id: 2,
      title: "station 2",
      image:
        "https://images.unsplash.com/photo-1553184257-604db3e574a8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4,
      location: "Beirut,Lebanon",
      facilitites: ["restroom", "coffee shop", "caffeteria"],
    },
  ];
  return (
    <section className="flex column p recomendations-section gap">
      <h2>Recommended stations</h2>
      <div className="stations-container flex column gap w-full">
        {stations.map((station, i) => (
          <StationsCard station={station} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Recommendations;
