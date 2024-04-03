import React, { useState } from "react";
import Reply from "./Reply";

const MyMessages = () => {
  const fake = [
    {
      id: 1,
      sender: "Ali Chamas",
      message:
        "Hello There I want to ask you ds dssa d sa d sad d sad d sd sd sa",
    },
    {
      id: 1,
      sender: "Ali Chamas",
      message: "Hello There I want to ask you",
    },
    {
      id: 1,
      sender: "Ali Chamas",
      message: "Hello There I want to ask you",
    },
    {
      id: 1,
      sender: "Ali Chamas",
      message: "Hello There I want to ask you",
    },
    {
      id: 1,
      sender: "Ali Chamas",
      message: "Hello There I want to ask you",
    },
  ];
  const [messages, setMessages] = useState(fake);
  const [openReply, setOpenReply] = useState();

  return (
    <div className="flex column gap w-full p">
      <h2>My Messages</h2>

      <div className="flex column gap w-full self-center  msg-container">
        {messages.map((m, i) => (
          <div className="flex justify-between  bg-primary align-center p border-radius">
            <div className="flex column small-gap">
              <p className="">
                New message from <b>{m.sender}</b>
              </p>
            </div>
            <button
              className="btn-style bg-secondary"
              onClick={() => setOpenReply(m)}
            >
              reply
            </button>
          </div>
        ))}
      </div>
      {openReply && <Reply message={openReply} setOpen={setOpenReply} />}
    </div>
  );
};

export default MyMessages;
