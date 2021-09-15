import React from 'react';
import ProjectCard from './ProjectCard';
import { Container } from "react-bootstrap";
import CardDeck from 'react-bootstrap/Card'





function Projects(){
    const data = [
        {
        "id":1, 
        "title": "Ruby CLI",
        "stack": "Ruby",
        "frontend": "https://github.com/mzthomas961/Ruby-CLI",
        "backend": "n/a"
    },
    {
        "id":2, 
        "title": "Transparent Travel",
        "stack": "Ruby on Rails",
        "frontend": "https://github.com/mzthomas96/TransparentTravel",
        "backend" : "n/a"
    },
    {
        "id":3, 
        "title": "Bean Tracker",
        "stack": "Javascript and Ruby on Rails",
        "frontend": "https://github.com/mzthomas961/BeanTracker-Frontend", 
        "backend":"https://github.com/mzthomas961/BeanTracker-Backend"
    },
    {
        "id":4, 
        "title": "Git Right Kitchen",
        "stack": "React and Ruby on Rails",
        "frontend": "https://github.com/mzthomas961/Git-Right-Recipes-Frontend",
        "backend":"https://github.com/mzthomas961/Git-Right-Recipes-Backend"
    },
    {
        "id":5, 
        "title": "Feed Your Neighbor",
        "stack": "React and Ruby on Rails",
        "frontend": "https://github.com/mzthomas961/Feed-Your-Neighbor-Frontend",
        "backend":"https://github.com/mzthomas961/Feed-Your-Neighbor-Backend"
    }
    

    ]
    const projectObjects = data.map((project) => {
        return(
            <ProjectCard
            key = {project.id}
            title = {project.title}
            stack = {project.stack}
            frontend = {project.frontend}
            backend = {project.backend}
            />
        )
    })

    return (
       <div>

<Container style={{display: 'flex', flexDirection: 'row'}} className="box">
<CardDeck  style={{
          display: "grid",
          gridTemplateColumns: "390px 390px 390px",
          margin: "15px 15px 15px 15px",
        }}>
    {projectObjects}
    </CardDeck>
</Container>
        </div>
      
    )
}
export default Projects