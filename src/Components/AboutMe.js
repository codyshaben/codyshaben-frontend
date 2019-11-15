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
            <div className="about-me">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <Carousel />
                {/* <img className="picture-slides" alt="Not Loading" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/51346013_10101741428196437_1556390302896357376_n.jpg?_nc_cat=111&_nc_oc=AQnJ_SiAkxQ3M4Hh9s8MvttMtRnlvNLVwpQLXNU2MF31mK0I_LWPaybYuPCheOXWDf4&_nc_ht=scontent-ort2-1.xx&oh=a0dea33c2742a80dc20859f1612a174a&oe=5E8993B2"></img> */}
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
        )
    }
    
}

export default AboutMe