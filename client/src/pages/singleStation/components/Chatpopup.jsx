import React from "react";

const Chatpopup = ({ setOpen, managerID }) => {
  return (
    <div className="popup">
      <div className="popup-child bg-primary p border-radius">
        <p className="exit cursor-pointer" onClick={() => setOpen(false)}>
          X
        </p>
      </div>
    </div>
  );
};

export default Chatpopup;
