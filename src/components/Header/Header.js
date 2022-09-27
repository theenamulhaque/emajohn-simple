import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt="" />

            <div className="menu">
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/products">Products</a>
                <a href="/contact">Contact</a>
            </div>
        </nav>
    );
};

export default Header;
