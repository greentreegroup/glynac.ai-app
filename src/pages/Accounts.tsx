import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Accounts() {
  const navigate = useNavigate();
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/accounts"); // Fetch from API
        const data = await response.json();
        setAccounts(data);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    fetchAccounts();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4 text-center">
          Accounts Table
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Password</th>
                <th className="border border-gray-300 p-2">Role</th>
                <th className="border border-gray-300 p-2">Active</th>
                <th className="border border-gray-300 p-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              {accounts.length > 0 ? (
                accounts.map((account) => (
                  <tr key={account.id} className="text-center">
                    <td className="border border-gray-300 p-2">{account.id}</td>
                    <td className="border border-gray-300 p-2">{account.name}</td>
                    <td className="border border-gray-300 p-2">{account.email}</td>
                    <td className="border border-gray-300 p-2">{account.password}</td>
                    <td className="border border-gray-300 p-2">{account.role}</td>
                    <td className="border border-gray-300 p-2">
                      {account.is_active ? "✅" : "❌"}
                    </td>
                    <td className="border border-gray-300 p-2">
                      {new Date(account.date_created).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="border border-gray-300 p-2 text-center">
                    No accounts found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
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
}
