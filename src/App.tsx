import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
//pages
import Login from './pages/Login';
import Home from './pages/Home'

function App() {
  return (

      <Router>
         <div>
           
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />   
        </Routes>
          
         </div>
       </Router>
     );
}

export default App;
