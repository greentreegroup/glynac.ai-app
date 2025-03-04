import { motion } from "framer-motion";

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
                <p className="text-sm">A pie chart or word cloud representing sentiment in communication (positive, neutral, negative) over time.</p>
                {/* Placeholder for chart */}
                <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Anomaly Detection</h3>
                <p className="text-sm">A list or table of anomalies detected (e.g., negative language, complaints, missed meetings, delayed responses).</p>
                <ul className="list-disc pl-5 mt-2">
                  {anomalies.map((anomaly, index) => (
                    <li key={index} className="text-sm">{anomaly}</li>
                  ))}
                </ul>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Predictive Analytics</h3>
                <p className="text-sm">A line graph predicting future performance trends based on historical data.</p>
                {/* Placeholder for chart */}
                <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section2; 