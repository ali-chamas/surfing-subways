import React, { useState } from "react";
import { stations } from "../../home/components/Recommendations";
import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
const MyStation = () => {
  const myStation = stations[0];
  const { facilitites } = stations[0];

  const [name, setName] = useState(myStation.name);
  const [allFacilities, setAllFacilities] = useState(facilitites);
  const [img, setImg] = useState(myStation.image);
  const [status, setStatus] = useState(myStation.status);
  const [singleFacility, setSingleFacility] = useState("");
  const [isChanged, setIsChanged] = useState(false);

  const handleSetters = (setter, value) => {
    setter(value);
    setIsChanged(true);
  };

  return (
    <div className="flex column gap p w-full my-station">
      <h2>My Station</h2>

      <form className="flex column   gap">
        <div className="flex column small-gap w-full">
          <label>name</label>
          <input
            type="text"
            value={name}
            className="input "
            onChange={(e) => handleSetters(setName, e.target.value)}
          />
        </div>

        <div className="flex column small-gap w-full">
          <label>facilities</label>
          <div className="flex small-gap align-center">
            <input
              type="text"
              placeholder="facility name"
              className="input w-full"
              value={singleFacility}
              onChange={(e) => setSingleFacility(e.target.value)}
            />
            <button
              type="button"
              className="btn-style bg-secondary text-black"
              onClick={() => {
                allFacilities.push(singleFacility);
                handleSetters(setAllFacilities, allFacilities);
                setSingleFacility("");
              }}
            >
              Add
            </button>
          </div>
          <div className="flex small-gap">
            {allFacilities.map((f, i) => (
              <div
                key={i}
                className="bg-primary p border-radius flex small-gap"
              >
                <small>{f}</small>
                <p
                  className="text-danger cursor-pointer"
                  onClick={() => {
                    const filtered = allFacilities.filter((fac) => fac != f);
                    handleSetters(setAllFacilities, filtered);
                  }}
                >
                  <MdDelete />
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex column small-gap w-full">
          <label>status</label>
          <select
            className="input "
            value={status}
            onChange={(e) => handleSetters(setStatus, e.target.value)}
          >
            <option value="available">available</option>
            <option value="closed">closed</option>
          </select>
        </div>
        <div className="flex justify-between w-full align-center img-container">
          <img src={img} className="border-radius" alt="" />
          <label htmlFor="img" className="cursor-pointer">
            <FaPen />
          </label>
          <input
            type="file"
            id="img"
            className="hidden"
            onChange={(e) => handleSetters(setImg, e.target.files[0])}
          />
        </div>
        <button
          disabled={!isChanged}
          type="button"
          className="bg-secondary btn-style save-btn"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};
export default MyStation;
