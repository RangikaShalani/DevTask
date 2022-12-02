import React, { useState } from 'react';
import { BrowserRouter as Router, Route,Routes, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//material UI import
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//page or image import
import loginGif from '../images/loginGIF.gif';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




function Login() {
    const navigate = useNavigate()
    type Values = {
        userName : string,
        password : string,
        
    }
    const [values,setValues] = useState<Values>({
        userName : "",
        password : "",
        
    });

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values,[event.target.name] : event.target.value});
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!values.userName){
            alert("Something in Worng, User name is Empty...!!! ")
        }else{
            if(!values.password){
                alert("Something in Worng, Password is Empty...!!! ") 
            }else{
                console.log("response");
                const response= axios.post("http://restapi.adequateshop.com/api/authaccount/login", {values});
                console.log(response);
            }
        }
    }

    return(
        <div style={{height:'100vh',width:'100vw'}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container
                      direction="row"
                      justifyContent="center"
                      alignItems="center" 
                      spacing={2}>
                    <Grid  >
                        <img src={loginGif} />
                    </Grid>
                    <Grid style={{justifyContent:"center", alignItems:"center" }}>
                        <Box sx={{ '& > :not(style)': {width:'80%' ,height:600},}}>
                            <form onSubmit={(e) => handleSubmit(e)} >
                            
                                <div style={{margin:40,alignItems:'center'}}>
                                <Typography variant="h5" gutterBottom> Login</Typography>
                                    <Grid>
                                        <Grid style={{marginBottom:10}}>
                                            <TextField fullWidth
                                            id="standard-basic" 
                                            label="User Name" 
                                            variant="standard"
                                            name="userName"
                                            onChange={handleChange}/>
                                        </Grid>
                                        <Grid style={{marginBottom:10}}>
                                            <TextField
                                            id="standard-password-input"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                            variant="standard"
                                            name='password'
                                            onChange={handleChange}/>
                                        </Grid>
                                        <Grid>
                                            <Button type={"submit"} variant="contained" size="medium"  style={{background:'#68BE08'}} >Login</Button>
                                        </Grid>
                                    </Grid>
                                </div>
                            
                            </form>    
                        </Box>
                    </Grid>    
                </Grid>
            </Box>
        </div>
    );
}

export default Login;