// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import './App.css';
import Layout from "./Layout";



function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<HomePage />} />
        </Route>
    </Routes>
  );
}

export default App;
