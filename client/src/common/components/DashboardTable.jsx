import React from "react";
import "../styles/tableDesign.css";
const DashboardTable = ({ headers, body }) => {
  return (
    <div>
      <table>
        <tr className="bg-secondary">
          {headers.map((header, i) => (
            <th key={i}>{header}</th>
          ))}
        </tr>
        {body}
      </table>
    </div>
  );
};

export default DashboardTable;
