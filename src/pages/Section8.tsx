import { motion } from "framer-motion";

const Section8 = () => {
  // Sample data for compliance status and audit logs
  const complianceStatus = {
    gdpr: true,
    ccpa: false,
  };
  const auditLogs = [
    { action: "Logged in", timestamp: "2023-10-01 10:00 AM" },
    { action: "Updated profile", timestamp: "2023-10-01 10:15 AM" },
    { action: "Sent email", timestamp: "2023-10-01 10:30 AM" },
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
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Data Privacy & Compliance</h1>

          {/* Data Privacy Settings Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Data Privacy Settings</h2>
            <p className="text-sm">View what data is being tracked and how it is being used.</p>
            {/* Placeholder for privacy panel */}
            <div className="h-32 bg-gray-200 mt-2 rounded-md"></div>
          </div>

          {/* Compliance Dashboard Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Compliance Dashboard</h2>
            <p className="text-sm">Compliance Status:</p>
            <ul className="list-disc pl-5">
              <li className="text-sm">GDPR Compliance: {complianceStatus.gdpr ? "✅ Compliant" : "❌ Non-Compliant"}</li>
              <li className="text-sm">CCPA Compliance: {complianceStatus.ccpa ? "✅ Compliant" : "❌ Non-Compliant"}</li>
            </ul>
          </div>

          {/* Audit Logs Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">Audit Logs</h2>
            <p className="text-sm">Audit trail of employee activity for security and transparency purposes.</p>
            <ul className="list-disc pl-5 mt-2">
              {auditLogs.map((log, index) => (
                <li key={index} className="text-sm">{log.action} at {log.timestamp}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Section8; 