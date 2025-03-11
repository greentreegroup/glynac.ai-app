import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleRegister = () => {
        // Logic to save the username and password
        // For now, we will just log them
        console.log('Registered:', { username, password });
        history.push('/'); // Redirect to login or dashboard after registration
    };

    return (
        <div>
            <h2>Create Account</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register; 