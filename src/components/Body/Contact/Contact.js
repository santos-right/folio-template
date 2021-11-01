import React from 'react';
import Separator from "../../common/Separator/Separator";
import SocialContact from "../../common/Social-contact/SocialContact";
import './Contact.css'

function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>Want to get in  touch? Contact me on any of the platform</p>
                    <SocialContact />
                </div>
                <div className="download">
                    <a download href={require('../../../assets/santos.pdf').default}>
                        <i className="fas fa-cloud-download-alt download-icon"></i>
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
