import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <ul className='item-container'>
                        <li className='nav-item'>
                            <Link to='/'>
                                About Me
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/'>
                                My Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/'>
                                Contact
                            </Link>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}
export default Navbar;