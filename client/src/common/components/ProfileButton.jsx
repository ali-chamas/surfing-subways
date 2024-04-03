import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router-dom";
import "../styles/profile.css";
import { TbCoinFilled } from "react-icons/tb";
import CoinRequestPopup from "./CoinRequestPopup";
import { sendRequest } from "../../tools/request/request";
import axios from "axios";
const ProfileButton = () => {
  const { logout, user, token } = useContext(UserContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openCoins, setOpenCoins] = useState(false);
  const handleLogout = async () => {
    const res = await axios({
      method: "POST",
      url: "http://localhost:8000/api/logout",
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(res);
    logout();
    navigate("/login");
  };
  return (
    <>
      {openCoins && <CoinRequestPopup user={user} setOpen={setOpenCoins} />}
      <div className="profile-btn">
        <img src={user.profile_url} alt="" onClick={() => setOpen((o) => !o)} />

        {open && (
          <div className="profile-drop p flex column align-center gap bg-blur ">
            <div className="bg-default small-p align-center border-radius flex small-gap">
              <b className="bg-secondary text-black border-radius flex align-center small-p small-gap">
                {user.coins} <TbCoinFilled />
              </b>
              <span
                className="cursor-pointer"
                onClick={() => setOpenCoins((o) => !o)}
              >
                +
              </span>
            </div>
            <button
              className="bg-danger text-white btn-style"
              onClick={() => logout()}
            >
              logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileButton;
