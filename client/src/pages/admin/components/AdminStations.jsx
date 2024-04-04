import DashboardTable from "../../../common/components/DashboardTable";
import React, { useState, useEffect } from "react";

const AdminStations = () => {
  const [stations, setStations] = useState([]);
  const [users, setUsers] = useState([]);
  const [newManagerData, setNewManagerData] = useState({
    username: "",
    email: "",
    password: "",
    location: "",
  });

  useEffect(() => {
    fetch("http://localhost:8000/api/stations")
      .then((response) => response.json())
      .then((data) => {
        setStations(data);
      })
      .catch((error) => {
        console.error("Error fetching stations data:", error);
      });

    fetch("http://localhost:8000/api/users?role_id=2")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users data:", error);
      });
  }, []);

  const deleteStation = (id) => {
    fetch(`http://localhost:8000/api/stations/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setStations(stations.filter((station) => station.id !== id));
        } else {
          throw new Error("Failed to delete station");
        }
      })
      .catch((error) => {
        console.error("Error deleting station:", error);
      });
  };

  const handleAddManager = () => {
  fetch("http://localhost:8000/api/registerManager", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newManagerData),
  })
    .then((response) => {
      if (response.ok) {
        setNewManagerData({
          username: "",
          email: "",
          password: "",
          location: "",
        });
        // alert("Manager added successfully!"); Add the notification
      } else {
        throw new Error("Failed to add manager");
      }
    })
    .catch((error) => {
      console.error("Error adding manager:", error);
      alert("Failed to add manager. Please try again.");
    });
};


  const myHeaders = ["ID", "Name", "Email", "Station", "action"];

  return (
    <div className="flex column align-center w-full">
      <div className="flex justify-evenly add-cards">
        <div className="flex column align-center gap add-card bg-black border-radius">
          <h2 className="letter-spacing text-primary">Add Manager</h2>

          <input
            type="text"
            placeholder="name"
            required
            value={newManagerData.username}
            onChange={(e) =>
              setNewManagerData({ ...newManagerData, username: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="email"
            required
            value={newManagerData.email}
            onChange={(e) =>
              setNewManagerData({ ...newManagerData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="password"
            required
            value={newManagerData.password}
            onChange={(e) =>
              setNewManagerData({ ...newManagerData, password: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="location"
            required
            value={newManagerData.location}
            onChange={(e) =>
              setNewManagerData({ ...newManagerData, location: e.target.value })
            }
          />
          <button
            className="flex center text-black bg-secondary bold"
            onClick={handleAddManager}
          >
            Add
          </button>
        </div>

        <div className="flex column align-center gap add-card bg-black border-radius">
          <h2 className="letter-spacing text-primary">Add Station</h2>

          <input type="text" placeholder="name" required />
          <div className="flex justify-around align-center add-card-child">
            <h4 className="text-primary">Coordinates:</h4>
            <input type="number" placeholder="longitude" required />
            <input type="number" placeholder="latitude" required />
          </div>
          <div className="flex justify-center align-center gap add-card-child">
            <input type="file" required />
            <div className="flex column small-gap ">
              <label htmlFor="" className="text-primary bold">
                Choose Manager
              </label>
              <select className="input"></select>
            </div>
          </div>

          <button className="flex center text-black bg-secondary bold">
            Add
          </button>
        </div>
      </div>

      <div className="mg-table p gap flex column bg-black border-radius">
        <h2>Stations/Managers</h2>
        <DashboardTable
          headers={myHeaders}
          body={stations.map((station) => {
            const user = users.find((user) => user.id === station.user_id);
            return (
              <tr>
                <td>{station.id}</td>
                <td>{user ? user.username : "N/A"}</td>
                <td>{user ? user.email : "N/A"}</td>
                <td>{station.name}</td>
                <td>
                  <button
                    className="btn-style bg-danger text-white"
                    onClick={() => deleteStation(station.id)}
                  >
                    Ban
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

export default AdminStations;
