import React from 'react';
import { SocialData } from '../../Data/Social';
import './SocialContact.css'

function SocialContact() {
    const data = SocialData;
    return (
        <div className="social-contact">
            {data.map((item, index) =>{
                return (
                    <a href={item.link} key={index}>
                        <div className="social-icon-div">
                            <img src={item.icon} className="social-icon" />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default SocialContact
