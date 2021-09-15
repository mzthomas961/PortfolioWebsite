import React from 'react';
import ProjectCard from './ProjectCard';

function Projects(){
    const data = [
        {
        "id":1, 
        "title": "Ruby CLI",
        "stack": "Ruby",
        "Github": "https://github.com/mzthomas961/Ruby-CLI"
    },
    {
        "id":2, 
        "title": "Transparent Travel",
        "stack": "Ruby on Rails",
        "Github": "https://github.com/mzthomas96/TransparentTravel"
    },
    {
        "id":3, 
        "title": "Bean Tracker",
        "stack": "Javascript and Ruby on Rails",
        "Github": "https://github.com/mzthomas961/BeanTracker-Frontend(Frontend) + https://github.com/mzthomas961/BeanTracker-Backend(Backend)"
    },
    {
        "id":4, 
        "title": "Git Right Kitchen",
        "stack": "React and Ruby on Rails",
        "Github": "https://github.com/mzthomas961/Git-Right-Recipes-Frontend(Frontend)+ https://github.com/mzthomas961/Git-Right-Recipes-Backend(Backend)"
    }

    ]
    const projectObjects = data.map((project) => {
        return(
            <ProjectCard
            key = {project.id}
            title = {project.title}
            stack = {project.stack}
            github = {project.github}
            />
        )
    })

    return (
       <div>{projectObjects}</div>
    )
}
export default Projects