import React from "react";
import DashboardTable from "../../../common/components/DashboardTable";


const CoinRequests = () => {

  const requests = [
    {
      id:1,
      name:'test',
      email:'test@gmail.com',
      amount:'200'
    },
    {
      id:2,
      name:'test',
      email:'test@gmail.com',
      amount:'200'
    },
    {
      id:3,
      name:'test',
      email:'test@gmail.com',
      amount:'200'
    },
    {
      id:4,
      name:'test',
      email:'test@gmail.com',
      amount:'200'
    },
    {
      id:5,
      name:'test',
      email:'test@gmail.com',
      amount:'200'
    },
    
  ]

  const myHeaders = [
    "ID",
    "Name",
    "Email",
    "Amount",
    "Action",
    "Action",
  ];

  return (
    <div className="flex column align-center w-full">
      <div className="mg-table p gap flex column bg-black border-radius">
          <h2>Requests</h2>
          <DashboardTable
            headers={myHeaders}
            body={requests.map((request, i) => (
              <tr>
                <td>{request.id}</td>
                <td>{request.name}</td>
                <td>{request.email}</td>
                <td>{request.amount}</td>
                <td>
                  <button className="btn-style bg-secondary text-white">Accept</button>
                </td>
                <td>
                <button className="btn-style bg-danger text-white">Reject</button>
                </td>
              </tr>
            ))}
          />
        </div>
    </div>
  );
};

export default CoinRequests;
