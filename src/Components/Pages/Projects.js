import React from 'react';
import Slideshow from '../../slideshow';
import Slideshow2 from '../../slideshow2';
import Slideshow3 from '../../slideshow3';
import Slideshow4 from '../../slideshow4';
import Slideshow5 from '../../slideshow5';
import { Accordion } from 'react-bootstrap';


function Projects() {
    return (
        <div> 
<Accordion defaultActiveKey="10">
 
<Accordion.Item eventKey="3">
    <Accordion.Header>Woodifications</Accordion.Header>

    <Accordion.Body>
    <Slideshow4 />
    </Accordion.Body>
  </Accordion.Item>
 
  <Accordion.Item eventKey="0">
    <Accordion.Header>The Service Center</Accordion.Header>
    <Accordion.Body>
    <Slideshow />
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Co-Housing</Accordion.Header>
    <Accordion.Body>
    <Slideshow2 />
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>Courtside Dwellings</Accordion.Header>

    <Accordion.Body>
    <Slideshow3 />
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="4">
    <Accordion.Header>Varia</Accordion.Header>

    <Accordion.Body>
    <Slideshow5 />
    </Accordion.Body>
  </Accordion.Item>

</Accordion>
           
            
        </ div>
    )
}

export default Projects