import React from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import {useLocation, useNavigate} from "react-router-dom";
import homeImage from '../images/office-vector.jpg'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function Home() {

    const location = useLocation();
    const user = location.state;
    const userDetails = JSON.parse(JSON.stringify(user));
    const navigate = useNavigate();

    return(
        <div>
            <div style={{textAlign:'center', marginTop:'50px'}}>
                <Typography variant="h4" gutterBottom>HOME PAGE</Typography>
                <img src={homeImage} />
                <h1>Welcome {userDetails.name}</h1>
                <Button variant="contained" size="medium"  style={{background:'#68BE08'}} onClick={() => navigate('/')}>Logout</Button>

            </div>
            
        </div>
    );
}

export default Home;