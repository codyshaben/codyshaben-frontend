import React from 'react'

import './AboutMe.css'
import EmailForm from './EmailForm'

const AboutMe = () => {
    
    return(
        <div className="about-me">
            <h2>About Me</h2>
            <p>A little something about me</p>
            <div className="contact-info">
                {/* <a  
                    href="mailtto:cshaben87@gmail.com">Send Me an Email</a> */}
                    Send me a message!
                    <EmailForm />
            </div>
        </div>
    )
}

export default AboutMe