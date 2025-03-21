import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

// Register Chart.js components
Chart.register(...registerables);

const Section3 = () => {
  // Sample data for Performance & Efficiency Trends
  const performanceDrags = [
    { name: "Employee A", negativeLanguage: true, responseTime: 5, taskCompletion: 60 },
    { name: "Employee B", negativeLanguage: false, responseTime: 3, taskCompletion: 80 },
    { name: "Employee C", negativeLanguage: true, responseTime: 7, taskCompletion: 50 },
  ];
  const efficiencyScore = {
    taskCompletionRate: 75, // Example task completion rate
    averageResponseTime: 4, // Example average response time in hours
    meetingOverload: 5, // Example number of meetings
  };
  const untappedTalent = [
    { name: "Employee D", skillScore: 90, complaintLevel: 1 },
    { name: "Employee E", skillScore: 85, complaintLevel: 0 },
  ];

  const performanceDragsRef = useRef<HTMLCanvasElement | null>(null);
  const untappedTalentRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Performance Drags Bubble Chart
    if (performanceDragsRef.current) {
      const ctx = performanceDragsRef.current.getContext("2d");
      if (ctx) {
        const data = {
          datasets: performanceDrags.map((employee) => ({
            label: employee.name,
            data: [{ x: employee.responseTime, y: employee.taskCompletion, r: 10 }], // Bubble radius
            backgroundColor: employee.negativeLanguage ? 'rgba(255, 99, 132, 0.6)' : 'rgba(75, 192, 192, 0.6)',
          })),
        };

        new Chart(ctx, {
          type: 'bubble', // Use 'bubble' for performance drags
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Response Time (hours)',
                },
                beginAtZero: true,
              },
              y: {
                title: {
                  display: true,
                  text: 'Task Completion (%)',
                },
                beginAtZero: true,
              },
            },
          },
        });
      }
    }

    // Untapped Talent Bar Chart
    if (untappedTalentRef.current) {
      const ctx = untappedTalentRef.current.getContext("2d");
      if (ctx) {
        const data = {
          labels: untappedTalent.map(employee => employee.name),
          datasets: [{
            label: 'Skill Score',
            data: untappedTalent.map(employee => employee.skillScore),
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
          }],
        };

        new Chart(ctx, {
          type: 'bar', // Use 'bar' for untapped talent
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Employees',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Skill Score',
                },
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [performanceDrags, untappedTalent]);

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Performance & Efficiency Trends</h1>

          {/* Performance Drags Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Performance Drags</h2>
            <p className="text-sm">A bubble chart highlighting employees who display performance drags.</p>
            <div className="h-64 bg-gray-200 mt-2 rounded-md">
              <canvas ref={performanceDragsRef} style={{ height: '100%', width: '100%' }}></canvas>
            </div>
          </div>

          {/* Efficiency Score Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Efficiency Score</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-md p-4">
                <h3 className="font-medium">Task Completion Rate</h3>
                <p className="text-lg">{efficiencyScore.taskCompletionRate}%</p>
              </div>
              <div className="border rounded-md p-4">
                <h3 className="font-medium">Average Response Time</h3>
                <p className="text-lg">{efficiencyScore.averageResponseTime} hours</p>
              </div>
              <div className="border rounded-md p-4">
                <h3 className="font-medium">Meeting Overload</h3>
                <p className="text-lg">{efficiencyScore.meetingOverload} meetings</p>
              </div>
            </div>
          </div>

          {/* Untapped Talent Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Untapped Talent</h2>
            <p className="text-sm">A bar chart showing employees with untapped potential.</p>
            <div className="h-64 bg-gray-200 mt-2 rounded-md">
              <canvas ref={untappedTalentRef} style={{ height: '100%', width: '100%' }}></canvas>
            </div>
            <ul className="list-disc pl-5 mt-2">
              {untappedTalent.map((employee, index) => (
                <li key={index} className="text-sm">
                  {employee.name} - Skill Score: {employee.skillScore}, Complaints: {employee.complaintLevel}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section3; 