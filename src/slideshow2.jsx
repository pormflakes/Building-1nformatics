import React from 'react'
import { Carousel } from "react-bootstrap";
import Img21 from './assets/img21.jpg';
import Img22 from './assets/img22.jpg';
import Img23 from './assets/img23.jpg';
import './slideshow.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Slideshow2() {
    return (
      <Container>
      <Row>
        <Col><div class="help">
            <Carousel >
  <Carousel.Item >
  <img   src={Img21} alt="piechart" height="496px" width="700px" ></img>
    <Carousel.Caption>
     <h3 className= "black">BACH3</h3>
      <p className= "black">COHOUSING</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img  src={Img22} alt="piechart" height="496px" width="700px" ></img>

  
  </Carousel.Item>
  <Carousel.Item>
  <img  src={Img23} alt="piechart" height="496px" width="700px" ></img>

 
  </Carousel.Item>
</Carousel>
        </div>
        
        </Col>
        <Col className='ikweet'> This assignment operated on a smaller scale as usually. Students were asked to design a small but 
        quite modular structure on a plot in the city centre of Ghent. The building should accomodate future changes in the lives of 
        the occupants. Different compartments which could each be closed off or opened up to certain parts of the building made this possible.
        </Col>
      </Row>
    </Container>
        
    )
}
