import { useState } from "react";
import { motion } from "framer-motion";

const Section7 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [timeRange, setTimeRange] = useState("weekly"); // Default time range

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleTimeRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(e.target.value);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-3xl font-bold text-slate-800 mb-4">User Interactivity</h1>

          {/* Time Range Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Time Range Filters</h2>
            <select
              value={timeRange}
              onChange={handleTimeRangeChange}
              className="border rounded-md p-2"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Search</h2>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search for employees, teams, or departments..."
              className="border rounded-md p-2 w-full"
            />
          </div>

          {/* Interactive Data Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Interactive Data</h2>
            <p className="text-sm">Click on charts or tables to drill down into more detailed information.</p>
            {/* Placeholder for interactive charts or tables */}
            <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
          </div>

          {/* Custom Reports Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Custom Reports</h2>
            <p className="text-sm">Generate custom reports for metrics such as performance trends, risk management, or employee engagement.</p>
            {/* Placeholder for report generation functionality */}
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
              Generate Report
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section7; 