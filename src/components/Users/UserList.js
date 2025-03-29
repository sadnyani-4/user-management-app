import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([]); // All users
    const [filteredUsers, setFilteredUsers] = useState([]); // Users after filtering
    const [searchQuery, setSearchQuery] = useState(''); // Search input
    const [page, setPage] = useState(1);
    const navigate = useNavigate();

    // Check for authentication
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/'); // Redirect to login if no token
        }
    }, [navigate]);

    // Fetch users when the component mounts or page changes
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
                setUsers(response.data.data);
                setFilteredUsers(response.data.data); // Set filtered users same initially
            } catch (err) {
                console.error(err);
            }
        };
        fetchUsers();
    }, [page]);

    // Update filtered users based on the search query
    useEffect(() => {
        const results = users.filter(user => 
            user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (`user${user.id}@example.com`).includes(searchQuery.toLowerCase()) // Assuming email format for simulation
        );
        setFilteredUsers(results);
    }, [searchQuery, users]);

    // Handle editing the user
    const handleEdit = (user) => {
        navigate(`/users/edit/${user.id}`, { state: { user } });
    };

    // Handle deleting the user
    const handleDelete = async (id) => {
        await axios.delete(`https://reqres.in/api/users/${id}`);
        setUsers(users.filter(user => user.id !== id));
        setFilteredUsers(filteredUsers.filter(user => user.id !== id)); // Update filtered users too
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>User List</h1>

            {/* Search Bar */}
            <input
                type="text"
                placeholder="Search by name or email"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-control mb-4"
            />

            <div className="row">
                {filteredUsers.map(user => (
                    <div className="col-md-4 mb-4" key={user.id}>
                        <div className="card shadow-sm">
                            <div className="card-img-wrapper">
                                <img src={user.avatar} alt={user.first_name} className="card-img-top rounded-circle" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-primary" onClick={() => handleEdit(user)}>Edit</button>
                                    <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-secondary" onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                <button className="btn btn-secondary" onClick={() => setPage(page + 1)}>Next</button>
            </div>
        </div>
    );
};

export default UserList;