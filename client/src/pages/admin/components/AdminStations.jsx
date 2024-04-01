import React from "react";

const AdminStations = () => {

  return <div className="flex column align-center w-full">
    
    <div className="flex justify-evenly add-cards">
      <div className="flex column align-center gap add-card bg-black border-radius">
          <h2 className="letter-spacing text-primary">Add Manager</h2>

          <input type="text" placeholder="name" required/>
          <input type="email" placeholder="email" required/>
          <input type="password" placeholder="password" required/>
          <input type="text" placeholder="location" required/>
          {/* <div className="flex justify-around align-center add-card-child">
            <h4 className="text-primary">Coordinates:</h4>
            <input type="number" placeholder="longitude" required/>
            <input type="number" placeholder="latitude" required/>
          </div> */}
          <button className="flex center text-black bg-secondary">Add</button>
      </div>

      <div className="flex column align-center gap add-card bg-black border-radius">
          <h2 className="letter-spacing text-primary">Add Station</h2>

          <input type="text" placeholder="name" required/>
          <div className="flex justify-around align-center add-card-child">
            <h4 className="text-primary">Coordinates:</h4>
            <input type="number" placeholder="longitude" required/>
            <input type="number" placeholder="latitude" required/>
          </div>
          <div className="flex justify-center align-center gap add-card-child">
            <input type="file"  required/>
            <div className="flex column small-gap ">
            <label htmlFor="" className="text-primary bold">Choose Manager</label>
            <select
              className="input"
            >
            </select>
          </div>
          </div>
          
          <button className="flex center text-black bg-secondary">Add</button>
      </div>

      
    </div>
    
  </div>;
};

export default AdminStations;
