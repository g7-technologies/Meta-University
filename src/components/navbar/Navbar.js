import React, { useState, useEffect } from 'react'
import Wrapper, { MobileMenu } from './Navbar.styled'
import { NavHashLink } from 'react-router-hash-link';
// importing icons and images
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaDiscord } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa"
import { FaBars } from "react-icons/fa"

const Navbar = () => {

// mobilemenu open and close function
const [ sideMenu, setSideMenu ] = useState(false);
useEffect(() => {
    let dropdown = document.querySelector(".sideMenu");
    if(sideMenu) {
        dropdown.style.height = 265 + "px";
    }else {
        dropdown.style.height = 0 + "px";
    }
}, [sideMenu])

// scrollinto view
const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

    return (
        <Wrapper>
            <MobileMenu>
                <div className='container mobile-menu-container'>
                    <div className='row mobile-menu-items'>
                        <div className='col mobile-logo'>THE METAVERSE UNIVERSITY</div>
                        <div className='col humberger-button'>
                            <button onClick={() => {setSideMenu(!sideMenu)}}><FaBars /></button>
                        </div>
                    </div>
                    <div className='sideMenu'>
                        <NavHashLink to="/#About" onClick={() => {setSideMenu(!sideMenu)}} scroll={el => scrollWithOffset(el)}>ABOUT</NavHashLink>
                        <NavHashLink to="/#Roadmap" onClick={() => {setSideMenu(!sideMenu)}} scroll={el => scrollWithOffset(el)}>ROADMAP</NavHashLink>
                        <NavHashLink to="/#Rarity" onClick={() => {setSideMenu(!sideMenu)}} scroll={el => scrollWithOffset(el)}>RARITY</NavHashLink>
                        <NavHashLink to="/#Team" onClick={() => {setSideMenu(!sideMenu)}} scroll={el => scrollWithOffset(el)}>TEAM</NavHashLink>
                            <div className="bg-black">
                                <a href='https://instagram.com/themetaverseuniversity' target="blank" ><FaInstagram /></a>
                                <a href='https://twitter.com/themetaverseuni' target="blank" ><FaTwitter /></a>
                                <a href='https://discord.gg/themetaverseuniversity' target="blank" ><FaDiscord /></a>
                                <a href='https://www.tiktok.com/@themetaverseuniversity' target="blank" ><FaTiktok /></a>
                            </div>
                    </div>
                </div>
            </MobileMenu>
            <div className='desktop-menu'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='col'>
                            <div className='Logo'>
                                <h1>THE METAVERSE UNIVERSITY</h1>
                            </div>
                        </div>
                        <div className='col d-flex justify-content-between align-items-center'>
                            <div className='navbar-link'>
                                <NavHashLink to="/#About" scroll={el => scrollWithOffset(el)}>ABOUT</NavHashLink>
                                <NavHashLink to="/#Roadmap" scroll={el => scrollWithOffset(el)}>ROADMAP</NavHashLink>
                                <NavHashLink to="/#Rarity" scroll={el => scrollWithOffset(el)}>RARITY</NavHashLink>
                                <NavHashLink to="/#Team" scroll={el => scrollWithOffset(el)}>TEAM</NavHashLink>
                            </div>
                            <div className='nav-social-media-icons d-flex justify-content-center align-items-center'>
                                <a href='https://instagram.com/themetaverseuniversity' target="blank" ><FaInstagram /></a>
                                <a href='https://twitter.com/themetaverseuni' target="blank" ><FaTwitter /></a>
                                <a href='https://discord.gg/themetaverseuniversity' target="blank" ><FaDiscord /></a>
                                <a href='https://www.tiktok.com/@themetaverseuniversity' target="blank" ><FaTiktok /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar

