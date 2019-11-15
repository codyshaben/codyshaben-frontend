import React, { Component } from 'react'

import './AboutMe.css'
import EmailForm from './EmailForm'
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
                        <a
                            onClick={this.toggleContactFormShowing}
                            className="submit-message"
                        >Send me a message!</a>
                        
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
                
                <Carousel />
                {/* <img className="picture-slides" alt="Not Loading" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/51346013_10101741428196437_1556390302896357376_n.jpg?_nc_cat=111&_nc_oc=AQnJ_SiAkxQ3M4Hh9s8MvttMtRnlvNLVwpQLXNU2MF31mK0I_LWPaybYuPCheOXWDf4&_nc_ht=scontent-ort2-1.xx&oh=a0dea33c2742a80dc20859f1612a174a&oe=5E8993B2"></img> */}
                
            </div>
        )
    }
    
}

export default AboutMe