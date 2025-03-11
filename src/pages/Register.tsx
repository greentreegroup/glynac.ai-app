import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { toast } = useToast();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        // Save the username and password to local storage
        const accounts = JSON.parse(localStorage.getItem('accounts') || '[]');
        accounts.push({ username, password });
        localStorage.setItem('accounts', JSON.stringify(accounts));

        // Show a success message
        toast({
            title: "Account Created",
            description: "You can now log in with your new account.",
            variant: "default",
        });
        navigate('/'); // Redirect to login after registration
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
                            Create Account
                        </h1>
                        <p className="text-slate-500 mt-2">Fill in the details to create a new account</p>
                    </div>
                    <form onSubmit={handleRegister} className="space-y-6">
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
                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
                            >
                                Register
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate('/')}
                                className="ml-2 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Register;