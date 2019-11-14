import React from 'react'

const ProjectLi = (props) => {
    const { title, description, technology, link } = props.project
    
    return(
        <li className="project-li">
            <h4>{title}</h4>
            <p>{description}</p>
            <p>Technology: {technology}</p>
            <p>Check it out!</p>
            <a
                href={link}
                target='_blank'
            >{link}</a>
        </li>
    )
}

export default ProjectLi