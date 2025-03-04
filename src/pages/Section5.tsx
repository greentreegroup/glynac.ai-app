import { motion } from "framer-motion";

const Section5 = () => {
  // Sample data for Risk Management & Employee Behavior
  const securityRisks = [
    { name: "Employee A", riskLevel: "High" },
    { name: "Employee B", riskLevel: "Medium" },
    { name: "Employee C", riskLevel: "Low" },
  ];
  const abusiveLanguage = [
    "Message from Employee D: 'This is unacceptable!'",
    "Message from Employee E: 'You are an idiot!'",
  ];
  const anomalies = [
    "Negative language detected in communication with Employee A.",
    "Missed meeting with Team B.",
    "Delayed response to task assignment for Employee C.",
  ];
  const predictiveTrends = [70, 75, 80, 65, 60]; // Example predictive analytics data
  const unwantedBehavior = [
    { behavior: "Missed Meetings", count: 3 },
    { behavior: "Lies to Clients", count: 1 },
    { behavior: "Failure to Show Up", count: 2 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Risk Management & Employee Behavior</h1>

          {/* Security Risks Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Security Risks</h2>
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Employee</th>
                  <th className="border border-gray-300 p-2">Risk Level</th>
                </tr>
              </thead>
              <tbody>
                {securityRisks.map((risk, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 p-2">{risk.name}</td>
                    <td className="border border-gray-300 p-2">{risk.riskLevel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Abusive Language & Harassment Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Abusive Language & Harassment</h2>
            <ul className="list-disc pl-5">
              {abusiveLanguage.map((message, index) => (
                <li key={index} className="text-sm">{message}</li>
              ))}
            </ul>
          </div>

          {/* Disputes & Complaints Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Disputes & Complaints</h2>
            <p className="text-sm">A line chart or pie chart showing increasing/decreasing trends in employee complaints or conflicts with leadership.</p>
            {/* Placeholder for chart */}
            <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
          </div>

          {/* Unwanted Behavior Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Unwanted Behavior</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {unwantedBehavior.map((behavior, index) => (
                <div key={index} className="border rounded-md p-4">
                  <h3 className="font-medium">{behavior.behavior}</h3>
                  <p className="text-lg">{behavior.count} occurrences</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section5; 