// src/Homepage.js
import React from 'react';
// import ShootingStar from '../ShootingStar';
import Logov from '../assets/home-bgvideo.mp4';
// import Carousel from 'react-bootstrap/Carousel';
// import CarouselImage1 from '../assets/cosmetics.png';
// import CarouselImage2 from '../assets/hotel.png';
// import CarouselImage3 from '../assets/necklace.png';
// import CarouselImage4 from '../assets/pizza.png';
// import CarouselImage5 from '../assets/coffe.png';
// import CarouselImage6 from '../assets/clothes.png';
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
            <h1>A New way of Catering Service <br/>
                awaits <span className='you'>"You"</span>
                {/* <br/>Better For Everyone  */} 
            </h1>
            {/* <h1>Making Commerce
                <br/>Better For <span className='you'>YOU</span>
            </h1> */}
            {/* <h1>Better For Everyone </h1> */}
            
            <h2>Stay tuned to know more!!</h2>
            {/* <h4>Stay tuned to know more!</h4>       */}
        </div>      

        {/* </div> */}
        <div className='slide2'>
                  <h1>A  Service like <br/>
                    <span className='youu'>"Never Before"</span> <br/>
                {/* <br/>Better For Everyone  */} stay tuned to know more!!
            </h1>
            {/* <h1>Better For Everyone </h1> */}
            

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
                                           Conatact Us
          </Button></Link>      
    </div>
    </div>
);

export default Homepage;
