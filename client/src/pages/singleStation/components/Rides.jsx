import React from 'react'
import StationsRide from "../../../common/components/StationsRide";

const Rides = () => {

  const stationRide = [
    {
      id: 1,
      departureStation: "Aazmi Station",
      arrivalStation: "EL Hilal Station",
      departureTime: " 5am ",
      arrivalTime: " 10pm ",
      rating: 2.5,
    },
    {
      id: 2,
      departureStation: "Aazmi Station",
      arrivalStation: "EL Hilal Station",
      departureTime: " 5am ",
      arrivalTime: " 10pm ",
      rating: 2.5,
    },
    {
      id: 3,
      departureStation: "Aazmi Station",
      arrivalStation: "EL Hilal Station",
      departureTime: " 5am ",
      arrivalTime: " 10pm ",
      rating: 2.5,
    },
    {
      id: 4,
      departureStation: "Aazmi Station",
      arrivalStation: "EL Hilal Station",
      departureTime: " 5am ",
      arrivalTime: " 10pm ",
      rating: 2.5,
    },
    {
      id: 5,
      departureStation: "Aazmi Station",
      arrivalStation: "EL Hilal Station",
      departureTime: " 5am ",
      arrivalTime: " 10pm ",
      rating: 2.5,
    },
  ];

  return (
    <section className="flex column justify-between cairo-text stationRide-section gap">
        {stationRide.map((stationRide, i) => (
          <StationsRide stationRide={stationRide} key={i} />
        ))}
      
    </section>
  )
}

export default Rides
