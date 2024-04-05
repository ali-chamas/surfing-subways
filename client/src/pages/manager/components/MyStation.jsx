import React, { useContext, useEffect, useState } from "react";

import { MdDelete } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { StationContext } from "../../../context/stationsContext";
import { UserContext } from "../../../context/userContext";
import { sendRequest } from "../../../tools/request/request";
import { ToastContainer, toast } from "react-toastify";
const MyStation = () => {
  const { stations } = useContext(StationContext);
  const { user } = useContext(UserContext);

  const [myStation, setMyStation] = useState({});

  const [name, setName] = useState("");
  const [allFacilities, setAllFacilities] = useState([]);
  const [img, setImg] = useState("");
  const [imgData, setImgData] = useState("");
  const [status, setStatus] = useState("");
  const [singleFacility, setSingleFacility] = useState("");
  const [isChanged, setIsChanged] = useState(false);

  const getFacilities = async (id) => {
    const res = await sendRequest("GET", `facilities/${id}`);
    console.log(res.data);
    setAllFacilities(res.data);
  };

  useEffect(() => {
    stations.map((sta) => {
      sta.user_id == user.id && setMyStation(sta);
    });
  }, [stations.length]);

  useEffect(() => {
    setImg(`http://127.0.0.1:8000/station_pictures//${myStation.image}`);

    setName(myStation.name);
    setStatus(myStation.status);
    getFacilities(myStation.id);
  }, [myStation]);

  const handleSetters = (setter, value) => {
    setter(value);
    setIsChanged(true);
  };

  const handleChangeImg = (e) => {
    const file = e.target.files[0];
    handleSetters(setImgData, file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImg(reader.result);
    };
  };

  const handleUpdate = async () => {
    const reqBody = new FormData();
    reqBody.append("name", name);
    reqBody.append("status", status);
    reqBody.append("image", imgData);

    reqBody.append("status", status);
    const res = await sendRequest("POST", `/stations/${myStation.id}`, reqBody);
    console.log(res);
    toast("updated succesfully!");
  };

  const handleAddFacility = async () => {
    const reqBody = new FormData();
    reqBody.append("name", singleFacility);
    reqBody.append("station_id", myStation.id);
    const res = await sendRequest("POST", `/facilities`, reqBody);
    console.log(res);
    getFacilities(myStation.id);
  };

  const deleteFacility = async (id) => {
    const res = await sendRequest("DELETE", `/facilities/${id}`);
    console.log(res);
    getFacilities(myStation.id);
  };

  return (
    <div className="flex column gap p w-full my-station">
      <ToastContainer />
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
              onClick={async () => {
                await handleAddFacility();
                setSingleFacility("");
              }}
            >
              Add
            </button>
          </div>
          <div className="flex small-gap">
            {allFacilities.length > 0 &&
              allFacilities.map((f, i) => (
                <div
                  key={i}
                  className="bg-primary p border-radius flex small-gap"
                >
                  <small>{f.name}</small>
                  <p
                    className="text-danger cursor-pointer"
                    onClick={() => {
                      deleteFacility(f.id);
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
            onChange={(e) => handleChangeImg(e)}
          />
        </div>
        <button
          disabled={!isChanged}
          type="button"
          className="bg-secondary btn-style save-btn"
          onClick={handleUpdate}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};
export default MyStation;
