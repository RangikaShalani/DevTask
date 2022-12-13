import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes, Link, useLocation } from "react-router-dom";
//pages
import Login from './pages/Login';
import Home from './pages/Home';
import changeRoute from './pages/changeRoute';


function App() {
  // const [islogin, setLoginSuccess] = useState("false"); 
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // const location = useLocation();
  // setIsLoading(location.state) ;
  //   const userDetails = JSON.parse(JSON.stringify(isLoading));
  //   alert(userDetails);
  return (

      <Router>
         <div>
           
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={ <Home /> } />   
        </Routes>
        {/* islogin? <Login />: */}
          
         </div>
       </Router>
     );
}

export default App;
