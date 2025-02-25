import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const ConversationPage = () => {
  const { conversationId } = useParams();

  const conversation = {
    title: "Sent Alisa complaint",
    messages: [
      {
        author: "Alisa",
        role: "co-worker",
        content: "I sent alisa the email and she never responded its so annoying",
      },
      {
        author: "Becky",
        role: "",
        content: "oh that's not great",
      },
      {
        author: "David",
        role: "",
        content: "yes she sucks",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="text-accent hover:text-accent/80 transition-colors"
            >
              ← Back to Dashboard
            </Link>
            <h1 className="text-2xl font-semibold text-slate-800">
              {conversation.title}
            </h1>
          </div>

          <div className="space-y-4">
            {conversation.messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-4"
              >
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-slate-800">{message.author}</span>
                  <span className="text-slate-500">{message.role}</span>
                </div>
                <p className="text-slate-600">{message.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ConversationPage;

