import React, { useContext, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "../styles/navbar.css";
import { UserContext } from "../../context/userContent";
import ProfileButton from "./ProfileButton";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { token } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen((o) => !o);
    console.log(isOpen);
  };

  return (
    <nav className="flex w-full align-center justify-between navbar  bg-blur">
      <p
        onClick={() => navigate("/")}
        className="large-font special-font cursor-pointer"
      >
        Surfing Subways
      </p>

      <div className={`flex  align-center desktop-menu`}>
        <p onClick={() => navigate("/stations")} className="cursor-pointer">
          Stations
        </p>

        {token ? (
          <ProfileButton />
        ) : (
          <p
            onClick={() => navigate("/login")}
            className="btn-style bg-secondary text-black "
          >
            Login
          </p>
        )}
      </div>

      {isOpen ? (
        <div
          className={`mobile-menu bg-blur column w-full align-center gap p `}
        >
          <p onClick={() => navigate("/stations")} className="cursor-pointer">
            Stations
          </p>

          {token ? (
            <ProfileButton />
          ) : (
            <p
              onClick={() => navigate("/login")}
              className="btn-style bg-secondary text-black"
            >
              Login
            </p>
          )}
        </div>
      ) : (
        ""
      )}

      <div
        className="mobile-menu-toggle large-font cursor-pointer"
        onClick={toggleMenu}
      >
        {isOpen ? "✖" : <RxHamburgerMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
