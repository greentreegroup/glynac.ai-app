import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

// Register Chart.js components
Chart.register(...registerables);

const Section4 = () => {
  // Sample data for Employee Retention & Engagement
  const retentionRate = 85; // Example retention rate
  const complaintsOverTime = [2, 3, 5, 4, 6]; // Example complaints over time
  const communicationVolume = {
    total: 150, // Total communications
    engagementRate: 75, // Engagement rate percentage
  };
  const frustratedCommunication = {
    positive: 60,
    neutral: 30,
    negative: 10,
  };

  const retentionRef = useRef<HTMLCanvasElement | null>(null);
  const complaintsRef = useRef<HTMLCanvasElement | null>(null);
  const communicationRef = useRef<HTMLCanvasElement | null>(null);
  const frustrationRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Retention Indicators Chart
    if (retentionRef.current) {
      const ctx = retentionRef.current.getContext("2d");
      if (ctx) {
        const data = {
          labels: ['Retention Rate'],
          datasets: [{
            label: 'Retention Rate',
            data: [retentionRate],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }],
        };

        new Chart(ctx, {
          type: 'bar', // Use 'bar' for retention rate
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Metrics',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Percentage',
                },
                beginAtZero: true,
                max: 100, // Set max to 100 for percentage
              },
            },
          },
        });
      }
    }

    // Complaints Over Time Chart
    if (complaintsRef.current) {
      const ctx = complaintsRef.current.getContext("2d");
      if (ctx) {
        const data = {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
          datasets: [{
            label: 'Complaints',
            data: complaintsOverTime,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
          }],
        };

        new Chart(ctx, {
          type: 'line', // Use 'line' for complaints over time
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
                  text: 'Number of Complaints',
                },
                beginAtZero: true,
              },
            },
          },
        });
      }
    }

    // Volume of Communication Chart
    if (communicationRef.current) {
      const ctx = communicationRef.current.getContext("2d");
      if (ctx) {
        const data = {
          labels: ['Total Communications', 'Engagement Rate'],
          datasets: [{
            label: 'Communication Volume',
            data: [communicationVolume.total, communicationVolume.engagementRate],
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)', // Total Communications
              'rgba(255, 206, 86, 0.6)', // Engagement Rate
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          }],
        };

        new Chart(ctx, {
          type: 'pie', // Use 'pie' for communication volume
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
              },
            },
          },
        });
      }
    }

    // Frustrated Communication Chart
    if (frustrationRef.current) {
      const ctx = frustrationRef.current.getContext("2d");
      if (ctx) {
        const data = {
          labels: ['Positive', 'Neutral', 'Negative'],
          datasets: [{
            label: 'Frustrated Communication',
            data: [frustratedCommunication.positive, frustratedCommunication.neutral, frustratedCommunication.negative],
            backgroundColor: [
              'rgba(75, 192, 192, 0.6)', // Positive
              'rgba(255, 206, 86, 0.6)', // Neutral
              'rgba(255, 99, 132, 0.6)', // Negative
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
          }],
        };

        new Chart(ctx, {
          type: 'pie', // Use 'pie' for frustrated communication
          data: data,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
              },
            },
          },
        });
      }
    }
  }, [retentionRate, complaintsOverTime, communicationVolume, frustratedCommunication]);

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Employee Retention & Engagement</h1>

          {/* Retention Indicators Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Retention Indicators</h2>
            <p className="text-lg">Retention Rate: {retentionRate}%</p>
            <div className="h-32 bg-gray-200 mt-2 rounded-md">
              <canvas ref={retentionRef} style={{ height: '100%', width: '100%' }}></canvas>
            </div>
          </div>

          {/* Complaints Over Time Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Complaints Over Time</h2>
            <p className="text-sm">A line graph showing an increase in complaints over a period of time.</p>
            <div className="h-32 bg-gray-200 mt-2 rounded-md">
              <canvas ref={complaintsRef} style={{ height: '100%', width: '100%' }}></canvas>
            </div>
          </div>

          {/* Volume of Communication Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Volume of Communication</h2>
            <p className="text-sm">Total Communications: {communicationVolume.total}</p>
            <p className="text-sm">Engagement Rate: {communicationVolume.engagementRate}%</p>
            <div className="h-32 bg-gray-200 mt-2 rounded-md">
              <canvas ref={communicationRef} style={{ height: '100%', width: '100%' }}></canvas>
            </div>
          </div>

          {/* Frustrated Communication Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Frustrated Communication</h2>
            <p className="text-sm">Sentiment analysis of communication indicating frustration or negativity.</p>
            <div className="h-32 bg-gray-200 mt-2 rounded-md">
              <canvas ref={frustrationRef} style={{ height: '100%', width: '100%' }}></canvas>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section4; 