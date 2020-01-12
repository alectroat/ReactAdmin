import React from 'react';
import { Link } from 'react-router-dom';

export const UIDesign = () => (
    <div className="sidenav">
        <Link to="/register/list">Registration</Link>
        <Link to="/">Home</Link>
    </div>
);

export const NavBar = ({ user }) => (
    <div className="NavBar2">
        <div className="dropdown">
            <button className="dropbtn">Hi {user.firstName}!</button>
            <div className="dropdown-content">
                <Link to="/login">Logout</Link>
            </div>
        </div>
    </div>
);