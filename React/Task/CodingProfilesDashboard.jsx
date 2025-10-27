import React, { useMemo, useState } from "react";
import Chart from "react-apexcharts";

function generateMembers(n = 100) {
  const members = [];
  for (let i = 1; i <= n; i++) {
    const score = Math.round(40 + Math.random() * 60);
    members.push({ id: i, name: `Member ${i}`, score });
  }
  return members;
}

export default function CodingProfilesDashboard() {
  const [members] = useState(() => generateMembers(100));

  const chartOptions = {
    chart: { id: "scores" },
    xaxis: { categories: members.map((m) => m.name) },
  };

  const chartSeries = [{ name: "Coding Score", data: members.map((m) => m.score) }];

  return (
    <div style={{ padding: "30px" }}>
      <h1>Coding Profiles Dashboard</h1>
      <Chart options={chartOptions} series={chartSeries} type="bar" height={500} />
    </div>
  );
}


















































