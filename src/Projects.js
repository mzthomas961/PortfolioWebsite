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
        "summary": "Command Line Interface built entirely  in Ruby, meant to simulate a fully functioing forum."

    },
    {
        "id":2, 
        "title": "Transparent Travel",
        "stack": "Ruby on Rails",
        "frontend": "https://github.com/mzthomas96/TransparentTravel",
        "backend" : "n/a",
        "summary": "Mock web interface for travel agents to bpok vacations"
    },
    {
        "id":3, 
        "title": "Bean Tracker",
        "stack": "Javascript and Ruby on Rails",
        "frontend": "https://github.com/mzthomas961/BeanTracker-Frontend", 
        "backend":"https://github.com/mzthomas961/BeanTracker-Backend",
        "summary": "Fully functioning Coffeeshop web-app."
    },
    {
        "id":4, 
        "title": "Git Right Kitchen",
        "stack": "React and Ruby on Rails",
        "frontend": "https://github.com/mzthomas961/Git-Right-Recipes-Frontend",
        "backend":"https://github.com/mzthomas961/Git-Right-Recipes-Backend",
        "summary": "React app to find and save recipes"
    },
    {
        "id":5, 
        "title": "Feed Your Neighbor",
        "stack": "React and Ruby on Rails",
        "frontend": "https://github.com/mzthomas961/Feed-Your-Neighbor-Frontend",
        "backend":"https://github.com/mzthomas961/Feed-Your-Neighbor-Backend",
        "summary": "Social network to share/trade homemade food"
    },
    {
        "id":6, 
        "title": "Discord Movie Bot",
        "stack": "Python",
        "frontend": "https://github.com/mzthomas961/MovieBot",
        "backend":"n/a",
        "summary": "Discord bot that gives random recommendations based on user input. Can filteer by genre and cast"

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
            summary = {project.summary}
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