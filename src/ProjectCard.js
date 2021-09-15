import React from 'react';
import Card from 'react-bootstrap/Card'



function ProjectCard({frontend,backend,stack,title,}){
    console.log(backend)
    return(
        <Card className = 'box'style={{ width: '31rem' }} style={{flex: 1}} className="card">
        <Card.Img variant="light" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title className="card_title">
              {title}
              </Card.Title>
          <Card.Text>
            Tech Stack: {stack}<br />
            
          </Card.Text>
        </Card.Body>
        <Card.Body className="card-links">
          <Card.Link href={frontend} >Front End </Card.Link>
          {backend === "n/a" ? null:  <Card.Link href={backend}>Back end</Card.Link>}
        </Card.Body>
      </Card>
    )

}
export default ProjectCard 