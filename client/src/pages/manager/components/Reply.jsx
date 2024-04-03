import React from "react";

const Reply = ({ message, setOpen }) => {
  return (
    <div className="popup">
      <div className="popup-child flex column gap bg-primary border-radius  ">
        <p className="exit cursor-pointer" onClick={() => setOpen(false)}>
          X
        </p>
        <div className="flex column small-gap">
          <h2>{message.sender}</h2>
          <p>{message.message}</p>
        </div>
        <div className="flex small-gap self-center w-full">
          <input type="text" className="input" />
          <button className="btn-style bg-secondary">send</button>
        </div>
      </div>
    </div>
  );
};

export default Reply;
