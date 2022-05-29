import React from 'react'
import {Carousel} from 'react-bootstrap'
import Footer from '../components/Footer'
import HomeNavbar from '../components/HomeNavbar'
function About() {
  return (
    <>
    <HomeNavbar/>
    <div className='about' style={{padding:'60px',backgroundColor:'#000'}}>
      <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Iridium-4_Mission_%2825557986177%29.jpg/1280px-Iridium-4_Mission_%2825557986177%29.jpg"
      alt="spacex"
    />
    <Carousel.Caption>
      <h1>Space X</h1>
      <p>1 Rocket Rd, Hawthorne, CA 90250, United States</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://news.cgtn.com/news/2020-06-04/SpaceX-rocket-launches-60-internet-satellites-into-space-R380hbcHxC/img/691f2f3bc30043a0b59429cf0b945775/691f2f3bc30043a0b59429cf0b945775.jpeg"
      alt="spacex"
    />

    <Carousel.Caption>
      <h1>SpaceX</h1>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.cnbcfm.com/api/v1/image/101717965-494553365.jpg?v=1583511833"
      alt="elonmusk"
    />

    <Carousel.Caption>
      <h1>SpaceX Founder -Elon Musk</h1>
      <p>SpaceX was founded in 2002 by Elon Musk with the goal of reducing space transportation costs to enable the colonization of Mars.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
    <Footer/>
    </>
  )
}

export default About