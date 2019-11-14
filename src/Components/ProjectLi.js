import React from 'react'

const ProjectLi = (props) => {
    const { title, description, technology, link } = props.project
    
    return(
        <li className="project-li">
            <h3 className="project-title">{title}</h3>
            <p><b>Description: </b>{description}</p>
            <p><b>Technology: </b>{technology}</p>
            <p>Check it out!</p>
            <a
                href={link}
                target='_blank'
                rel="noopener noreferrer"
            >{link}</a>
        </li>
    )
}

export default ProjectLi