import React from 'react'
import { Link } from 'react-router';
import '../styles/Navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
        <h2>Mood-Sync</h2>
        <div className="nav-links">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>
    </div>
  )
}

export default Navbar