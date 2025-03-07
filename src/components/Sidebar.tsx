// src/components/Sidebar.tsx
import React from 'react';

interface SidebarProps {
  // Define the type for the handleLogout prop
  handleLogout: () => void; 
}

const Sidebar: React.FC<SidebarProps> = ({ handleLogout }) => {
  // Sample logout function
  const logout = () => {
    // Logic to handle logout (e.g., clearing tokens, redirecting to login page)
    console.log("User logged out");
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirect to login page
  };

  return (
    <div className="bg-gray-800 text-white w-64 h-full p-4">
      <h1 className="text-lg font-bold mb-4">My Application</h1>
      <ul>
        <li className="mb-2">
          <a href="/dashboard" className="hover:underline">Dashboard</a>
        </li>
        <li className="mb-2">
          <a href="/section1" className="hover:underline">Activity Tracking</a>
        </li>
        <li className="mb-2">
          <a href="/section2" className="hover:underline">AI Insights</a>
        </li>
        <li className="mb-2">
          <a href="/section3" className="hover:underline">Performance Trends</a>
        </li>
        <li className="mb-2">
          <a href="/section4" className="hover:underline">Engagement Monitoring</a>
        </li>
        <li className="mb-2">
          <a href="/section5" className="hover:underline">Risk Management</a>
        </li>
        <li className="mb-2">
          <a href="/section6" className="hover:underline">Reporting and Analytics</a>
        </li>
        <li className="mb-2">
          <a href="/section7" className="hover:underline">Employee Profiles</a>
        </li>
        <li className="mb-2">
          <a href="/section8" className="hover:underline">Settings</a>
        </li>
        <li className="mb-2">
          <a 
            href="#" // Use "#" to prevent default navigation
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              logout(); // Call the logout function directly
            }}
            className="hover:underline"
          >
            Log Out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;