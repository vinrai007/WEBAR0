// src/Homepage.js
import React from 'react';
// import ShootingStar from '../ShootingStar';
import Logov from '../assets/home-bgvideo.mp4';
import cc from '../assets/cc.jpg';
import te from '../assets/te.jpg';
import ts from '../assets/ts.jpg';

import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

// import './Homepage.css'; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';

const Homepage = () => (
    <div className='home-page'>
        <div className="video-container">
      <video autoPlay muted loop id="bgVideo">
        <div className='slide1-colour'>

        </div>
                <source src={Logov} type="video/mp4"/>
                {/* <!-- Add additional <source> elements for different video formats if needed --> */}
                Your browser does not support the video tag.
      </video>
        </div>
        <div className='slide1'>
            <h1> 
                <br/><span className='you'>WEBIAR </span>
            </h1>
            {/* <h1>Better For Everyone </h1> */}
            
            <h2> by <a href='https://vinayak-rai.onrender.com/'>VINAYAK RAI</a></h2>
            <h4> "Crafting Your Digital Presence"

</h4>      
        </div>      

        {/* </div> */}
        <div className='slide2'>

            {/* <h1>Better For Everyone </h1> */}
            <h4>
                Welcome to WEBIAR, where creativity meets technology, and visions become vibrant digital realities. As a website creation agency, we are committed to transforming your online presence into a captivating and engaging experience for your audience.
<br/>
            </h4>
      <h2 className='mission'>
        
                Our Mission

            </h2>
            <h4>
Our mission at WEBIAR is simple: to empower businesses and individuals with cutting-edge digital solutions that drive growth and success. We strive to exceed expectations by delivering high-quality websites that not only impress but also inspire action.

            </h4>
    </div>
        <div className='a-slide3'>
            <h1>
                <span className='your'>
                                    Why Choose WEBIAR?

                </span>
</h1>
            
    <div className="grid-container">
                <div className="grid-item">
                                    <Card style={{ width: '320px' , height: '540px'}}>
      <Card.Img variant="top" src={ts} />
      <Card.Body>
        <Card.Title>Tailored Solutions</Card.Title>
        <Card.Text>
We understand that every business is unique. That's why we take a personalized approach to every project, ensuring that your website reflects your brand personality and goals.        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
            </Card>
                    </div>
                <div className="grid-item">
                                    <Card style={{ width: '320px' , height: '540px'}}>
      <Card.Img variant="top" src={te} />
      <Card.Body>
        <Card.Title>Technical Expertise</Card.Title>
        <Card.Text>
          With a deep understanding of the latest technologies and trends, we leverage the power of web development to deliver seamless and robust online experiences.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
            </Card>
                    </div>
                <div className="grid-item">
                                    <Card style={{ width: '320px' , height: '540px'}}>
      <Card.Img variant="top" src={cc} />
      <Card.Body>
        <Card.Title>Customer-Centric Approach</Card.Title>
        <Card.Text>
          Your satisfaction is our priority. We listen closely to your needs and collaborate with you every step of the way to ensure that your vision is brought to life.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
            </Card>
                    </div>
    </div>

     

    </div>
    <div className='slide4'>
      <h1>
        Go Online with Us <br/>
        <span>
          Reach out to everyone and anyone around the world 
        </span>
      </h1>
                  <Link to="/Contact">
                    <Button variant="dark" >
                                           Contact Us
          </Button></Link>      
    </div>
    </div>
);

export default Homepage;
