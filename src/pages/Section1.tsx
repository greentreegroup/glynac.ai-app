import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

// Register Chart.js components
Chart.register(...registerables);

const Section1 = () => {
  // Sample data for Activity Tracking & Performance
  const workHours = [8, 7, 9, 6, 8, 7, 5]; // Example work hours for a week
  const taskCompletionTrends = {
    completed: [5, 7, 6, 8, 9],
    overdue: [1, 2, 1, 0, 1],
  };
  const responseTimes = [2, 3, 1, 4, 2]; // Example response times in hours
  const meetingFrequency = [2, 3, 1, 4, 5]; // Example meeting frequency

  const workHoursRef = useRef<HTMLCanvasElement | null>(null);
  const taskCompletionRef = useRef<HTMLCanvasElement | null>(null);
  const responseTimeRef = useRef<HTMLCanvasElement | null>(null);
  const meetingFrequencyRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Work Hours Chart
    if (workHoursRef.current) {
      const ctx = workHoursRef.current.getContext("2d");
      if (ctx) {
        const data = {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Work Hours',
            data: workHours,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }],
        };

        new Chart(ctx, {
          type: 'bar',
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Days',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Hours',
                },
                beginAtZero: true,
              },
            },
          },
        });
      }
    }

    // Task Completion Trends Chart
    if (taskCompletionRef.current) {
      const ctx = taskCompletionRef.current.getContext("2d");
      if (ctx) {
        const data = {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
          datasets: [
            {
              label: 'Completed Tasks',
              data: taskCompletionTrends.completed,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
            },
            {
              label: 'Overdue Tasks',
              data: taskCompletionTrends.overdue,
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              fill: true,
            },
          ],
        };

        new Chart(ctx, {
          type: 'line',
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Weeks',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Tasks',
                },
                beginAtZero: true,
              },
            },
          },
        });
      }
    }

    // Response Times Chart
    if (responseTimeRef.current) {
      const ctx = responseTimeRef.current.getContext("2d");
      if (ctx) {
        const data = {
          labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'],
          datasets: [{
            label: 'Response Times (hours)',
            data: responseTimes,
            backgroundColor: 'rgba(153, 102, 255, 0.6)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1,
          }],
        };

        new Chart(ctx, {
          type: 'bar',
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Tasks',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Response Time (hours)',
                },
                beginAtZero: true,
              },
            },
          },
        });
      }
    }

    // Meeting Frequency Chart
    if (meetingFrequencyRef.current) {
      const ctx = meetingFrequencyRef.current.getContext("2d");
      if (ctx) {
        const data = {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
          datasets: [{
            label: 'Meeting Frequency',
            data: meetingFrequency,
            backgroundColor: 'rgba(255, 159, 64, 0.6)',
            borderColor: 'rgba(255, 159, 64, 1)',
            borderWidth: 1,
          }],
        };

        new Chart(ctx, {
          type: 'bar',
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Weeks',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Frequency',
                },
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [workHours, taskCompletionTrends, responseTimes, meetingFrequency]);

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Activity Tracking & Performance</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Activity Tracking & Performance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Work Hours & Application Usage</h3>
                <p className="text-sm">Visualized via a bar chart showing daily active hours and app usage patterns.</p>
                <div className="h-32 bg-gray-200 mt-2 rounded-md">
                  <canvas ref={workHoursRef} style={{ height: '100%', width: '100%' }}></canvas>
                </div>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Task Completion Trends</h3>
                <p className="text-sm">A line graph showing completed tasks vs overdue tasks over time.</p>
                <div className="h-32 bg-gray-200 mt-2 rounded-md">
                  <canvas ref={taskCompletionRef} style={{ height: '100%', width: '100%' }}></canvas>
                </div>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Response Time Metrics</h3>
                <p className="text-sm">A bar chart indicating average response times to emails, communications, and task assignments.</p>
                <div className="h-32 bg-gray-200 mt-2 rounded-md">
                  <canvas ref={responseTimeRef} style={{ height: '100%', width: '100%' }}></canvas>
                </div>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Calendar & Meeting Overload</h3>
                <p className="text-sm">A bar chart highlighting meeting frequency and scheduling overload.</p>
                <div className="h-32 bg-gray-200 mt-2 rounded-md">
                  <canvas ref={meetingFrequencyRef} style={{ height: '100%', width: '100%' }}></canvas>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section1; 