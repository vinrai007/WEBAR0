import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

import { useState, useEffect } from 'react';
import BouncingBalls from '../BouncingBalls';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

// import './Homepage.css'; // Import the CSS file for styling
import 'bootstrap/dist/css/bootstrap.min.css';
// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();
  const deviceWidth = window.innerWidth;
  const dxx = deviceWidth / 20;
  const [randomWord, setRandomWord] = useState('potential');
  const [key, setKey] = useState(0); // Key for forcing re-render
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

    return (
        <div className='template-page'>
      <div className='c-slide1'>
            <BouncingBalls numBalls={dxx} />
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
    {/* <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      </StyledContactForm> */}
            <div className='c-slide4'>
        <h1>
          Go Online with Us <br />
          <span>
            Reach out to everyone and anyone around the world
          </span>
        </h1>
        <Link to="/register">
          <Button variant="dark" >
            Contact Us
          </Button></Link>
            </div>
            </div>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 100%;
//   top: 10%;
//   position: absolute;
//     background-color: #1F4172;
//   padding-bottom: 110px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 400px;
    margin : auto;
    font-size: 16px;

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