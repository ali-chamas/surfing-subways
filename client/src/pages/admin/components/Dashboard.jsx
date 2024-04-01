import React from "react";
import DashboardTable from "../../../common/components/DashboardTable";

const Dashboard = () => {

  const users = [
    {
      id:1,
      name:'test',
      email:'test@gmail.com',
      location:'Beirut'
    },
    {
      id:2,
      name:'test',
      email:'test@gmail.com',
      location:'Beirut'
    },
    {
      id:3,
      name:'test',
      email:'test@gmail.com',
      location:'Beirut'
    },
    {
      id:4,
      name:'test',
      email:'test@gmail.com',
      location:'Beirut'
    },
  ]

  const myHeaders = [
    "ID",
    "Name",
    "Email",
    "Locaiton",
    "action",
  ];

  return <div className="flex column align-center w-full">
    
    <div className="flex justify-evenly statistics-cards">
      <div className="statistics-card bg-black border-radius">
        <h2 className="letter-spacing text-primary">Revenue</h2>
        <div className='flex center small-gap statistics-card-child'>
          <i className="icon-money"></i>
          <h3 className=' letter-spacing'>300,000</h3>
        </div>
      </div>
      <div className="statistics-card bg-black border-radius">
        <h2 className="letter-spacing text-primary">Users</h2>
        <div className='flex center small-gap statistics-card-child'>
          <i className="icon-users"></i>
          <h3 className=' letter-spacing'>20,000</h3>
        </div>
      </div>
      <div className="statistics-card bg-black border-radius">
        <h2 className="letter-spacing text-primary">Rides</h2>
        <div className='flex center small-gap statistics-card-child'>
          <i className="icon-rides"></i>
          <h3 className=' letter-spacing'>50,000</h3>
        </div>
      </div>
    </div>

    <div className="mg-table p gap flex column bg-black border-radius">
          <h2>Users</h2>
          <DashboardTable
            headers={myHeaders}
            body={users.map((user, i) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.location}</td>
                <td>
                  <button className="btn-style bg-danger text-white">Delete</button>
                </td>
              </tr>
            ))}
          />
        </div>
    
  </div>;
};

export default Dashboard;
