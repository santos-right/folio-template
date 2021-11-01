import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <p className="para">
                Copyright <i className="far fa-copyright"></i> {new Date().getFullYear()} Santos-right. All Right Reserved
            </p>
        </div>
    )
}

export default Footer
