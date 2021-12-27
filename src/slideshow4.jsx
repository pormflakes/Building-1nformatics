import React from 'react'
import { Carousel } from "react-bootstrap";
import Img61 from './assets/img61.png';
import Img62 from './assets/img62.jpg';
import Img64 from './assets/img64.jpg';
import Img65 from './assets/img65.jpg';
import './slideshow.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Slideshow4() {
    return (
        <Container>
        <Row>
          <Col><div class="help">
            <Carousel >
  <Carousel.Item >
  <img   src={Img61} alt="piechart" height="496px" width="700px" ></img>
    
  </Carousel.Item>
  <Carousel.Item>
  <img  src={Img62} alt="piechart" height="496px" width="700px" ></img>

  
  </Carousel.Item>
  
   <Carousel.Item>
  <img  src={Img64} alt="piechart" height="496px" width="700px" ></img>


  </Carousel.Item>

  
  <Carousel.Item>
  <img  src={Img65} alt="piechart" height="496px" width="700px" ></img>


  </Carousel.Item>

 
 
</Carousel>
        </div></Col>
          <Col className='ikweet'>The Dead Friends studio, given by Johannes Robbrecht of 'Robbrecht & Daem' and Dirk Somers of 'Bovenbouw architectuur'
          in the fall semester of 2021 focused on constructing an alternate history of the 20th century. One where materials as concrete, steel and fa-glass
          weren't as dominant. My design of this studio focused on the Whitney Museum, originally designed by Marcel Breuer.
           </Col>
        </Row>
      </Container>
        
    )
}
