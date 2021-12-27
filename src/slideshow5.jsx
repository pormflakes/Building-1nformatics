import React from 'react'
import { Carousel } from "react-bootstrap";
import Img51 from './assets/img51.jpg';
import Img52 from './assets/img52.jpg';
import Img53 from './assets/img53.png';
import './slideshow.css'
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Slideshow5() {
    return (
        <Container>
        <Row>
          <Col><div class="help">
            <Carousel >
  <Carousel.Item >
  <img   src={Img51} alt="piechart" height="496px" width="700px" ></img>
    
  </Carousel.Item>
  <Carousel.Item>
  <img  src={Img52} alt="piechart" height="496px" width="700px" ></img>

  
  </Carousel.Item>
  
   <Carousel.Item>
  <img  src={Img53} alt="piechart" height="496px" width="700px" ></img>


  </Carousel.Item>

  
  

 
 
</Carousel>
        </div></Col>
          <Col className='ikweet'>Various projects from over the years.</Col>
        </Row>
      </Container>
        
    )
}
