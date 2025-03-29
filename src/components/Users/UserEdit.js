import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import './UserEdit.css';

const UserEdit = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = location.state;

    useEffect(() => {
        if (user) {
            setFirstName(user.first_name);
            setLastName(user.last_name);
            setEmail(`user${user.id}@example.com`);
        }
    }, [user]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const updatedUser = await axios.put(`https://reqres.in/api/users/${user.id}`, {
                first_name: firstName,
                last_name: lastName,
                email,
            });
            navigate('/users', { state: { user: updatedUser.data }});
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="user-edit-container">
            <h1 className="user-edit-title">Edit User</h1>
            <form onSubmit={handleUpdate} className="user-edit-form">
                <input 
                    type="text" 
                    className="user-edit-input" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                    placeholder="First Name" 
                    required 
                />
                <input 
                    type="text" 
                    className="user-edit-input" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                    placeholder="Last Name" 
                    required 
                />
                <input 
                    type="email" 
                    className="user-edit-input" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Email" 
                    required 
                />
                <button type="submit" className="user-edit-button">Update</button>
            </form>
        </div>
    );
};

export default UserEdit;
