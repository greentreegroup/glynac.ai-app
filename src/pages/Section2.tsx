import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

// Register Chart.js components
Chart.register(...registerables);

const Section2 = () => {
  // Sample data for AI-Powered Insights
  const sentimentData = {
    positive: 60,
    neutral: 30,
    negative: 10,
  };
  const anomalies = [
    "Negative language detected in communication with Employee A.",
    "Missed meeting with Team B.",
    "Delayed response to task assignment for Employee C.",
  ];
  const predictiveTrends = [70, 75, 80, 65, 60]; // Example predictive analytics data

  const sentimentRef = useRef<HTMLCanvasElement | null>(null);
  const predictiveRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Sentiment Analysis Chart
    if (sentimentRef.current) {
      const ctx = sentimentRef.current.getContext("2d");
      if (ctx) {
        const data = {
          labels: ['Positive', 'Neutral', 'Negative'],
          datasets: [{
            label: 'Sentiment Analysis',
            data: [sentimentData.positive, sentimentData.neutral, sentimentData.negative],
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
          type: 'pie', // Use 'pie' for sentiment analysis
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

    // Predictive Analytics Chart
    if (predictiveRef.current) {
      const ctx = predictiveRef.current.getContext("2d");
      if (ctx) {
        const data = {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
          datasets: [{
            label: 'Predictive Performance Trends',
            data: predictiveTrends,
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Fill color
            borderWidth: 2,
            fill: true, // Fill the area under the line
          }],
        };

        new Chart(ctx, {
          type: 'line', // Use 'line' for predictive analytics
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
                  text: 'Performance (%)',
                },
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [sentimentData, predictiveTrends]);

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-3xl font-bold text-slate-800 mb-4">AI-Powered Insights</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">AI-Powered Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Sentiment Analysis</h3>
                <p className="text-sm">A pie chart representing sentiment in communication (positive, neutral, negative).</p>
                <div className="h-32 bg-gray-200 mt-2 rounded-md">
                  <canvas ref={sentimentRef} style={{ height: '100%', width: '100%' }}></canvas>
                </div>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Anomaly Detection</h3>
                <p className="text-sm">A list of anomalies detected (e.g., negative language, complaints, missed meetings).</p>
                <ul className="list-disc pl-5 mt-2">
                  {anomalies.map((anomaly, index) => (
                    <li key={index} className="text-sm">{anomaly}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Predictive Analytics</h3>
                <p className="text-sm">A line graph predicting future performance trends based on historical data.</p>
                <div className="h-32 bg-gray-200 mt-2 rounded-md">
                  <canvas ref={predictiveRef} style={{ height: '100%', width: '100%' }}></canvas>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section2; 