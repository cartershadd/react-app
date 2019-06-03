import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>To Do List</h1>
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#1ac771',
    color: '#000000',
    textAlign: 'center',
    padding: '10px'
    };

const linkStyle = {
    textDecoration: 'none',
    padding: '5px'
}

export default Header