import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "../styles/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((o) => !o);
    console.log(isOpen);
  };

  return (
    <nav className="flex w-full align-center justify-between navbar p bg-blur">
      <a href="/" className="large-font special-font">
        Surfing Subways
      </a>

      <div className={`flex gap align-center desktop-menu`}>
        <a href="/stations">Stations</a>

        <a href="/#contact">Contact</a>
        <a href="/login" className="btn-style bg-secondary text-black">
          Login
        </a>
      </div>

      {isOpen ? (
        <div
          className={`mobile-menu bg-blur column w-full align-center gap p `}
        >
          <a href="/stations">Stations</a>

          <a href="/contact">Contact</a>
          <a href="/login" className="btn-style bg-secondary text-black">
            Login
          </a>
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
