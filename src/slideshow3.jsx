import React from 'react'
import { Carousel } from "react-bootstrap";
import Img41 from './assets/img41.jpg';
import Img42 from './assets/img42.jpg';
import Img43 from './assets/img43.jpg';
import './slideshow.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Slideshow3 () {
    return (
      <Container>
      <Row>
        <Col> <div class="help">
            <Carousel >
  <Carousel.Item >
  <img   src={Img41} alt="piechart" height="496px" width="700px" ></img>

  </Carousel.Item>
  <Carousel.Item>
  <img  src={Img42} alt="piechart" height="496px" width="700px" ></img>

  <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img  src={Img43} alt="piechart" height="496px" width="700px" ></img>

  <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
        
        </Col>
        <Col className='ikweet'>'Courtside Dwellings' was the name given to a series of appartments located above an 
        indoor sports field, attached to the 'westerringspoor' a 20th-century railway which has now been transformed into a green belt around Ghent. 
        The apartments are centered around their own private terrace on one side, and have a fabulous view over Ghent on the other. 
        </Col>
      </Row>
    </Container>
       
    )
}
