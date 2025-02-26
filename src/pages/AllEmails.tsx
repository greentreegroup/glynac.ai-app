import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

const AllEmails = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    // Load emails from local storage when the component mounts
    const storedEmails = JSON.parse(localStorage.getItem("emails") || "[]");
    setEmails(storedEmails);
  }, []);

  const handleDeleteEmail = (index) => {
    const updatedEmails = emails.filter((_, i) => i !== index);
    setEmails(updatedEmails);
    localStorage.setItem("emails", JSON.stringify(updatedEmails));
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
          <h1 className="text-3xl font-bold text-slate-800 mb-4">All Emails</h1>
          <div className="space-y-4">
            {emails.length === 0 ? (
              <p>No emails sent yet.</p>
            ) : (
              emails.map((email, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
                  <div>
                    <h2 className="font-medium text-slate-800">{email.subject}</h2>
                    <p className="text-slate-600">To: {email.recipient}</p>
                    <p className="text-slate-600">{email.content}</p>
                  </div>
                  <button onClick={() => handleDeleteEmail(index)} className="text-red-600 hover:text-red-800">
                    <FaTrash />
                  </button>
                </div>
              ))
            )}
          </div>
          <Link to="/dashboard" className="mt-4 inline-block text-blue-600 hover:underline">
            Back to Dashboard
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AllEmails; 