// src/Homepage.js
import React from 'react';
// import ShootingStar from '../ShootingStar';
import Logov from '../assets/home-bgvideo.mp4';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../assets/cosmetics.png';
import CarouselImage2 from '../assets/hotel.png';
import CarouselImage3 from '../assets/necklace.png';
import CarouselImage4 from '../assets/pizza.png';
import CarouselImage5 from '../assets/coffe.png';
import CarouselImage6 from '../assets/clothes.png';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

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
            <h1>Making Commerce
                <br/>Better For <span className='you'>YOU</span>
            </h1>
            {/* <h1>Better For Everyone </h1> */}
            
            {/* <h2> by <a href='https://vinayak-rai.onrender.com/'>VINAYAK RAI</a></h2> */}
            <h4 className='home4'>WEBIAR, a  website creation agency, committed to transforming your online presence into a captivating and engaging experience for your audience.</h4>      
        </div>      

        {/* </div> */}
        <div className='slide2'>
                  <h1>Join the community and explore the endless oppertunity of <span className='you'>"Internet"</span>
                {/* <br/>Better For Everyone  */}
            </h1>
            {/* <h1>Better For Everyone </h1> */}
            

    </div>
    <div className='slide3'>
         <Carousel fade>
        <Carousel.Item>
          <img src={CarouselImage1} alt="Cosmetics" />
        {/* <CarouselImage1 text="First slide" /> */}

      </Carousel.Item>
      <Carousel.Item>
          <img src={CarouselImage2} alt="Cosmetics" />

      </Carousel.Item>
      <Carousel.Item>
          <img src={CarouselImage3} alt="Cosmetics" />

        </Carousel.Item>
      <Carousel.Item>
          <img src={CarouselImage4} alt="Cosmetics" />

        </Carousel.Item>
      <Carousel.Item>
          <img src={CarouselImage5} alt="Cosmetics" />

        </Carousel.Item>
      <Carousel.Item>
          <img src={CarouselImage6} alt="Cosmetics" />
          {/* <h1>
            hello 
          </h1> */}
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
      {/* <Carousel.Item>
          <img src={CarouselImage1} alt="Cosmetics" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>         */}
      </Carousel>
      <h1>
        Whether you own a Cosmetics brand or a Hotel, a Jewelry store, a Fast Food restaurant, a Cafe, or a Clothing store <br/> <span className='you'>We have got you covered !!</span> 
      </h1>
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
