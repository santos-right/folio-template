import React from 'react'
import SocialContact from '../../common/Social-contact/SocialContact'
import './About.css'

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    Hello I am 
                    <br/> <span className="info-name">Philip Santos</span> . 
                    <br/>Web Developer and a graphics designer
                </div>
                <div className='about-photo'>
                    <img className="about-image" src={require('../../../assets/Home/banner-image.png').default} />
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About
