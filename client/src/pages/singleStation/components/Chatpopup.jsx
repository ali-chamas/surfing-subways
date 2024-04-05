import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext";
import { sendRequest } from "../../../tools/request/request";

const Chatpopup = ({ setOpen, managerID }) => {
  const { user } = useContext(UserContext);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    const reqBody = {
      message: inputMessage,
      sender: user.id,
      receiver: managerID,
    };
    try {
      const res = await sendRequest("POST", "/chats", reqBody);
      console.log(res);
      getChat();
      setInputMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const getChat = async () => {
    const res = await sendRequest("POST", "/getChat", { user_id: user.id });
    console.log(res);
    setMessages(res.data);
  };
  useEffect(() => {
    getChat();
  }, [messages.length]);
  return (
    <div className="popup">
      <div className="popup-child bg-primary p border-radius flex column gap ">
        <h2>Chat with stations'manager</h2>
        <div className="chat-container flex column gap">
          {messages.map((message, i) =>
            message.sender == user.id
              ? message.receiver == managerID && (
                  <p className="sender-message bg-secondary p border-radius">
                    {message.message}
                  </p>
                )
              : message.receiver == user.id &&
                message.sender == managerID && (
                  <p className="receiver-message bg-default p border-radius">
                    {message.message}
                  </p>
                )
          )}
        </div>
        <div className="flex small-gap">
          <input
            type="text"
            className="input w-full"
            placeholder="your message here..."
            onChange={(e) => setInputMessage(e.target.value)}
            value={inputMessage}
          />
          <button className="btn-style bg-secondary" onClick={sendMessage}>
            Send
          </button>
        </div>
        <p className="exit cursor-pointer" onClick={() => setOpen(false)}>
          X
        </p>
      </div>
    </div>
  );
};

export default Chatpopup;
