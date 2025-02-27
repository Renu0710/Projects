import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Services() {
  return (
    <div className='bgimg'>
      <Container className='text-center text-white my-5 p-5'>
        <h1> Services</h1>
        <p>Typesetting industry lorem Ipsum is simply dummy text of the</p>
        <Row>
          <Col>
            <Card style={{ width: '20rem' }} className='border-0 p-3'>
              <img src="./images/icon1.png" className='mx-auto d-block p-4 ' alt='' />
              <Card.Body>
                <Card.Title className='fs-2 mb-3'>Original Coffee</Card.Title>
                <Card.Text>
                  Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                </Card.Text>
                <Button variant="dark" className='px-5 mt-4 mx-auto'>READ MORE</Button>
              </Card.Body>
            </Card>

          </Col>
          <Col>
            <Card style={{ width: '20rem' }} className='border-0 p-3'>
              <img src="./images/icon2.png" className='mx-auto d-block p-2' alt='' />
              <Card.Body>
                <Card.Title className='fs-2 mb-3'>20 Coffee Flavors
                </Card.Title>
                <Card.Text>
                  Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                </Card.Text>
                <Button variant="dark" className='px-5 mt-4 mx-auto'>READ MORE</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '20rem' }} className='border-0 p-3'>
              <img src="./images/icon3.png" className='mx-auto d-block ' alt='' />
              <Card.Body>
                <Card.Title className='fs-2 mb-3'>Pleasant Abient</Card.Title>
                <Card.Text>
                  Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                </Card.Text>
                <Button variant="dark" className='px-5 mt-4 mx-auto'>READ MORE</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Services