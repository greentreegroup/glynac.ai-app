import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/section1" className="hover:underline">
            Activity Tracking
          </Link>
        </li>
        <li>
          <Link to="/section2" className="hover:underline">
            AI Insights
          </Link>
        </li>
        <li>
          <Link to="/section3" className="hover:underline">
            Performance Trends
          </Link>
        </li>
        <li>
          <Link to="/section4" className="hover:underline">
            Engagement Monitoring
          </Link>
        </li>
        <li>
          <Link to="/section5" className="hover:underline">
            Risk Management
          </Link>
        </li>
        <li>
          <Link to="/section6" className="hover:underline">
            Reporting and Analytics
          </Link>
        </li>
        <li>
          <Link to="/section7" className="hover:underline">
            Employee Profiles
          </Link>
        </li>
        <li>
          <Link to="/section8" className="hover:underline">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar; 