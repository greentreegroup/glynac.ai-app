import React from 'react';
import { useNavigate } from 'react-router-dom';

const Accounts = () => {
    const navigate = useNavigate();
    // Placeholder for stored accounts
    const accounts = JSON.parse(localStorage.getItem('accounts') || '[]');

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">Accounts</h2>
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">Username</th>
                            <th className="border border-gray-300 p-2">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map((account, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 p-2">{account.username}</td>
                                <td className="border border-gray-300 p-2">{account.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="mt-4 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Accounts;