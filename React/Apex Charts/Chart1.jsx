import React from "react";
import ReactApexChart from "react-apexcharts";
import "./Chart1.css";

function Chart1() {
  const donut = {
  series: [35, 20, 15, 10, 8, 7, 5],
  options: {
    chart: { type: "donut" },
    labels: ["Python", "HTML/CSS", "SQL", "JavaScript", "Java", "C", "C++"],
    colors: [
      "#409830ff", // Python
      "#e34c26", // HTML/CSS
      "#e38c00", // SQL
      "#F7DF1E", // JavaScript
      "#d721a1ff", // Java
      "#101112ff", // C
      "#bfeb2eff"  // C++
    ],
    legend: { position: "bottom" },
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val.toFixed(1) + "%";
      },
    },
  },
};


  // Line chart – Monthly commits & PRs
  const line = {
    series: [
      { name: "Commits", data: [3, 6, 5, 8, 10, 12, 14, 16, 18, 20, 22, 25] },
      { name: "PRs", data: [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1] },
    ],
    options: {
      chart: { type: "area", toolbar: { show: false } },
      colors: ["#4F46E5", "#22C55E"],
      xaxis: {
        categories: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
      },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth" },
    },
  };

 // Radar chart – Skill levels
const radar = {
  series: [{
    name: "Skill Level",
    data: [85, 70, 65, 75, 60],
  }],
  options: {
    chart: { type: "radar" },
    labels: ["Python", "HTML", "SQL", "ML", "CSS"],
    colors: ["#10B981"],
    stroke: { width: 2 },
    fill: { opacity: 0.3 },
  },
};



  // Horizontal bar chart – Contributions by project
  const hbar = {
    series: [{
      data: [100, 80, 60, 40, 20],
    }],
    options: {
      chart: { type: "bar" },
      plotOptions: {
        bar: { horizontal: true },
      },
      colors: ["#3B82F6"],
      xaxis: {
        categories: [
          "EDA Project",
          "Portfolio Website",
          "SQL Practice",
          "Python Scripts",
          "Mini Tasks"
        ],
      },
      dataLabels: { enabled: false },
    },
  };
  
  const platformProblems = {
  series: [{ data: [551, 146, 98] }],
  options: {
    chart: { type: "bar" },
    plotOptions: { bar: { horizontal: false } },
    colors: ["#6366F1"],
    xaxis: {
      categories: ["CodeChef", "LeetCode", "GeeksforGeeks"],
    },
    dataLabels: { enabled: false },
  },
};

  // Heatmap chart – Weekly commit pattern
  const heatmap = {
    series: [{
      name: "Commits",
      data: [
        { x: "Mon", y: 2 },
        { x: "Tue", y: 3 },
        { x: "Wed", y: 1 },
        { x: "Thu", y: 2 },
        { x: "Fri", y: 4 },
        { x: "Sat", y: 0 },
        { x: "Sun", y: 1 },
      ],
    }],
    options: {
      chart: { type: "heatmap" },
      plotOptions: {
        heatmap: {
          colorScale: {
            ranges: [
              { from: 0, to: 1, color: "#FCA5A5" },
              { from: 2, to: 3, color: "#FCD34D" },
              { from: 4, to: 5, color: "#34D399" },
            ],
          },
        },
      },
      dataLabels: { enabled: false },
    },
  };


  // Pie chart – Contribution types
  const pie = {
    series: [90, 1, 0],
    options: {
      chart: { type: "pie" },
      labels: ["Commits", "Pull Requests", "Issues"],
      colors: ["#4F46E5", "#22C55E", "#F59E0B"],
      legend: { position: "bottom" },
      dataLabels: { enabled: false },
    },
  };

  const contestLine = {
  series: [{
    name: "Contests",
    data: [1, 2, 1, 3, 2, 1, 2, 0, 1, 2, 1, 3],
  }],
  options: {
    chart: { type: "line" },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ],
    },
    colors: ["#10B981"],
    stroke: { curve: "smooth" },
    dataLabels: { enabled: false },
  },
};
const hackerRankBadgeCount = {
  series: [8],
  options: {
    chart: { type: "radialBar" },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: { show: true },
          value: { show: true, fontSize: "28px" },
        },
      },
    },
    labels: ["Badges"],
    colors: ["#22C55E"],
  },
};
const badgeBarChart = {
  series: [{
    data: [8, 4, 1],
  }],
  options: {
    chart: { type: "bar" },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    colors: ["#22C55E", "#F59E0B", "#6366F1"],
    xaxis: {
      categories: ["HackerRank", "CodeChef", "LeetCode"],
      labels: {
        style: { fontSize: "14px", fontWeight: 600 },
      },
    },
    dataLabels: {
      enabled: false,
      style: { fontSize: "16px", fontWeight: "bold" },
    },
  },
};



   
  
  return (
    
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>SumaBoard</h2>
        <p>Clear view of coding activity, skills, and contributions</p>
      </header>

      <div className="cards-row">
        <div className="card">
          <h3>Total Repositories</h3>
          <p className="percent">14</p>
          <span>Active & Archived</span>
        </div>
        <div className="card">
          <h3>Pull Requests</h3>
          <p className="percent">1%</p>
          <span>Compared to commits</span>
        </div>
        <div className="card">
          <h3>Commits</h3>
          <p className="percent">65</p>
          <span>This month</span>
        </div>
        <div className="card">
          <h3>Lines of Code</h3>
          <p className="percent">3800</p>
          <span>This month</span>
        </div>
      </div>
      

      <div className="charts-grid">
        <div className="chart-box">
          <h4>Languages used</h4>
          <ReactApexChart
            options={donut.options}
            series={donut.series}
            type="donut"
            height={250}
          />
        </div>

        <div className="chart-box large">
          <h4>Monthly commits & PRs</h4>
          <ReactApexChart
            options={line.options}
            series={line.series}
            type="area"
            height={250}
          />
        </div>

        <div className="chart-box">
          <h4>Skill levels in GitHub</h4>
          <ReactApexChart
            options={radar.options}
            series={radar.series}
            type="radar"
            height={250}
          />
        </div>
        
        <div className="chart-box">
          <h4>Contributions by project</h4>
          <ReactApexChart
            options={hbar.options}
            series={hbar.series}
            type="bar"
            height={250}
          />
        </div>

        <div className="chart-box">
        <h4>Problems Solved by Platform</h4>
        <ReactApexChart
         options={platformProblems.options}
         series={platformProblems.series}
        type="bar"
        height={250}  />
        </div>

        <div className="chart-box">
          <h4>Weekly commit pattern</h4>
          <ReactApexChart
            options={heatmap.options}
            series={heatmap.series}
            type="heatmap"
            height={250}
          />
        </div>

        <div className="chart-box">
  <h4>Monthly Contest Participation</h4>
  <ReactApexChart
    options={contestLine.options}
    series={contestLine.series}
    type="line"
    height={250}
  />
</div>

        <div className="chart-box">
          <h4>Contribution types</h4>
          <ReactApexChart
            options={pie.options}
            series={pie.series}
            type="pie"
            height={250}
          />
        </div>
        <div className="chart-box">
  <h4>Badges Earned by Platform</h4>
  <ReactApexChart
    options={badgeBarChart.options}
    series={badgeBarChart.series}
    type="bar"
    height={250}
  />
</div>

      </div>
    </div>
  );
}

export default Chart1;