import React, { useContext, useState } from "react";
import { UserContext } from "../../../context/userContext";
import { sendRequest } from "../../../tools/request/request";

const Reply = ({ message, setOpen, identifyUserName }) => {
  const { user } = useContext(UserContext);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = async () => {
    const reqBody = {
      message: inputMessage,
      sender: user.id,
      receiver: message.sender,
    };
    try {
      const res = await sendRequest("POST", "/chats", reqBody);
      console.log(res);

      setInputMessage("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="popup">
      <div className="popup-child flex column gap bg-primary border-radius  ">
        <p className="exit cursor-pointer" onClick={() => setOpen(false)}>
          X
        </p>
        <div className="flex column small-gap">
          <h2>{identifyUserName(message.sender)}</h2>
          <p>{message.message}</p>
        </div>
        <div className="flex small-gap self-center w-full">
          <input
            type="text"
            className="input"
            onChange={(e) => setInputMessage(e.target.value)}
            value={inputMessage}
          />
          <button className="btn-style bg-secondary" onClick={sendMessage}>
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reply;
