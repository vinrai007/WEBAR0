// src/Homepage.js
// import React from 'react';
import React, { useState, useEffect } from 'react';
import BouncingBalls from '../BouncingBalls';
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";


// import CarouselImage6 from '../assets/clothes.png';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

// import './Homepage.css'; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';

const Templatepage = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2fq8ytr",
        "template_cydzx57",
        form.current,
        "WsI3YhW1IZiIdhS0a"
      )
      .then(
        (result) => {
          console.log(result.text);
              console.log("message sent");
              e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
    };
    
    //

  const deviceWidth = window.innerWidth;
  const dxx = deviceWidth / 20;
  const [randomWord, setRandomWord] = useState('potential');
  const [key, setKey] = useState(0); // Key for forcing re-render

  useEffect(() => {
    const intervalId = setInterval(() => {
      const words = ['Scale', 'Worth','Vision', 'Value', 'Potential', 'genius', 'radiance', 'power'];
      const randomIndex = Math.floor(Math.random() * words.length);
      setRandomWord(words[randomIndex]);
            setKey(prevKey => prevKey + 1);

    }, 2000); // Change word every 5 seconds

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run effect only once
  
  return (
    <div className='contact'>
    <div className='template-page'>

      <div className='c-slide1'>
            {/* <BouncingBalls numBalls={dxx} /> */}
        <h1>Get in Touch
                  <br />Realise your true <br/>
                  <span className='youu' key={key}>
            "{randomWord.toUpperCase()}"
          </span>
        </h1>
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
        {/* <h1>Better For Everyone </h1> */}
            
        {/* <h2> by <a href='https://vinayak-rai.onrender.com/'>VINAYAK RAI</a></h2>
            <h4>Stay tuned to know more!</h4>       */}
      </div>

      <div className='c-slide4'>
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
    </div>

  );
};

export default Templatepage;


const StyledContactForm = styled.div`
  width: 90%;
  margin : auto;  
  padding : 10px;
  color: #FF7ED4;
    z-index: 5;


  form {

    padding: 10px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
      padding-bottom: 100px;


    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
      font-size: 20px;
      font-weight: bold;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;
