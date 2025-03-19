// src/pages/Register.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { z } from "zod"; // Import Zod

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState(''); // Add email state
    const navigate = useNavigate();
    const { toast } = useToast();

    // Define the Zod schema for validation
    const registrationSchema = z.object({
        email: z.string().email("Invalid email format"), // Validate email format
        password: z.string()
            .min(8, "Password must be at least 8 characters long") // Minimum length
            .regex(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character"), // Special character requirement
        username: z.string()
            .min(1, "Username is required") // Username is required
            .max(20, "Username must be at most 20 characters long"), // Maximum length
    });

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate the input data
        try {
            registrationSchema.parse({
                email,
                password,
                username,
            });

            // Derive the name from the email
            const name = username.split('@')[0]; // Get the part before the '@'

            const response = await fetch("http://localhost:3001/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    name: name,
                    role: "user",
                    is_active: true,
                    date_created: new Date().toISOString(), // Current date in ISO format
                }),
            });

            if (response.ok) {
                // Show a success message
                toast({
                    title: "Account Created",
                    description: "You can now log in with your new account.",
                    variant: "default",
                });
                navigate('/'); // Redirect to login after registration
            } else {
                const errorData = await response.json();
                toast({
                    title: "Error",
                    description: errorData.error || "Failed to create account.",
                    variant: "destructive",
                });
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                // Handle Zod validation errors
                error.errors.forEach(err => {
                    toast({
                        title: "Validation Error",
                        description: err.message,
                        variant: "destructive",
                    });
                });
            } else {
                console.error("Error during registration:", error);
                toast({
                    title: "Error",
                    description: "There was an error creating your account.",
                    variant: "destructive",
                });
            }
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
                            Create Account
                        </h1>
                        <p className="text-slate-500 mt-2">Fill in the details to create a new account</p>
                    </div>
                    <form onSubmit={handleRegister} className="space-y-6">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-slate-700"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
                                placeholder="Enter your email"
                            />
                        </div>
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