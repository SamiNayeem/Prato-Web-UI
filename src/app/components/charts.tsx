import React from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import "../../../chartSetup";

const Charts: React.FC = () => {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Active Users",
        data: [1200, 1500, 1700, 1900, 2100],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    datasets: [
      {
        label: "Daily Sales",
        data: [400, 700, 900, 500, 650],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ["Products", "Subscriptions", "Services"],
    datasets: [
      {
        label: "Revenue Breakdown",
        data: [55, 25, 20],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Line Chart */}
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Active Users</h3>
        <Line data={lineData} />
      </div>

      {/* Bar Chart */}
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Daily Sales</h3>
        <Bar data={barData} />
      </div>

      {/* Pie Chart */}
      <div className="bg-white shadow-md p-6 rounded-lg col-span-2">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Breakdown</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default Charts;
