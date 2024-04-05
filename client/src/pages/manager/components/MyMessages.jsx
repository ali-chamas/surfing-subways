import React, { useContext, useEffect, useState } from "react";
import Reply from "./Reply";
import { sendRequest } from "../../../tools/request/request";
import { UserContext } from "../../../context/userContext";

const MyMessages = () => {
  const [messages, setMessages] = useState([]);
  const { user } = useContext(UserContext);
  const [openReply, setOpenReply] = useState();
  const [users, setUsers] = useState([]);

  const getChat = async () => {
    const res = await sendRequest("POST", "/getChat", { user_id: user.id });
    console.log(res);
    setMessages(res.data);
  };
  useEffect(() => {
    getChat();
  }, []);

  useEffect(() => {
    getUserNames();
  }, []);
  const getUserNames = async () => {
    const res = await sendRequest("GET", `/users`);
    console.log(res);
    setUsers(res.data);
  };

  const identifyUserName = (id) => {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id == id) {
        return users[i].username;
      }
    }
  };

  return (
    <div className="flex column gap w-full p">
      <h2>My Messages</h2>

      <div className="flex column gap w-full self-center  msg-container">
        {messages.map(
          (m, i) =>
            m.sender != user.id && (
              <div className="flex justify-between  bg-primary align-center p border-radius">
                <div className="flex column small-gap">
                  <p className="">
                    New message from <b>{identifyUserName(m.sender)}</b>
                  </p>
                </div>
                <button
                  className="btn-style bg-secondary"
                  onClick={() => setOpenReply(m)}
                >
                  reply
                </button>
              </div>
            )
        )}
      </div>
      {openReply && (
        <Reply
          identifyUserName={identifyUserName}
          message={openReply}
          setOpen={setOpenReply}
        />
      )}
    </div>
  );
};

export default MyMessages;
