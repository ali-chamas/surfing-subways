import React from 'react'
import StationsInfo from "../../../common/components/StationsInfo";

const Info = () => {

  const stationInfo = [
    {
      id: 1,
      manager: "Ahmad",
      location: "Beirut,Lebanon",
      from: " 5am ",
      to: " 10pm ",
      facilitites: ["Restrooms", "Toilets", "Coffee shop"],
      rating: 3.5,
      serviceStatus: "Active",
    },
  ];

  return (
    <section className="flex row justify-between w-full cairo-text stationInfo-section">
      {stationInfo.map((stationInfo, i) => (
          <StationsInfo stationInfo={stationInfo} key={i} />
        ))}
    </section>
  )
}

export default Info
