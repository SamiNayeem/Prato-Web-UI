import React from "react";
import {
  FaBars,
  FaHome,
  FaUsers,
  FaChartLine,
  FaShoppingCart,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-orange-500 text-white transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between h-16 bg-orange-600 px-4">
        {!isCollapsed && <h1 className="text-xl font-bold">Admin Panel</h1>}
        <button
          className="text-white focus:outline-none"
          onClick={onToggle}
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Scrollable Menu */}
      <div className="flex-grow overflow-y-auto">
        <ul className="space-y-2">
          <li className="hover:bg-orange-600">
            <a href="#" className="flex items-center px-6 py-4">
              <FaHome className="text-lg" />
              {!isCollapsed && <span className="ml-4">Dashboard</span>}
            </a>
          </li>
          <li className="hover:bg-orange-600">
            <a href="#" className="flex items-center px-6 py-4">
              <FaUsers className="text-lg" />
              {!isCollapsed && <span className="ml-4">User Management</span>}
            </a>
          </li>
          <li className="hover:bg-orange-600">
            <a href="#" className="flex items-center px-6 py-4">
              <FaChartLine className="text-lg" />
              {!isCollapsed && <span className="ml-4">Analytics</span>}
            </a>
          </li>
          <li className="hover:bg-orange-600">
            <a href="#" className="flex items-center px-6 py-4">
              <FaShoppingCart className="text-lg" />
              {!isCollapsed && <span className="ml-4">Sales & Revenue</span>}
            </a>
          </li>
          <li className="hover:bg-orange-600">
            <a href="#" className="flex items-center px-6 py-4">
              <FaCog className="text-lg" />
              {!isCollapsed && <span className="ml-4">Settings</span>}
            </a>
          </li>
        </ul>
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 bg-orange-600">
        <button className="flex items-center w-full text-left hover:bg-orange-700 px-4 py-2 rounded-lg">
          <FaSignOutAlt className="text-lg" />
          {!isCollapsed && <span className="ml-4">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
