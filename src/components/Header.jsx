import React from 'react'
import '../styles/Header.css'
import Hero from './Hero'
import NavbarComp from './NavbarComp'
function Header() {
    return (
        <div className="header" id="home">
            <NavbarComp />
            <Hero />
        </div>
    )
}

export default Header
