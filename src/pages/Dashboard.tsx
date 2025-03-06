import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Chart, registerables } from "chart.js";
import { useEffect, useRef } from "react";

// Register Chart.js components
Chart.register(...registerables);

const Dashboard = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null); // Create a ref for the canvas

  const conclusions = {
    "Legal Risk": ["David", "Tom", "Jane", "Rachel"],
    "Retention Issues": ["Becky", "Sara", "Andrew"],
    "Untapped Talent": ["Rachel", "Robert", "Randy"],
    "Performance Drags": ["Nancy", "Nina", "Ninja"],
  };

  const reports = {
    "Complaints (Top 20%)": ["Sara", "Jess", "Matt"],
    "Volume (Bottom 5%)": ["Peter", "Tom", "Nina"],
    "Volume Report (Bottom 20%) and Complaints (Bottom 10%)": [
      "Jacky",
      "Jessica",
      "Jared",
    ],
  };

  // Sample data for the metrics
  const activeEmployees = 120; // Example number of active employees
  const employeeEngagementScore = 85; // Example engagement score
  const overallProductivity = 75; // Example productivity percentage
  const recentAlerts = [
    "Alert: Abusive language detected in a recent communication.",
    "Alert: Performance issue reported for Employee A.",
    "Alert: Dispute raised between Employee B and Employee C.",
  ];

  // Sample data for team activity
  const productivityTrends = [70, 75, 80, 65, 60]; // Example productivity trends over time
  const performanceInsights = [
    "Employee A has shown a significant increase in productivity.",
    "Employee B needs to improve response times.",
    "AI detected potential burnout signs in Employee C.",
  ];

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d"); // Get the 2D context
      if (ctx) {
        // Sample data for the line chart
        const data = {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'], // X-axis labels
          datasets: [
            {
              label: 'Productivity Trends',
              data: productivityTrends, // Y-axis data points
              borderColor: 'rgba(75, 192, 192, 1)', // Line color
              backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill color
              borderWidth: 2,
              fill: true, // Fill the area under the line
            },
          ],
        };

        // Create the line chart
        const lineChart = new Chart(ctx, {
          type: 'line', // Use 'line' for a line chart
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false, // Allow the canvas to resize
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Weeks', // X-axis title
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Productivity (%)', // Y-axis title
                },
                beginAtZero: true, // Start Y-axis at zero
              },
            },
            plugins: {
              legend: {
                display: true,
              },
            },
          },
        });

        // Cleanup function to destroy the chart on component unmount
        return () => {
          lineChart.destroy();
        };
      } else {
        console.error("Failed to get canvas context");
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Dashboard</h1>
          <p>Welcome to the dashboard!</p>

          {/* Employee Overview Section */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Employee Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Active Employees</h3>
                <p className="text-lg">{activeEmployees}</p>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Employee Engagement Score</h3>
                <p className="text-lg">{employeeEngagementScore}%</p>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Overall Productivity</h3>
                <p className="text-lg">{overallProductivity}%</p>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Recent Alerts/Anomalies</h3>
                <ul className="list-disc pl-5">
                  {recentAlerts.map((alert, index) => (
                    <li key={index} className="text-sm">{alert}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Team Activity Overview Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mt-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Team Activity Overview</h2>
            <p className="text-sm">A comprehensive view of your team's overall activity, including productivity trends, performance, and any AI-driven insights or anomalies.</p>

            {/* Productivity trends chart */}
            <div className="h-64 bg-gray-200 mt-2 rounded-md mb-4">
              <canvas ref={chartRef} style={{ height: '100%', width: '100%' }}></canvas> {/* Render the canvas */}
            </div>

            <h3 className="font-medium">Performance Insights</h3>
            <ul className="list-disc pl-5 mt-2">
              {performanceInsights.map((insight, index) => (
                <li key={index} className="text-sm">{insight}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
