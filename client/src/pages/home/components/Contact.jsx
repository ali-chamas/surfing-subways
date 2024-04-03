import React, { useState } from "react";
import { sendRequest } from "../../../tools/request/request";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [stationName, setStationName] = useState("");
  const [content, setContent] = useState("");

  const resetForm = () => {
    setEmail("");
    setStationName("");
    setContent("");
  };
  const handleSend = async () => {
    const reqBody = {
      email: email,
      station_name: stationName,
      content: content,
    };
    try {
      const res = await sendRequest("POST", "/requestInvitation", reqBody);
      console.log(res);
      toast("message sent");
      resetForm();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="contact-section flex  p align-center" id="contact">
        <div className="flex justify-center">
          <div className="flex column  gap text-container">
            <h2>Become a partner</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              doloribus eveniet commodi soluta fugiat repellat ducimus nam
              provident? Placeat laborum perspiciatis eveniet ad at neque
              possimus omnis delectus sunt quibusdam.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-primary p border-radius flex column align-center justify-evenly contact-form">
            <h2>Contact us</h2>
            <form className="flex column gap w-full ">
              <input
                type="text"
                placeholder="email"
                className="input "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="station name"
                className="input"
                value={stationName}
                onChange={(e) => setStationName(e.target.value)}
              />
              <textarea
                placeholder="longitude,latitude,location..."
                className="input"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </form>
            <button
              className="btn-style bg-secondary text-black"
              onClick={handleSend}
            >
              Send
            </button>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contact;
