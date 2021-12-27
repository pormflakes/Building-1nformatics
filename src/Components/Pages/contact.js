
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Contact.css'


export default function App() {
  return (
    <Container>
   <br /> 
   <br /> 
   <br /> 
    <Row>
    <Col className='basic' sm={1}></Col>
      <Col  className='basicbig' sm={5}>Let's talk</Col>
      <Col sm={4}>I'm always up for collaborations, I love meeting new people and exploring new opportunities.
       So don't hesitate to contact me via email, or one of my socials.</Col>
    </Row>
    <br /> 
    <br /> 
    <br /> 
    <br /> 
    <br /> 
    
    <Row className='basicbold'>
      <Col sm={1}></Col>
      <Col sm={4}>
           </Col>
      <Col sm={1}>Email:</Col>
      <Col sm={2}></Col>
      <Col sm={1}>Phone</Col>
      <Col sm={3}></Col>
    </Row>
 
    <Row>
      <Col sm={5}></Col>
      <Col sm={1}>
          <a href="mailto:ruben.leroy@ugent.be">
              ruben.leroy@ugent.be
          
          </a>
          </Col>
      <Col sm={2}></Col>
      <Col sm={1}>+32479727480</Col>
      <Col sm={3}></Col>
    </Row>
    <br /> 
    <br /> 
    <br /> 
    <br /> 
    <br /> 
    <br /> 
    <br /> 
    
  </Container>
  )
}