// src/App.js
import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
// import { ContactUs as ContactPage } from './Pages/ContactPage';

import NewPage from "./Pages/NewPage";
import TemplatePage from "./Pages/TemplatePage";
import PricingPage from "./Pages/PricingPage";
import AboutPage from "./Pages/AboutPage";

import './App.css';
import Layout from "./Layout";



function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>

        <Route index element={<HomePage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Pricing" element={<PricingPage />} />
          <Route path="/New" element={<NewPage />} />
          <Route path="/Template" element={<TemplatePage />} />
          <Route path="/About" element={<AboutPage />} />        
        </Route>
    </Routes>
  );
}

export default App;
