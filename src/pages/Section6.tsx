import { motion } from "framer-motion";

const Section6 = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Visual Representations and Metrics</h1>

          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Overview of Visual Elements</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Heatmaps:</strong> Use for meeting overload, response time, and work hour analysis.
                {/* Placeholder for heatmap */}
                <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
              </li>
              <li>
                <strong>Bar Charts:</strong> For task completion, response times, employee complaints, and security risks.
                {/* Placeholder for bar chart */}
                <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
              </li>
              <li>
                <strong>Pie Charts:</strong> For sentiment analysis, communication breakdowns, or risk categorization.
                {/* Placeholder for pie chart */}
                <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
              </li>
              <li>
                <strong>Line Graphs:</strong> To visualize performance trends, calendar overload, and predictive insights.
                {/* Placeholder for line graph */}
                <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
              </li>
              <li>
                <strong>Bubble Charts:</strong> For identifying employees with performance drags and those with high untapped potential.
                {/* Placeholder for bubble chart */}
                <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
              </li>
              <li>
                <strong>Tables:</strong> For displaying detailed records of employee activity (e.g., flagged communication, missed meetings, etc.).
                {/* Placeholder for table */}
                <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
              </li>
              <li>
                <strong>Scorecards:</strong> Display key performance scores, such as retention rate, response time, and engagement score.
                {/* Placeholder for scorecard */}
                <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
              </li>
              <li>
                <strong>Word Clouds:</strong> For sentiment analysis and identifying commonly used words in communications.
                {/* Placeholder for word cloud */}
                <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section6; 