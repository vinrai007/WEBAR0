// src/Homepage.js
// import React from 'react';
import React, { useState, useEffect } from 'react';
import BouncingBalls from '../BouncingBalls';

// import ShootingStar from '../ShootingStar';
// import Logov from '../assets/home-bgvideo.mp4';
// import Carousel from 'react-bootstrap/Carousel';
// import CarouselImage1 from '../assets/cosmetics.png';
// import CarouselImage2 from '../assets/hotel.png';
// import CarouselImage3 from '../assets/necklace.png';
// import CarouselImage4 from '../assets/pizza.png';
// import CarouselImage5 from '../assets/coffe.png';
// import CarouselImage6 from '../assets/clothes.png';
import C1 from '../assets/C1.png';
import C2 from '../assets/C2.png';
import C3 from '../assets/C3.png';
import C4 from '../assets/C4.png';
import C5 from '../assets/C5.png';
import F1 from '../assets/F1.png';
import F2 from '../assets/F2.png';
import F3 from '../assets/F3.png';
import F4 from '../assets/F4.png';
import F5 from '../assets/F5.png';
import J1 from '../assets/J1.png';
import J2 from '../assets/J2.png';
import J3 from '../assets/J3.png';
import J4 from '../assets/J4.png';
import J5 from '../assets/J5.png';
import J6 from '../assets/J6.png';
import J7 from '../assets/J7.png';
import H1 from '../assets/H1.png';
import H2 from '../assets/H2.png';
import H3 from '../assets/H3.png';
import H4 from '../assets/H4.png';
import H5 from '../assets/H5.png';
import H6 from '../assets/H6.png';
import H7 from '../assets/H7.png';
import H8 from '../assets/H8.png';

// import CarouselImage6 from '../assets/clothes.png';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

// import './Homepage.css'; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';

