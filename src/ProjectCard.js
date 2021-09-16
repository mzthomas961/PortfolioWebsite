import React from 'react';
import Card from 'react-bootstrap/Card'



function ProjectCard({frontend,backend,stack,title,summary,image}){
    console.log(image)
    return(
        <Card className = 'box'style={{ width: '31rem' }} style={{flex: 1}} className="card">
        <Card.Img src={image} className="card-image" width="135" height="125"/>
        <Card.Body>
          <Card.Title className="card_title">
              {title}
              </Card.Title>
          <Card.Text className="card-text">
            Tech Stack: {stack}<br />
            <br />
            {summary}
            
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