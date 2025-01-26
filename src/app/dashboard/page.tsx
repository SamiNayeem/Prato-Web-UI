"use client";

import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Navbar from "../components/admin-navbar";
import Cards from "../components/cards";
import Charts from "../components/charts";

const Dashboard: React.FC = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        onToggle={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Content */}
      <div
        className={`flex-grow transition-all duration-300 ${
          isSidebarCollapsed ? "ml-20" : "ml-64"
        }`}
      >
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="p-6">
          <Cards />
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
