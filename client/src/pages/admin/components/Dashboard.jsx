import React, { useContext } from "react";
import DashboardTable from "../../../common/components/DashboardTable";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
<<<<<<< HEAD

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const myHeaders = ["ID", "Name", "Email", "Location", "Action"];

=======
import { StationContext } from "../../../context/stationsContext";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const { stations } = useContext(StationContext);
  const [revenue, setRevenue] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleBanUser = (id) => {
    axios
      .delete(`http://localhost:8000/api/users/${id}`)
      .then((response) => {
        console.log(response.data.message);
        setUsers(users.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const getTotalRevenue = () => {
    let count = 0;
    stations.map((s) => {
      count += s.revenue;
    });
    setRevenue(count);
  };

  useEffect(() => {
    getTotalRevenue();
  }, [stations.length]);
  const myHeaders = ["ID", "Name", "Email", "Location", "Action"];

>>>>>>> 3bf0e61a0d8b22c67665c2772add7dd6c3214aa5
  return (
    <div className="flex column align-center w-full">
      <div className="flex justify-evenly statistics-cards">
        <div className="statistics-card bg-black border-radius">
          <h2 className="letter-spacing text-primary">Revenue</h2>
          <div className="flex center small-gap statistics-card-child">
            <i className="icon-money"></i>
<<<<<<< HEAD
            <h3 className=" letter-spacing">300,000</h3>
=======
            <h3 className=" letter-spacing">{revenue}</h3>
>>>>>>> 3bf0e61a0d8b22c67665c2772add7dd6c3214aa5
          </div>
        </div>
        <div className="statistics-card bg-black border-radius">
          <h2 className="letter-spacing text-primary">Users</h2>
          <div className="flex center small-gap statistics-card-child">
            <i className="icon-users"></i>
<<<<<<< HEAD
            <h3 className=" letter-spacing">20,000</h3>
          </div>
        </div>
        <div className="statistics-card bg-black border-radius">
          <h2 className="letter-spacing text-primary">Rides</h2>
          <div className="flex center small-gap statistics-card-child">
            <i className="icon-rides"></i>
            <h3 className=" letter-spacing">50,000</h3>
=======
            <h3 className=" letter-spacing">{users && users.length}</h3>
          </div>
        </div>
        <div className="statistics-card bg-black border-radius">
          <h2 className="letter-spacing text-primary">stations</h2>
          <div className="flex center small-gap statistics-card-child">
            <i className="icon-rides"></i>
            <h3 className=" letter-spacing">{stations && stations.length}</h3>
>>>>>>> 3bf0e61a0d8b22c67665c2772add7dd6c3214aa5
          </div>
        </div>
      </div>

      <div className="mg-table p gap flex column bg-black border-radius">
        <h2>Users</h2>
        <DashboardTable
          headers={myHeaders}
          body={users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.location}</td>
              <td>
<<<<<<< HEAD
                <button className="btn-style bg-danger text-white">
=======
                <button
                  className="btn-style bg-danger text-white"
                  onClick={() => handleBanUser(user.id)}
                >
>>>>>>> 3bf0e61a0d8b22c67665c2772add7dd6c3214aa5
                  Ban
                </button>
              </td>
            </tr>
          ))}
        />
      </div>
    </div>
  );
};

export default Dashboard;
