import React, { useEffect, useState } from "react";
import Papa from "papaparse";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch CSV file from public folder
    Papa.parse("/data.csv", {
      download: true,
      header: true, // converts first row to keys
      complete: (result) => {
        console.log(result.data);
        setData(result.data);
      },
    });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 CSV Data Dashboard</h2>

      {data.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {Object.values(row).map((val, j) => (
                  <td key={j}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;