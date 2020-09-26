import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.scss'

const Header = () => {
    return (
        <>
            <header className="header">
                <img src="./img/Logo original RGB.png" alt="logo" className="header__logo" />
                <nav className="header__navbar">
                    <NavLink className="link" to="/"><div>HOME</div></NavLink>
                    <NavLink className="link" to="/about-us"><div>ABOUT US</div></NavLink>
                </nav>
            </header>
        </>
    )
}

export default Header;