import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://reqres.in/api/login', {
                email,
                password,
            });
            localStorage.setItem('token', response.data.token);
            navigate('/users');
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleLogin} className="login-form">
                <input 
                    type="email" 
                    className="form-control input-field" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    className="form-control input-field" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit" className="btn login-button">Login</button>
            </form>
        </div>
    );
};

export default Login;