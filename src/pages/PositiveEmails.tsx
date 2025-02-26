import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PositiveEmails = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Positive Emails</h1>
          {/* Display positive emails here */}
          <Link to="/dashboard" className="mt-4 inline-block text-blue-600 hover:underline">
            Back to Dashboard
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default PositiveEmails; 