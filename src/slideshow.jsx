import React from 'react'
import { Carousel } from "react-bootstrap";
import Img11 from './assets/img11.jpg';
import Img12 from './assets/img12.jpg';
import Img13 from './assets/img13.jpg';
import './slideshow.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Slideshow() {
    return (
      <Container>
  <Row>
    <Col><div class="help">
            <Carousel >
  <Carousel.Item >
  <img   src={Img11} alt="piechart" height="595px" width="840px" ></img>
    
  </Carousel.Item>
  <Carousel.Item>
  <img  src={Img12} alt="piechart" height="595px" width="840px" ></img>

  
  </Carousel.Item>
  <Carousel.Item>
  <img  src={Img13} alt="piechart" height="595px" width="840px" ></img>

 
  </Carousel.Item>
</Carousel>
        </div></Col>
    <Col>
    <div className='ikweet '>
      Developed in the second semester of the third bachelor year, this project was the final and most important assignment of the bachelors.
       The program asked for a variety of functions, amongst others, a library, cafetaria and a small police station. The result is a carefully planned 
       building, structured around a communal square. A lot of attention went to the detailing of the building envelope.
    </div>
    </Col>
  </Row>
</Container>
        
    )
}
