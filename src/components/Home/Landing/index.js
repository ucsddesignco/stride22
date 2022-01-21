import React from 'react'
import LandingImage from '../../../assets/images/home/home1.svg'

import './style.css'

function Landing() {
    return (
        <div className="landing">
            <img src={LandingImage} alt="Landing Page Hero Image"></img>
            <div className="landing__content">
                <h1>Stride Micro Design Career Fair</h1>
                <h2>February 5th, 2022<br/>9-11AM, 12-2PM</h2>
                <p>Stride strives to offer our top design students the opportunity to begin building long-term relationships with professionals in the field(s) of human-centered design, human factors, user research, user experience, interaction design, UI design, visual design, content strategy, product development, brand design, product design, UX engineering, web development, and much more.</p>
                <a href="">APPLY NOW</a>
            </div>
        </div>
    )
}

export default Landing
