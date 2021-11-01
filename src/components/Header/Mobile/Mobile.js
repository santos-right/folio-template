import React from 'react'
import './Mobile.css'

function Mobile({isOpen, setIsOpen}) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
                <i className="fas fa-times"></i>
            </div>
            <div className="mobile-options">
                <div className="mobile-option">
                    <a href="#project">
                        <i className="fas fa-paint-brush option-icon"></i>Projects
                    </a>
                </div>
                <div className="mobile-option">
                    <a href="#skill">
                        <i className="fas fa-laptop option-icon"></i>Skills
                    </a>
                </div>
                {/* <div className="mobile-option">
                    <a href="#work">
                        <i className="fas fa-briefcase option-icon"></i>Work
                    </a>
                </div> */}
                <div className="mobile-option">
                    <a href="#contact">
                        <i className="fas fa-user option-icon"></i>Contact
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Mobile
