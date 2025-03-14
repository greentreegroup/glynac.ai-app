// Example React component for displaying users
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
    id: number;
    email: string;
    name: string;
    role: string;
    is_active: boolean;
    date_created: Date;
}

const Accounts = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch('/api/users');
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await res.json();
                setUsers(data); // Update the users state with data from the API
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    // Hardcoded additional users for demonstration
    const additionalUsers: User[] = [
        { id: 6, email: 'user6@example.com', name: 'User Six', role: 'User', is_active: true, date_created: new Date() },
        { id: 7, email: 'user7@example.com', name: 'User Seven', role: 'User', is_active: true, date_created: new Date() },
        { id: 8, email: 'user8@example.com', name: 'User Eight', role: 'User', is_active: false, date_created: new Date() },
        { id: 9, email: 'user9@example.com', name: 'User Nine', role: 'User', is_active: true, date_created: new Date() },
        { id: 10, email: 'user10@example.com', name: 'User Ten', role: 'User', is_active: false, date_created: new Date() },
    ];

    // Combine fetched users with additional hardcoded users
    const combinedUsers = [...users, ...additionalUsers];

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-semibold text-slate-800 mb-4">Accounts</h2>
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">ID</th>
                            <th className="border border-gray-300 p-2">Email</th>
                            <th className="border border-gray-300 p-2">Name</th>
                            <th className="border border-gray-300 p-2">Role</th>
                            <th className="border border-gray-300 p-2">Status</th>
                            <th className="border border-gray-300 p-2">Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="border border-gray-300 p-2">{user.id}</td>
                                <td className="border border-gray-300 p-2">{user.email}</td>
                                <td className="border border-gray-300 p-2">{user.name}</td>
                                <td className="border border-gray-300 p-2">{user.role}</td>
                                <td className="border border-gray-300 p-2">
                                    {user.is_active ? 'Active' : 'Inactive'}
                                </td>
                                <td className="border border-gray-300 p-2">
                                    {new Date(user.date_created).toLocaleString()}
                                </td>
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
