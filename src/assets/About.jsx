import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function About() {
  return (
    <div>
      <Container>
        <Row className='mt-5 align-item-center'>
          <Col md={6}> 
            <h1 style={{color:"orangered"}} className='fw-bolder'> About Us</h1>
            <p className='py-3 fs-5'>Full cleaning and housekeeping services for companies and households.</p>
            <p className='pb-3 fs-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.Lorem Ipsum is simply</p>
            <Button variant='dark' className='p-3 px-5 btn1 fs-5'style={{ borderRadius: '0' }} >LEARN MORE</Button>
            
          </Col>
          <Col md={6}>
          <img src='./images/about-img.png' className='img-fluid mx-auto d-block w-100' alt=''/>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default About