import React, { useState } from 'react';
import logo_light from '../../assets/logo-black.png';
import logo_dark from '../../assets/logo-white.png';
import Search_icon_light from '../../assets/search-w.png';
import Search_icon_dark from '../../assets/search-b.png';
import toogle_light from '../../assets/night.png';
import toogle_dark from '../../assets/day.png';
import './Navbar.css';
import Section from '../Hero/Section';
import { Link } from 'react-router-dom';

const Navbar = ({ theme, setTheme }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
      <>
        <nav className={`Navbar ${menuOpen ? 'open' : ''} ${theme}`}>
            <img src={theme === 'light' ? logo_light : logo_dark} alt='logo' className='logo' />

            {/* Menu Button for Mobile */}
            <div className='menu-btn' onClick={toggleMenu}>
                <span className={`menu-btn-icon ${menuOpen ? 'open' : ''}`}></span>
            </div>

            {/* Navigation Links */}
            <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/About"}>About</Link></li>
                <li><Link to={"/Courses"}>Courses</Link></li>
                <li><Link to={"/Contact"}>Home</Link></li>
            </ul>

            <div className='search-box'>
                <input type='text' placeholder='Search....' />
                <img src={theme === 'light' ? Search_icon_light : Search_icon_dark} alt='search icon' />
            </div>

            <img onClick={toggleMode} src={theme === 'light' ? toogle_light : toogle_dark} alt='toggle theme' className='toggle-icon' />
        </nav>

        
      </>
    );
};

export default Navbar;
