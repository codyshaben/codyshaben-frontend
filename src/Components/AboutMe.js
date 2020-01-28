import React, { Component } from 'react'

import './AboutMe.css'
import EmailForm from './EmailForm'


class AboutMe extends Component {
    state = {
        isContactFormShowing: false,
    }

    toggleContactFormShowing = () => {
        this.setState({
            isContactFormShowing: !this.state.isContactFormShowing
        })
    }


    render(){
        return(
            <div className="about">
                <div className="about-me">
                    <h2>About Me</h2>
                    <p id="about-me-p">Hello and welcome to my personal page! My name is Cody Shaben and I'm a software developer based out of Denver, CO. I recently graduated from Flatiron School's software engineering immersive program and am extremely excited to join a passionate team filled with like-minded people! One of the things I like most about developing is how the technologies are constantly changing which is constantly presenting new challenges. I love problem solving and have found that programming can become extremely addicting. In my spare time, I enjoy spending time with my wife and two dogs. We are extremely active outdoor enthusiasts who frequently hike, camp, ski, and pretty much anything else that involves the outdoors. If you would like to reach out to connect or give me any feedback for my site, feel free to click the link below and fill out the form to send me an email.</p>
                    <div className="contact-info">
                        <button 
                            onClick={this.toggleContactFormShowing}
                            className="submit-message"
                        >Send me a message!</button>
                        
                </div>
                {
                    this.state.isContactFormShowing
                        ?  <EmailForm
                            isContactFormShowing={this.state.isContactFormShowing}
                            toggleContactFormShowing={this.toggleContactFormShowing}
                         />
                        :null
                }
                </div>
    
            </div>
        )
    }
    
}

export default AboutMe