import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/accounts"); // Fetch accounts from API
      const accounts = await response.json(); // Parse the JSON response

      // Check if the entered username and password match any account
      const isValidUser = accounts.some(account => 
          account.email === username && account.password === password
      );

      if (isValidUser) {
          navigate("/dashboard"); // Redirect to dashboard if valid
      } else {
          toast({
              title: "Invalid credentials",
              description: "Please enter a valid username and password.",
              variant: "destructive",
          });
      }
    } catch (error) {
      console.error("Error fetching accounts:", error);
      toast({
          title: "Error",
          description: "There was an error fetching accounts.",
          variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white p-6 rounded shadow-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-slate-800">
              Employee Insights Portal
            </h1>
            <p className="text-slate-500 mt-2">Sign in to access the dashboard</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-slate-700"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="Enter your username"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
              Sign in
            </button>
          </form>
          
          <div className="mt-4 text-center">
            <Link to="/register" className="text-sm text-blue-500 hover:underline">
              Create Account
            </Link>
          </div>

          <div className="mt-4 text-center">
            <Link to="/accounts" className="text-sm text-blue-500 hover:underline">
              View Accounts
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;



