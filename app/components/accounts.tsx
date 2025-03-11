import React from 'react';

const Accounts = () => {
    // Placeholder for stored accounts
    const accounts = [
        { username: 'user1', password: 'pass1' },
        { username: 'user2', password: 'pass2' },
    ];

    return (
        <div>
            <h2>Accounts</h2>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {accounts.map((account, index) => (
                        <tr key={index}>
                            <td>{account.username}</td>
                            <td>{account.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Accounts; 