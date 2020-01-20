import React from 'react'

import './Resume.css'

const Resume = () => {
    return(
        <div className='resume'>
            <img id='resume' src={require('../Images/cody_shaben_resume_1_20_20.png')}/>
            {/* <div className="resume-container"></div> */}
        </div>
    )
}

export default Resume