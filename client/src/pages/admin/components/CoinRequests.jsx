import React, { useState, useEffect } from "react";
import DashboardTable from "../../../common/components/DashboardTable";
import axios from "axios";

const CoinRequests = () => {
  const [requests, setRequests] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/coin-requests")
      .then((response) => {
        setRequests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching coin requests:", error);
      });

    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleAccept = (id) => {
    axios
      .post(`http://localhost:8000/api/coin-requests/${id}/process`, {
        status: "Accepted",
      })
      .then((response) => {
        axios
          .get("http://localhost:8000/api/coin-requests")
          .then((response) => {
            setRequests(response.data);
          })
          .catch((error) => {
            console.error("Error refreshing coin requests:", error);
          });
      })
      .catch((error) => {
        console.error("Error accepting coin request:", error);
      });
  };

  const handleReject = (id) => {
    axios
      .delete(`http://localhost:8000/api/coin-requests/${id}`)
      .then((response) => {
        console.log("Coin request rejected successfully");
        axios
          .get("http://localhost:8000/api/coin-requests")
          .then((response) => {
            setRequests(response.data);
          })
          .catch((error) => {
            console.error("Error refreshing coin requests:", error);
          });
      })
      .catch((error) => {
        console.error("Error rejecting coin request:", error);
      });
  };

  const myHeaders = ["ID", "Name", "Email", "Amount", "Action", "Action"];

  return (
    <div className="flex column align-center w-full">
      <div className="mg-table p gap flex column bg-black border-radius">
        <h2>Requests</h2>
        <DashboardTable
          headers={myHeaders}
          body={requests.map((request) => {
            const user = users.find((user) => user.id === request.user_id);
            return (
              <tr key={request.id}>
                <td>{request.id}</td>
                <td>{user ? user.username : "Unknown"}</td>
                <td>{user ? user.email : "Unknown"}</td>
                <td>{request.amount}</td>
                <td>
                  <button
                    className="btn-style bg-secondary text-white"
                    onClick={() => handleAccept(request.id)}
                  >
                    Accept
                  </button>
                </td>
                <td>
                  <button
                    className="btn-style bg-danger text-white"
                    onClick={() => handleReject(request.id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            );
          })}
        />
      </div>
    </div>
  );
};

export default CoinRequests;
