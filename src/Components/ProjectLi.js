import React from 'react'

const ProjectLi = (props) => {
    const { title, description, technology, link } = props.project
    
    return(
        <li className="project-li">
            <h4 className="project-title">{title}</h4>
            <p className="project-info"><b>Description: </b>{description}</p>
            <p  className="project-info"><b>Technology: </b>{technology}</p>
            <p className="project-info">Check it out!</p>
            <a
                href={link}
                target='_blank'
                rel="noopener noreferrer"
            >{link}</a>
        </li>
    )
}

export default ProjectLi