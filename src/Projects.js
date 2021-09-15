import React from 'react';
import ProjectCard from './ProjectCard';
import { Container, Row,Col } from "react-bootstrap";



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
<Row xs="1" md="2">
      <Col xs = "1" md = "2">
    {projectObjects}
    </Col>
  </Row>
</Container>
        </div>
      
    )
}
export default Projects