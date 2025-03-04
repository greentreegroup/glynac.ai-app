import { motion } from "framer-motion";

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
            {/* Placeholder for gauge or bar chart */}
            <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
          </div>

          {/* Complaints Over Time Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Complaints Over Time</h2>
            <p className="text-sm">A line graph showing an increase in complaints over a period of time, segmented by issue type.</p>
            {/* Placeholder for line graph */}
            <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
          </div>

          {/* Volume of Communication Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Volume of Communication</h2>
            <p className="text-sm">Total Communications: {communicationVolume.total}</p>
            <p className="text-sm">Engagement Rate: {communicationVolume.engagementRate}%</p>
            {/* Placeholder for line graph or pie chart */}
            <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
          </div>

          {/* Frustrated Communication Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Frustrated Communication</h2>
            <p className="text-sm">Sentiment analysis of communication indicating frustration or negativity over time.</p>
            {/* Placeholder for heatmap or pie chart */}
            <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section4; 