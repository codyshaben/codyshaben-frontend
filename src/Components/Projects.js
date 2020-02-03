import React from  'react'

import './Projects.css'

import ProjectLi from './ProjectLi'


const Projects = (props) => {
    const { user } = props
    const project = user.repositories.map(project => {
        return <ul className="project-ul" key={project.id}>
            <ProjectLi project={project} />
        </ul>
    })
    return(
        <div className="projects">
            <div className="project-container">{project}</div>
        </div>
    )
}

export default Projects