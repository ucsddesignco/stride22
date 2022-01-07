import React from 'react'
import LandingImage from '../../../assets/landing.png'

import './style.css'

function Landing() {
    return (
        <div className="landing">
            <div className="landing__content">
                <h1>Stride Micro Design Career Fair</h1>
                <h2>January 14th, 2020<br/>11AM - 4PM (Doors close 3:45PM)</h2>
                <h2>PC East Ballroom</h2>
                <p>Stride connects top design students to career opportunities in the fields of human-centered design, human factors, user research, user experience, interaction design, UI design, visual design, content strategy, product development, brand design, product design, UX engineering, web development, and much more.</p>
                <a>REGISTER YOUR COMPANY</a>
            </div>
            <img src={LandingImage} alt="Landing Page Hero Image"></img>
        </div>
    )
}

export default Landing
