import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <div className='head'>
            <header>
                <h2>AURAC</h2>
                <nav className='navigation'>
                    <Link to='/'>Home</Link>
                    <Link to='/templates'>Templates</Link>
                    <Link to='/profile'>Profile</Link>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;
