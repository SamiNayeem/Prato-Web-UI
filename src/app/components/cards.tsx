import React from "react";

const Cards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-gray-800 font-semibold">Total Users</h2>
        <p className="text-3xl font-bold text-orange-600">12,345</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-gray-800 font-semibold">Total Sales</h2>
        <p className="text-3xl font-bold text-orange-600">$45,678</p>
      </div>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-gray-800 font-semibold">Monthly Revenue</h2>
        <p className="text-3xl font-bold text-orange-600">$12,345</p>
      </div>
    </div>
  );
};

export default Cards;
