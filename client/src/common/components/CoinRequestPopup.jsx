import React, { useState } from "react";

import { sendRequest } from "../../tools/request/request";
const CoinRequestPopup = ({ user, setOpen }) => {
  const [amount, setAmount] = useState(0);

  const handleSend = async () => {
    const reqBody = {
      user_id: user.id,
      amount: amount,
    };
    if (amount > 0) {
      const res = await sendRequest("POST", "/coin-requests", reqBody);
      const data = await res.data;
      console.log(data);
      setAmount(0);
    }
  };

  return (
    <div className="popup">
      <div className="popup-child bg-primary flex column align-center  gap">
        <h2>Request coins</h2>
        <input
          type="number"
          min={1}
          placeholder="amount"
          className="input"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button onClick={handleSend} className="bg-secondary btn-style">
          Send
        </button>
        <p className="exit cursor-pointer" onClick={() => setOpen(false)}>
          X
        </p>
      </div>
    </div>
  );
};

export default CoinRequestPopup;
