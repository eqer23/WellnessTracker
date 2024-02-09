import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <Link to="/" className='navbar-brand'>Wellness Tracker</Link>
            </div>
            <div className='navbar-right'>
                <Link to="/login" className='navbar-link'>Login</Link>
                <Link to="/role" className='navbar-link'>Register</Link>
            </div>
        </nav>
    );
};

export default Navbar;