const Templatepage = () => {
  const deviceWidth = window.innerWidth;
  const dxx = deviceWidth / 20;
  const [randomWord, setRandomWord] = useState('potential');
  const [key, setKey] = useState(0); // Key for forcing re-render

  useEffect(() => {
    const intervalId = setInterval(() => {
      const words = ['Scale', 'Worth','Vision', 'Value', 'Capabilities', 'Potential', 'genius', 'radiance', 'power'];
      const randomIndex = Math.floor(Math.random() * words.length);
      setRandomWord(words[randomIndex]);
            setKey(prevKey => prevKey + 1);

    }, 2000); // Change word every 5 seconds

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once
  
  return (
    <div className='template-page'>

      <div className='t-slide1'>
            <BouncingBalls numBalls={dxx} />

        <h1>We Offer Custom Services to all sorts of businesses, Explore these and
          <br />Realise your true <span className='youu'  key={key}>
            "{randomWord.toUpperCase()}"
          </span>
        </h1>
        {/* <h1>Better For Everyone </h1> */}
            
        {/* <h2> by <a href='https://vinayak-rai.onrender.com/'>VINAYAK RAI</a></h2>
            <h4>Stay tuned to know more!</h4>       */}
      </div>
      {/* <div className="photo-scroller">
      <div className="photo-container">
          <img src={CarouselImage1} alt="Cosmetics" />
          <img src={CarouselImage2} alt="Cosmetics" />
          <img src={CarouselImage3} alt="Cosmetics" />
          <img src={CarouselImage4} alt="Cosmetics" />
            <img src={CarouselImage5} alt="Cosmetics" />
          <img src={CarouselImage6} alt="Cosmetics" />
         </div>   
      </div> */}
      {/* </div> */}
      <div className='t-slide2'>
        <div className='scroll'>
          <div class="containerr">
            <div class="left-bar">
              <div class="circle red"></div>
              <div class="circle yellow"></div>
              <div class="circle green"></div>
            </div>
            <div class="middle-bar"></div>
            <div class="right-bar">
              <div class="block"></div>
              <div class="block"></div>
            </div>
          </div>
          <div className="photo-scroller">
            <div className="photo-container">
              <img src={C1} alt="Cosmetics" />
              <img src={C2} alt="Cosmetics" />
              <img src={C3} alt="Cosmetics" />
              <img src={C4} alt="Cosmetics" />
              <img src={C5} alt="Cosmetics" />
              {/* <img src={CarouselImage6} alt="Cosmetics" /> */}
            </div>
          </div>
        </div>
      
        {/* <iframe src="https://taste1.my.canva.site"></iframe> */}



        <h1>
          <span className='you'>"Soft blush Beauty"</span>
          <br />
          Product Launch Website in Cream and Brown
          {/* <br/>Better For Everyone  */}
        </h1>
        {/* <h1>Better For Everyone </h1> */}
            

      </div>
      <div className='t-slide3'>
        <div className='scroll'>
          <div class="containerr">
            <div class="left-bar">
              <div class="circle red"></div>
              <div class="circle yellow"></div>
              <div class="circle green"></div>
            </div>
            <div class="middle-bar"></div>
            <div class="right-bar">
              <div class="block"></div>
              <div class="block"></div>
            </div>
          </div>
          <div className="photo-scroller">
            <div className="photo-container">
              <img src={F1} alt="Cosmetics" />
              <img src={F2} alt="Cosmetics" />
              <img src={F3} alt="Cosmetics" />
              <img src={F4} alt="Cosmetics" />
              <img src={F5} alt="Cosmetics" />
              {/* <img src={CarouselImage6} alt="Cosmetics" /> */}
            </div>
          </div>
        </div>

        <h1>
          <span className='you'>"Cafe On Eleventh"</span>
          <br />
          Food and Restaurant Service Website in Pink and Dark Green Photographic Style
        </h1>
      </div>
      <div className='t-slide4'>
        <div className='scroll'>
          <div class="containerr">
            <div class="left-bar">
              <div class="circle red"></div>
              <div class="circle yellow"></div>
              <div class="circle green"></div>
            </div>
            <div class="middle-bar"></div>
            <div class="right-bar">
              <div class="block"></div>
              <div class="block"></div>
            </div>
          </div>
          <div className="photo-scroller">
            <div className="photo-container">
              <img src={J1} alt="Cosmetics" />
              <img src={J2} alt="Cosmetics" />
              <img src={J3} alt="Cosmetics" />
              <img src={J4} alt="Cosmetics" />
              <img src={J5} alt="Cosmetics" />
              <img src={J6} alt="Cosmetics" />
              <img src={J7} alt="Cosmetics" />
              {/* <img src={CarouselImage6} alt="Cosmetics" /> */}
            </div>
          </div>
        </div>
        <h1>
          <span className='you'>"Beauty Grown"</span>
          <br />
          Jewelry Business Website in Cream White Dark Green Modern Elegance Style
        </h1>
      </div>
      <div className='t-slide5'>
        <div className='scroll'>
          <div class="containerr">
            <div class="left-bar">
              <div class="circle red"></div>
              <div class="circle yellow"></div>
              <div class="circle green"></div>
            </div>
            <div class="middle-bar"></div>
            <div class="right-bar">
              <div class="block"></div>
              <div class="block"></div>
            </div>
          </div>
          <div className="photo-scroller">
            <div className="photo-container">
              <img src={H1} alt="Cosmetics" />
              <img src={H2} alt="Cosmetics" />
              <img src={H3} alt="Cosmetics" />
              <img src={H4} alt="Cosmetics" />
              <img src={H5} alt="Cosmetics" />
              <img src={H6} alt="Cosmetics" />
              <img src={H7} alt="Cosmetics" />
              <img src={H8} alt="Cosmetics" />
            
              {/* <img src={CarouselImage6} alt="Cosmetics" /> */}
            </div>
          </div>
        </div>
        <h1>
          <span className='you'>"The Wellhall"</span>
          <br />
          Hotels Business Website in Brown White Modern Elegance Style<br />
        </h1>
      </div>
      <div className='slide4'>
        <h1>
          Go Online with Us <br />
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
};

export default Templatepage;
