import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import UserList from './components/Users/UserList';
import UserEdit from './components/Users/UserEdit';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/users" element={<UserList />} />
                <Route path="/users/edit/:id" element={<UserEdit />} />
            </Routes>
        </Router>
    );
};

export default App;