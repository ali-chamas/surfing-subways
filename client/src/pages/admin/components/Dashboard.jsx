import React from "react";

const Dashboard = () => {
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
    
  </div>;
};

export default Dashboard;
