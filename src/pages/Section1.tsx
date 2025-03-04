import { motion } from "framer-motion";

const Section1 = () => {
  // Sample data for Activity Tracking & Performance
  const workHours = [8, 7, 9, 6, 8, 7, 5]; // Example work hours for a week
  const taskCompletionTrends = {
    completed: [5, 7, 6, 8, 9],
    overdue: [1, 2, 1, 0, 1],
  };
  const responseTimes = [2, 3, 1, 4, 2]; // Example response times in hours
  const meetingFrequency = [2, 3, 1, 4, 5]; // Example meeting frequency

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
                <p className="text-sm">Visualized via a bar chart or heatmap showing daily active hours and app usage patterns.</p>
                {/* Placeholder for chart */}
                <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Task Completion Trends</h3>
                <p className="text-sm">A line graph showing completed tasks vs overdue tasks over time.</p>
                {/* Placeholder for chart */}
                <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Response Time Metrics</h3>
                <p className="text-sm">A bar chart or line graph indicating average response times to emails, communications, and task assignments.</p>
                {/* Placeholder for chart */}
                <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
              </div>
              <div className="p-4 border rounded-md">
                <h3 className="font-medium">Calendar & Meeting Overload</h3>
                <p className="text-sm">A calendar heatmap highlighting meeting frequency and scheduling overload.</p>
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

export default Section1; 