import React, { useState } from "react";
import Web from './Web/Web';
import Mobile from './Mobile/Mobile';
import avatar from '../../assets/Home/main-logo.png'
import './Header.css'

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="header">
            <div className="logo">
                <img src={avatar} alt="" />
            </div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <i className="fas fa-th-large menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen ={isOpen} setIsOpen={setIsOpen} />}
                </div>
            </div>
        </div>
    )
}

export default Header
