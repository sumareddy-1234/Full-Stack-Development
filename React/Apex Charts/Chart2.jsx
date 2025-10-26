import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import "./Chart2.css";
import internshipData from "./internship_data.json";

const Chart2 = () => {
  const [charts, setCharts] = useState({});
  const [stats, setStats] = useState({});

  useEffect(() => {
    const validData = internshipData.filter(
      (item) =>
        item["Unnamed: 0"] &&
        !isNaN(item["Unnamed: 0"]) &&
        item["Unnamed: 1"] &&
        item["Unnamed: 2"]
    );

    const modeCounts = { Online: 0, Offline: 0, Inhouse: 0 };
    const domainCounts = {};
    const companyCounts = {};
    const stipendCounts = { Paid: 0, Unpaid: 0 };
    const durationCounts = {};
    const domainMode = {};
    const domainCompany = {};
    const domainStipend = {};
    const companyMode = {};

    const normalizeDomain = (text) => {
      if (!text) return "Unknown";
      const d = text.toLowerCase();
      if (d.includes("ml")) return "Machine Learning";
      if (d.includes("data")) return "Data Science";
      if (d.includes("full")) return "Full Stack";
      if (d.includes("web")) return "Web Development";
      if (d.includes("ai")) return "Artificial Intelligence";
      if (d.includes("automated")) return "Automation";
      if (d.includes("developer")) return "Development";
      if (d.includes("analyst")) return "Data Analytics";
      return "Others";
    };

    validData.forEach((student) => {
      const modeText = student["Unnamed: 4"]?.trim()?.toLowerCase();
      const domain = normalizeDomain(student["Unnamed: 8"]);
      const company = student["Unnamed: 5"]?.trim();
      const stipend = String(student["Unnamed: 6"]).toLowerCase().includes("nil")
        ? "Unpaid"
        : "Paid";
      const duration = student["Unnamed: 7"]?.trim();

      if (modeText?.includes("online")) modeCounts.Online++;
      else if (modeText?.includes("offline")) modeCounts.Offline++;
      else if (modeText?.includes("inhouse")) modeCounts.Inhouse++;

      domainCounts[domain] = (domainCounts[domain] || 0) + 1;

      if (company) companyCounts[company] = (companyCounts[company] || 0) + 1;

      if (!domainMode[domain]) domainMode[domain] = { Online: 0, Offline: 0, Inhouse: 0 };
      if (modeText?.includes("online")) domainMode[domain].Online++;
      else if (modeText?.includes("offline")) domainMode[domain].Offline++;
      else domainMode[domain].Inhouse++;

      if (!domainStipend[domain]) domainStipend[domain] = { Paid: 0, Unpaid: 0 };
      domainStipend[domain][stipend]++;

      if (company) {
        if (!companyMode[company]) companyMode[company] = { Online: 0, Offline: 0, Inhouse: 0 };
        if (modeText?.includes("online")) companyMode[company].Online++;
        else if (modeText?.includes("offline")) companyMode[company].Offline++;
        else companyMode[company].Inhouse++;
      }

      if (company) {
        if (!domainCompany[domain]) domainCompany[domain] = {};
        domainCompany[domain][company] = (domainCompany[domain][company] || 0) + 1;
      }

      stipendCounts[stipend]++;
      if (duration) durationCounts[duration] = (durationCounts[duration] || 0) + 1;
    });

    const total = validData.length;
    const totalCompanies = Object.keys(companyCounts).length;
    const onlinePct = ((modeCounts.Online / total) * 100).toFixed(1);
    const paidPct = ((stipendCounts.Paid / total) * 100).toFixed(1);
    setStats({ total, totalCompanies, onlinePct, paidPct });

    const topDomains = Object.entries(domainCounts).sort((a, b) => b[1] - a[1]);
    const topCompanies = Object.entries(companyCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);

    const domainsForStacked = topDomains.slice(0, 6).map(([d]) => d);
    const onlineSeries = domainsForStacked.map((d) => domainMode[d]?.Online || 0);
    const offlineSeries = domainsForStacked.map((d) => domainMode[d]?.Offline || 0);
    const inhouseSeries = domainsForStacked.map((d) => domainMode[d]?.Inhouse || 0);

    const domainsForStipend = Object.keys(domainStipend).slice(0, 6);
    const paidData = domainsForStipend.map((d) => domainStipend[d].Paid);
    const unpaidData = domainsForStipend.map((d) => domainStipend[d].Unpaid);

    const companiesForMode = topCompanies.map(([c]) => c);
    const companyModeSeries = ["Online", "Offline", "Inhouse"].map((mode) =>
      companiesForMode.map((c) => companyMode[c]?.[mode] || 0)
    );

    const sortedDurations = Object.entries(durationCounts).sort((a, b) => b[1] - a[1]);
    const topDurations = sortedDurations.slice(0, 6);
    const otherCount = sortedDurations.slice(6).reduce((sum, [, v]) => sum + v, 0);
    if (otherCount > 0) topDurations.push(["Others", otherCount]);
    const durationCategories = topDurations.map(([d]) => d);
    const durationSeries = topDurations.map(([_, v]) => v);

    const companyCountsSeries = topCompanies.map(([_, c]) => c);
    const companyLabels = topCompanies.map(([n]) => n);
    const domainShareSeries = topDomains.map(([_, c]) => parseFloat(((c / total) * 100).toFixed(2)));

    const top3Domains = topDomains.slice(0, 3).map(([d]) => d);
    const companyDomainSeries = top3Domains.map((domain) => {
      const companyMap = domainCompany[domain] || {};
      const top5 = Object.entries(companyMap).sort((a, b) => b[1] - a[1]).slice(0, 5);
      const categories = top5.map(([c]) => c + " (" + domain + ")");
      const data = categories.map((cat) => {
        const index = top5.findIndex(([c]) => cat.includes(c));
        return index !== -1 ? top5[index][1] : 0;
      });
      return { name: domain, data };
    });

    const totalCompaniesByDomain = {};
    Object.keys(domainCompany).forEach((domain) => {
      totalCompaniesByDomain[domain] = Object.keys(domainCompany[domain]).length;
    });

    // Top Domains by Paid Internships (only AI & Data Science)
    const topPaidDomains = Object.entries(domainStipend)
      .filter(([domain]) => domain === "Artificial Intelligence" || domain === "Data Science")
      .map(([domain, stipend]) => [domain, stipend.Paid]);
    const topPaidDomainsNames = topPaidDomains.map(([d]) => d);
    const topPaidDomainsCounts = topPaidDomains.map(([_, c]) => c);

    setCharts({
      mode: {
        series: Object.values(modeCounts),
        options: { chart: { type: "pie" }, labels: Object.keys(modeCounts), title: { text: "Internship Mode" } },
      },
      domain: {
        series: [{ name: "Internships", data: topDomains.map(([_, c]) => c) }],
        options: {
          chart: { type: "bar" },
          xaxis: { categories: topDomains.map(([d]) => d), labels: { rotate: -45 } },
          title: { text: "Internships by Domain" },
          plotOptions: { bar: { distributed: true, borderRadius: 6 } },
        },
      },
      company: {
        series: companyCountsSeries,
        options: {
          chart: { type: "donut" },
          labels: companyLabels,
          title: { text: "Top 5 Companies" },
          legend: { position: "bottom" },
        },
      },
      stipend: {
        series: [{ name: "Internships", data: Object.values(stipendCounts) }],
        options: {
          chart: { type: "bar" },
          xaxis: { categories: Object.keys(stipendCounts) },
          title: { text: "Paid vs Unpaid" },
          colors: ["#00E396", "#FF4560"],
        },
      },
      duration: {
        series: [{ name: "Internships", data: durationSeries }],
        options: {
          chart: { type: "bar" },
          xaxis: { categories: durationCategories },
          title: { text: "Internship Duration" },
        },
      },
      domainMode: {
        series: [
          { name: "Online", data: onlineSeries },
          { name: "Offline", data: offlineSeries },
          { name: "Inhouse", data: inhouseSeries },
        ],
        options: {
          chart: { type: "bar", stacked: true },
          xaxis: { categories: domainsForStacked },
          title: { text: "Mode vs Domain Distribution" },
          legend: { position: "bottom" },
          plotOptions: { bar: { borderRadius: 6 } },
        },
      },
      domainShare: {
        series: domainShareSeries,
        options: {
          chart: { type: "radialBar" },
          labels: topDomains.map(([d]) => d),
          title: { text: "Domain Share %" },
          plotOptions: { radialBar: { dataLabels: { total: { show: true, label: "Total" } } } },
        },
      },
      companyDomain: {
        series: companyDomainSeries,
        options: {
          chart: { type: "bar", stacked: true },
          xaxis: { categories: companyDomainSeries[0]?.data || [] },
          title: { text: "Top Companies by Domain" },
          legend: { position: "bottom" },
        },
      },
      totalCompaniesDomain: {
        series: [{ name: "Companies", data: Object.values(totalCompaniesByDomain) }],
        options: {
          chart: { type: "bar" },
          xaxis: { categories: Object.keys(totalCompaniesByDomain), labels: { rotate: -45 } },
          title: { text: "Total Companies by Domain" },
          plotOptions: { bar: { borderRadius: 6 } },
        },
      },
      stipendDomain: {
        series: [
          { name: "Paid", data: paidData },
          { name: "Unpaid", data: unpaidData },
        ],
        options: {
          chart: { type: "bar", stacked: true },
          xaxis: { categories: domainsForStipend },
          title: { text: "Paid vs Unpaid per Domain" },
          legend: { position: "bottom" },
        },
      },
      companyMode: {
        series: [
          { name: "Online", data: companyModeSeries[0] },
          { name: "Offline", data: companyModeSeries[1] },
          { name: "Inhouse", data: companyModeSeries[2] },
        ],
        options: {
          chart: { type: "bar", stacked: true },
          xaxis: { categories: companiesForMode },
          title: { text: "Company Mode Distribution" },
          legend: { position: "bottom" },
          plotOptions: { bar: { borderRadius: 6 } },
        },
      },
      topPaidDomain: {
        series: [{ name: "Paid Internships", data: topPaidDomainsCounts }],
        options: {
          chart: { type: "bar" },
          xaxis: { categories: topPaidDomainsNames, labels: { rotate: -45 } },
          title: { text: "Top Domains by Paid Internships (AI & Data Science)" },
          plotOptions: { bar: { borderRadius: 6 } },
          colors: ["#00E396"],
        },
      },
    });
  }, []);

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Department of CSE(DS) — Internship Insights Dashboard</h2>
        <p>2024–25 | Internship data visualized for analytical decision-making</p>
      </header>

      <section className="stats-cards">
        <div className="card"><h3>{stats.total}</h3><p>Total Students</p></div>
        <div className="card"><h3>{stats.totalCompanies}</h3><p>Companies</p></div>
        <div className="card"><h3>{stats.onlinePct}%</h3><p>Online</p></div>
        <div className="card"><h3>{stats.paidPct}%</h3><p>Paid</p></div>
      </section>

      <section className="charts-grid">
        {Object.keys(charts)
          .filter((key) => charts[key].series && charts[key].series.length > 0)
          .map((key) => (
            <div key={key} className="chart-box">
              <Chart
                options={charts[key].options}
                series={charts[key].series}
                type={charts[key].options.chart.type}
                height={
                  ["bar", "stacked"].includes(charts[key].options.chart.type) ? 450 :
                  charts[key].options.chart.type === "radialBar" ? 350 : 300
                }
              />
            </div>
          ))}
      </section>
    </div>
  );
};

export default Chart2;
