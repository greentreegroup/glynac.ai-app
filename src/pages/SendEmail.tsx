import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SendEmail = () => {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const email = { recipient, subject, content };
    
    // Get existing emails from local storage
    const existingEmails = JSON.parse(localStorage.getItem("emails") || "[]");
    
    // Add the new email to the existing emails
    existingEmails.push(email);
    
    // Save the updated emails back to local storage
    localStorage.setItem("emails", JSON.stringify(existingEmails));
    
    // Clear the form
    setRecipient("");
    setSubject("");
    setContent("");
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
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Send Email</h1>
          <form onSubmit={handleSendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">To:</label>
              <input
                type="email"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                required
                className="mt-1 block w-full border border-slate-300 rounded-md p-2"
                placeholder="recipient@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Subject:</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="mt-1 block w-full border border-slate-300 rounded-md p-2"
                placeholder="Email Subject"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Content:</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="mt-1 block w-full border border-slate-300 rounded-md p-2"
                rows={4}
                placeholder="Email Content"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Email
            </button>
          </form>
          <Link to="/dashboard" className="mt-4 inline-block text-blue-600 hover:underline">
            Back to Dashboard
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SendEmail; 