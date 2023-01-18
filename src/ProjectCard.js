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
        "backend": "n/a",
        "summary": "Command Line Interface built entirely  in Ruby, meant to simulate a fully functioing forum.",
        "image": "/images/CLI.png"

    },
    {
        "id":2, 
        "title": "Transparent Travel",
        "stack": "Ruby on Rails",
        "frontend": "https://github.com/mzthomas96/TransparentTravel",
        "backend" : "n/a",
        "summary": "Mock web interface for travel agents to bpok vacations",
        "image": "/images/TT.png"
    },
    // ... more project data
    ]
    const projectObjects = data.map((project) => {
        return(
            <ProjectCard
            key = {project.id}
            title = {project.title}
            stack = {project.stack}
            frontend = {project.frontend}
            backend = {project.backend}
            summary = {project.summary}
            image = {project.image}
            />
        )
    })

    return (
       <div className="projects-div">
        <Container>
          <CardDeck className="card-deck">
            {projectObjects}
          </CardDeck>
        </Container>
       </div>
    )
}
export default Projects;
