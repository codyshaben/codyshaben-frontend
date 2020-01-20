import React from 'react'

import './HorizontalNav.css'

const HorizontalNav = () => {
    return(
        <header className="horizontal-div">
            <div id="header-container">
                <h1 id="title-cody">Cody Shaben</h1>
                
                <div id="icons-container">
                    <a 
                        href="https://www.linkedin.com/in/codyshaben/" className="icons icon-linkedin"
                        target="_blank"
                        rel="noopener noreferrer">
                    </a>
                    <a 
                        href="https://github.com/codyshaben"
                        className="icons icon-github"
                        target="_blank"
                        rel="noopener noreferrer">
                    </a>
                    <a 
                        href="https://medium.com/@codyshaben"
                        className="icons icon-medium"
                        target="_blank"
                        rel="noopener noreferrer">
                    </a>
                    <a 
                        href="https://www.facebook.com/cody.shaben"
                        className="icons icon-facebook"
                        target="_blank"
                        rel="noopener noreferrer">
                    </a>
                </div>
            </div>
        </header>
    )
}


export default HorizontalNav